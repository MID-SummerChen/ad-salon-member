<template>
  <div id="Home">
    <div class="banner">
    </div>
    <div class="row searchBox">
      <div class="col-xs-12 col-sm-8 col-md-6">
        <mu-select-field :labelFocusClass="['label-foucs']" hintText="城市" v-model="searchForm.city">
          <mu-menu-item v-for="city in cityList" :value="city" :title="city" />
        </mu-select-field>
        <mu-select-field :labelFocusClass="['label-foucs']" hintText="地區" v-model="searchForm.area">
          <mu-menu-item v-for="area in areaList" :value="area" :title="area" />
        </mu-select-field>
        <mu-raised-button primary @click="onSearchSubmit">搜尋</mu-raised-button>
      </div>
    </div>
    <div style="margin-top: 80px"></div>
    <div class="sec">
      <h3 class="title">人氣髮型</h3>
      <div class="container">
        <div class="sec-top-btns">
          <mu-float-button mini>男</mu-float-button>
          <mu-float-button mini secondary>女</mu-float-button>
        </div>
        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3" data-uk-grid>
          <div v-for="n in 6" class="card-wrap">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <router-link :to="{name: 'WorkView', query: {n}}"><img src="/static/imgs/work01.jpg"></router-link>
                </md-card-media>
              </md-card-area>
               <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                  <md-tooltip md-direction="top">加入收藏</md-tooltip>
                </md-button>

                <md-button class="md-icon-button" @click="$router.push({name: 'StoreSchedule'})">
                  <md-icon>event</md-icon>
                  <md-tooltip md-direction="top">立即預約</md-tooltip>
                </md-button>
              </md-card-actions> 
            </md-card>
          </div>
        </div>
        <!-- <div class="more"><mu-raised-button label="看更多作品" secondary/></div> -->
      </div>
    </div>
    <div class="sec">
      <h3 class="title">最新髮型</h3>
      <div class="container">
        <div class="sec-top-btns">
          <mu-float-button mini>男</mu-float-button>
          <mu-float-button mini secondary>女</mu-float-button>
        </div>
        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3" data-uk-grid>
          <div v-for="n in 6" class="card-wrap">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <router-link :to="{name: 'WorkView', query: {n}}"><img src="/static/imgs/work01.jpg"></router-link>
                </md-card-media>
              </md-card-area>
               <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                  <md-tooltip md-direction="top">加入收藏</md-tooltip>
                </md-button>

                <md-button class="md-icon-button" @click="$router.push({name: 'StoreSchedule'})">
                  <md-icon>event</md-icon>
                  <md-tooltip md-direction="top">立即預約</md-tooltip>
                </md-button>
              </md-card-actions> 
            </md-card>
          </div>
        </div>
        <!-- <div class="more"><mu-raised-button label="看更多作品" secondary/></div> -->
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import commonMixin from '@/utils/commonMixin'
export default {
  name: 'Home',
  mixins: [commonMixin],
  data () {
    return {
      searchForm: {
        city: "",
        area: ""
      },
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
  mounted() {
    this.cityList = _.map(this.postCode, "city")
    
  },
  methods: {
    ...mapActions([
      'getStoreList'
    ]),
    async onSearchSubmit() {
      var {city, area} = this.searchForm
      this.$router.push({name: 'StoreSearchResult', query: {city, area}})
      
    }
  }
}
</script>

<style lang="stylus">
#Home 
  padding-bottom: 100px
  .banner
    height: 450px 
    background-color: #333 
  .searchBox
    margin: 0 auto 
    margin-top: -180px
    > div 
      background-color: rgba(#fff, 0.8)
      border-radius: 3px
      position: relative
      padding: 20px
      margin: 20px
      @media screen and (max-width: 767px)
        padding: 15px
        margin: 10px
      .mu-select-field
        width: 30%
        margin-right: 10px
      .mu-raised-button
        position: relative
        top: -10px

  .sec 
    padding: 60px 0
    h3 
      font-size: 24px 
      text-align center
      letter-spacing 10px
      margin-bottom: -70px
      &::after 
        content: ""
        border-bottom: 2px solid #4DEFD4
        display block
        width: 70px 
        margin: 15px auto
    .more 
      margin: 30px 0
      text-align center
    img 
      width: 100%
    .sec-top-btns
      text-align: right 
      margin: 20px


</style>
