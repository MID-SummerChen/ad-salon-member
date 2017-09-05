<template>
  <div id="StoreSchedule">
    <h3 class="pageTitle">預約時間</h3>
    <div class="container">
      <div class="top-btns">
        <div class="left">
          <mu-select-field v-model="searchForm.designerGuid" labelFloat label="請選擇設計師">
            <mu-menu-item v-for="(d,i) in designerList" :key="i" :value="d.designerGuid" :title="d.nick" />
          </mu-select-field>
        </div>
        <div class="right">
          <mu-raised-button label="確認預約" primary @click="onSubmit" :disabled="!searchForm.designerGuid"/>
        </div>
        
        <!-- <mu-raised-button label="搜尋" primary @click="onSearch" :disabled="!searchForm.designerGuid"/> -->
        
      </div>
      <!-- <div style="margin-top: 30px"></div> -->
      <template v-if="datesOfWeek.length > 0">
        <div style="margin-top: 10px"></div>
        <el-table :data="timesOfDay" border height="500" style="width: 100%">
          <el-table-column prop="time" label="日期" width="60" fixed></el-table-column>
          <template v-for="d in datesOfWeek">
            <el-table-column :label="d | date">
              <template scope="scope">
                <div class="timeScope" 
                    @click="onSelectedTime(d, scope.row.time)"
                    :class="{
                      available: getTimeStatus(d, scope.row.time) === 1,
                      booked: getTimeStatus(d, scope.row.time) === 2,
                      canceled: getTimeStatus(d, scope.row.time) === 3,
                    }">{{toEnum('orderStatus', getTimeStatus(d, scope.row.time))}}</div>

                <!-- <div class="timeScope available" v-if="avaliableTime.findIndex(t => t.date === d && t.time === scope.row.time && t.status == 1) > -1" @click="onSelectedTime(d, scope.row.time)"></div>
                <div class="timeScope booked" v-if="avaliableTime.findIndex(t => t.date === d && t.time === scope.row.time && t.status == 2) > -1"></div>
                <div class="timeScope canceled" v-if="avaliableTime.findIndex(t => t.date === d && t.time === scope.row.time && t.status == 0) > -1"></div> -->
              </template>
            </el-table-column>
          </template>
        </el-table>
      </template>
    </div>
    <!-- {{avaliableTime}} -->
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'StoreSchedule',
  mixins: [commonMixin],
  data() {
    var leftTimes = []
    var st_t = moment().set('hour', 9).set('minute', 0)
    var ed_t = moment().set('hour', 9).set('minute', 0).add(13, 'hours')
    pushTime()
    function pushTime () {
      if(ed_t > st_t) {
        leftTimes.push(st_t.format("HH:mm"))
        st_t = st_t.add(30, "m")
        pushTime()
      }
    }
    return {
      currentMonth: moment().format('M') + '月',
      timesOfDay: _.map(leftTimes, v => ({time: v})),
      datesOfWeek: [],
      storeList: [],
      designerList: [],
      currentWeek: 1,
      _avaliableTime: [],
      avaliableTime: [],
      searchForm: {
        storeGuid: "",
        designerGuid: "",
        weekType: 1,
      },
    }
  },
  mounted() {
    this._getDesignerList()
    
  },
  computed: {
    ...mapGetters([
    ]),
  },
  filters: {
    date(val) {
      return moment(val).format('MM/DD (dd)')
    },
    date_mobile(val) {
      return moment(val).format('D') + '日'
    },
  },
  watch: {
    'searchForm.designerGuid': 'onSearch'
  },
  methods: {
    ...mapActions([
      'getTimeTable',
      'getStoreList',
      'getOrderList',
      'getDesignerList',
      'addAvailableTime',
    ]),
    getTimeStatus(date, time) {
      var i = _.findIndex(this.avaliableTime, {date, time})
      return i > -1 ? this.avaliableTime[i].status-0 : ""
    },
    async getOrder(date, time) {
      var i = _.findIndex(this.avaliableTime, {date, time})
      if(i > -1) {
        var id = this.avaliableTime[i].orderGuid
        this.$router.push({name: "Order", query: {id}})
      }
    },
    isPastTime(date, time) {
      return moment().isAfter(`${date} ${time}`)
    },
    selectDate(date) {
      var count = _.filter(this.avaliableTime, t => t.date == date && (t.status == 1 || t.status == undefined) && !this.isPastTime(t.date, t.time)).length
      if(count > 0) {
        _.each(this.timesOfDay, dt => {
          var i = _.findIndex(this.avaliableTime, {date, time: dt.time})
          if(i > -1 && !this.isPastTime(date, dt.time) && (this.avaliableTime[i].status == 1 || this.avaliableTime[i].status == undefined)) {
            this.avaliableTime = _.filter(this.avaliableTime, t => !(t.date === date && t.time === dt.time))
          }
        })
      }else {
        _.each(this.timesOfDay, dt => {
          var i = _.findIndex(this.avaliableTime, {date, time: dt.time})
          if(i === -1 && !this.isPastTime(date, dt.time)) {
            this.avaliableTime = this.avaliableTime.concat([{date, time: dt.time, status: '1'}])
          }
        })
      }
      
      
    },
    onSelectedTime(date, time) {
      alert(date + time)
      
    },
    async _getStoreList() {
      var res = await this.getStoreList()
      if(res.code === 0) {
        this.storeList = res.data.storeList
      }
    },
    async _getDesignerList() {
      var data = {
        storeGuid: "36036f3c-626f-11e7-9a26-00163e383b35"
      }

      this.designerList = []
      this.searchForm.designerGuid = ""
      var res = await this.getDesignerList(data)
      if(res.code === 0) {
        this.designerList = _(res.data.designerList).filter({stats: 1}).orderBy("appoint", "desc").value()
      }
    },
    async onSearch() {
      if(!this.searchForm.designerGuid) return
      var data = {
        designerGuid: this.searchForm.designerGuid,
        searchDate: this.searchForm.weekType === 1 ? moment().format("YYYY-MM-DD") : moment().add(7, 'd').format("YYYY-MM-DD")
      }
      var res = await this.getTimeTable(data)
      if(res.code === 0) {
        this.datesOfWeek = _.map(res.data.timeTable, "date")
        this._avaliableTime = []
        _.each(res.data.timeTable, d => {
          this._avaliableTime = this._avaliableTime.concat(_.map(d.timeArr, t => ({...t, date: d.date, time: t.time, status: t.status})))
        })
        this.avaliableTime = _.clone(this._avaliableTime)
        // console.log(this.avaliableTime)
      }
    },
    onReset() {
      this.avaliableTime = _.clone(this._avaliableTime)
    },
    async onSubmit() {
      

    }
  }
}
</script>
<style lang="stylus">
#StoreSchedule
  padding 50px 0
  min-height calc(100vh - 200px)
  background-color: #f5f5f5
  .pageTitle 
    margin-bottom: -20px
  h3 
    font-size: 26px 
    text-align center
    letter-spacing 3px
    // font-weight bold
    &::after 
      content: ""
      border-bottom: 2px solid #4DEFD4
      display block
      width: 70px 
      margin: 20px auto
  .top-btns
    display: flex
    .left, .right
      flex: 1

    .right 
      display: flex
      align-items: center
      justify-content flex-end
    .mu-text-field
      width: 200px
      // text-align: left
    .mu-text-field,
    .mu-raised-button
      vertical-align middle
      display: inline-block
      margin-right: 10px
  .el-table 
    th, td
      height: 30px
      >.cell
        padding: 0
        text-align center
        height: 100%
        > .timeScope
          height: 100%
          &.available
            background-color: #eee
            cursor: pointer

  .el-table__body tr.hover-row > td
    background-color: transparent
  .el-table th, 
  .el-table__header-wrapper thead div,
  .el-table__fixed-header-wrapper thead div
    background-color: #eee
</style>