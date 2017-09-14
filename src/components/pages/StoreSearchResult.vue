<template>
  <div id="StoreSearchResult">
    <h2 class="pageTitle">搜尋結果</h2>
    <div class="container">
      <div class="searchBox">
        <mu-select-field :labelFocusClass="['label-foucs']" hintText="城市" v-model="searchForm.city">
          <mu-menu-item v-for="city in cityList" :value="city" :title="city" />
        </mu-select-field>
        <mu-select-field :labelFocusClass="['label-foucs']" hintText="地區" v-model="searchForm.area">
          <mu-menu-item v-for="area in areaList" :value="area" :title="area" />
        </mu-select-field>
        <mu-raised-button primary @click="onSearchSubmit">搜尋</mu-raised-button>
      </div>
      <div v-for="store in storeList" class="listItem" @click="onRowClicked(store.noid, store.storeGuid)">
        <div v-if="store.pic" class="item-img" :style="'background-image: url(' + store.pic + ')'"></div>
        <div v-else class="item-img" style="background-image: url('/static/imgs/store01.jpg')"></div> <!-- 預設圖 -->
        <div class="item-content">
          <h4>{{store.storeName}}</h4>
          <p><i class="fa fa-picture-o"><md-tooltip md-direction="top">作品數量</md-tooltip></i> {{store.work}}</p>
          <p><i class="fa fa-users"><md-tooltip md-direction="top">設計師數量</md-tooltip></i> {{store.designer}}</p>
          <p><i class="fa fa-map-marker"><md-tooltip md-direction="top">髮廊地址</md-tooltip></i> {{store.address}}</p>
          <p><i class="fa fa-commenting-o"><md-tooltip md-direction="top">評價數</md-tooltip></i> ??</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'StoreSearchResult',
  mixins: [commonMixin],
  data () {
    return {
      searchForm: {
        city: this.$route.query.city,
        area: this.$route.query.area,
      },
      storeList: [],
    }
  },
  computed: {
    cityList() {
      return _.map(this.postCode, "city")
    },
    areaList() {
      var i = _.findIndex(this.postCode, {city: this.searchForm.city})
      return i > -1 ? _.map(this.postCode[i].areaList, "area") : []
    }
  },
  watch: {
    $route: "_getStoreList"
  },
  async mounted() {
    await this._getStoreList()
  },
  methods: {
    ...mapActions([
      'getStoreList'
    ]),
    async _getStoreList() {
      this.storeList = []
      var {city, area} = this.$route.query
      var data = {
        address_mask: city + area
      }
      var res = await this.getStoreList(data)
      if(res.code === 0) {
        this.storeList = res.data.storeList
      }
      return 
    },
    async onSearchSubmit() {
      var {city, area} = this.searchForm
      this.$router.push({name: 'StoreSearchResult', query: {city, area}})
    },
    onRowClicked(noid, guid) {
      this.$router.push({name: 'StoreView', query: {noid, guid}})
    }
  }
}
</script>

<style lang="stylus">
#StoreSearchResult
  padding: 50px 0
  .pageTitle
    margin-bottom: 30px
  .searchBox
    // padding: 15px
    // border: 1px solid #ccc 
    // border-radius 5px
    // margin: 20px 0
    .mu-select-field
      width: 150px
      margin-right: 10px
    .mu-raised-button
      position: relative
      top: -10px
  .listItem 
    display flex
    .item-img 
      width: 200px
      background-size: cover 
      background-position: center center
    .item-content
      flex-grow: 1
      margin-left: 20px
      h4 
        font-size: 22px
      p 
        font-size: 16px 
        margin: 10px 0
        line-height 22px
        color: #333
        i.fa 
          font-size: 18px 
          width: 30px 
          text-align center
</style>
