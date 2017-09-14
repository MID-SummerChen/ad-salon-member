<template>
  <div id="StoreView">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-7 slider">
            <div class="uk-slidenav-position" data-uk-slideshow>
              <ul class="uk-slideshow">
                <li><img src="/static/imgs/store01.jpg" alt=""></li>
                <li><img src="/static/imgs/work01.jpg" alt=""></li>
                <li><img src="/static/imgs/store01.jpg" alt=""></li>
                <li><img src="/static/imgs/work01.jpg" alt=""></li>
              </ul>
              <a href="" class="uk-slidenav uk-slidenav-previous"></a>
<a href="" class="uk-slidenav uk-slidenav-next"></a>
              <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
              <a href="" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
              <!-- <ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center">
                <li data-uk-slideshow-item="0"><a href=""></a></li>
                <li data-uk-slideshow-item="1"><a href=""></a></li>
                <li data-uk-slideshow-item="2"><a href=""></a></li>
                <li data-uk-slideshow-item="3"><a href=""></a></li>
              </ul> -->
            </div>

            <!-- <div class="slider">
              <img src="/static/imgs/store01.jpg" alt="">
            </div> -->
          </div>
          <div class="col-xs-12 col-sm-5 intro">
            <!-- <div class="topBtns">
              <button class="btn btn-default">收藏</button>
              <button class="btn btn-default">預約</button>
            </div> -->
            <h3>{{storeData.storeName}}</h3>
            <hr>
            <p>
              <span><i class="fa fa-picture-o"></i>作品數</span>
              <a href="#work" data-uk-smooth-scroll="{offset: 80}">{{storeData.work}}</a> 件
            </p>
            <p>
              <span><i class="fa fa-users"></i>設計師數</span>
              <a href="#designer" data-uk-smooth-scroll="{offset: 80}">{{storeData.designer}}</a> 位
            </p>
            <p><span><i class="fa fa-map-marker"></i>髮廊地址</span><a href="#map" data-uk-smooth-scroll="{offset: 80}">{{storeData.address}}</a></p>
            <p><span><i class="fa fa-commenting-o"></i>評價數</span><a href="">??</a> 筆</p>
            <hr>
            <div class="centerBtns">
              <a href="#desc" class="btn btn-default" data-uk-smooth-scroll="{offset: 80}">髮廊介紹</a>
              <a href="#service" class="btn btn-default" data-uk-smooth-scroll="{offset: 80}">價目表</a>
              <a href="#designer" class="btn btn-default" data-uk-smooth-scroll="{offset: 80}">設計師介紹</a>
              <a href="#work" class="btn btn-default" data-uk-smooth-scroll="{offset: 80}">作品集</a>
              <a href="#comment" class="btn btn-default" data-uk-smooth-scroll="{offset: 80}">消費評價</a>
            </div>
            <div class="bottomBtns">
              <a href="#service" class="btn btn-block btn-default" data-uk-smooth-scroll="{offset: 80}">立即預約</a>
              <a href="" class="btn dark btn-block btn-default">加入收藏</a>
              <!-- <mu-raised-button label="立即預約" @click="$router.push({name: 'StoreView', hash: '#service'})" primary fullWidth/>
              <mu-raised-button label="加入收藏" secondary  fullWidth/> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="desc" class="sec">
      <div class="container">
        <h3>店家介紹</h3>
        <p>{{storeData.descr}}</p>
      </div>
    </div>
    <div id="service" class="sec">
      <div class="container">
        <h3>服務項目</h3>
        <div v-if="promotionList.length > 0" class="paper">
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th colspan="4">最新優惠</th>
                </tr>
              </thead> 
              <tbody>
                <tr v-for="n in promotionList">
                  <td>韓式空氣剪髮</td>
                  <!-- <td style="width: 150px"><img src="/static/imgs/work01.jpg" alt=""></td> -->
                  <td>480 元</td>
                  <td>1.5 hr</td>
                  <td style="min-width: 200px">
                    <mu-raised-button label="立即預約" @click="$router.push({name: 'StoreSchedule'})" primary/>
                    <!-- <mu-raised-button label="收藏" secondary/> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
        <div v-if="priceList.length > 0" class="paper">
          <div class="table-responsive">
            <table>
              <thead>
                <tr>
                  <th colspan="4">一般項目</th>
                </tr>
              </thead> 
              <tbody>
                <tr v-for="n in priceList">
                  <td>{{n.name}}</td>
                  <!-- <td style="width: 150px"><img src="/static/imgs/work01.jpg" alt=""></td> -->
                  <td>{{n.price}} 元</td>
                  <td>{{n.neededTime}} hr</td>
                  <td>
                    <mu-raised-button label="立即預約" @click="onPriceClicked(n.priceGuid)" primary/>
                    <!-- <mu-raised-button label="收藏" secondary/> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
    <div id="work" class="sec">
      <div class="container">
        <h3>最新作品</h3>

        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-5" data-uk-grid>
          <div v-for="w in workList" class="card-wrap">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <router-link :to="{name: 'WorkView', query: {work_id: w.workGuid}}">
                    <img src="/static/imgs/work01.jpg">
                  </router-link>
                </md-card-media>
              </md-card-area>
            </md-card>
          </div>
        </div>
        <div class="more"><mu-raised-button label="看更多作品" secondary/></div>
      </div>
    </div>
    <div id="designer" class="sec">
      <div class="container">
        <h3>設計師介紹</h3>

        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-4" data-uk-grid>
          <div v-for="d in designerList" class="card-wrap">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <router-link :to="{name: 'DesignerView'}">
                    <img src="/static/imgs/work01.jpg">
                  </router-link>
                </md-card-media>

                <md-card-header>
                   <div class="md-title">{{d.nick}}</div> 
                    <!-- <div class="md-subhead">CUTE SALON</div>   -->
                </md-card-header>

                <!-- <md-card-content>
                  店名, 資料圖片第一張, 作品數, 設計師人數, 地址, 留言評價數
                </md-card-content> -->
              </md-card-area>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>favorite</md-icon>
                  <md-tooltip md-direction="top">加入收藏</md-tooltip>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>collections</md-icon>
                  <md-tooltip md-direction="top">作品集</md-tooltip>
                </md-button>

                <md-button class="md-icon-button" @click="$router.push({name: 'StoreSchedule'})">
                  <md-icon>event</md-icon>
                  <md-tooltip md-direction="top">立即預約</md-tooltip>
                </md-button>
              </md-card-actions>
            </md-card>
          </div>
          
        </div>
      </div>
    </div>

    <div id="comment" class="sec">
      <div class="container">
        <h3>最新評價</h3>
        <div class="uk-grid-width-small-1-1" data-uk-grid>
          <div class="card-wrap" v-for="n in 3">
            <md-card>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">評價的標題在這</div>
                  <div class="md-subhead">by 艾莉莎</div>
                  <md-rating-bar v-model="rating" :md-max-rating="5" class="md-warn" disabled></md-rating-bar>
                  <div class="md-content">fafjeifaweffafjeifaweffafjeifaweffafjeifawef, fafjeifaweffafjeifawef
                    fafjeifaweffafjeifaweffafjeifawef,fafjeifaweffafjeifaweffafjeifaweffafjeifaweffaf, jeifaweffafjeifaweffafjeifaweffafjeifaweffafjeifawef.</div>
                </md-card-header-text>

                <!-- <md-card-media>
                  <img src="/static/imgs/work01.jpg">
                </md-card-media> -->
              </md-card-header>

              <!-- <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions> -->
            </md-card>
          </div>
        </div>
        <!-- <div class="more"><mu-raised-button label="看更多作品" secondary/></div> -->
      </div>
    </div>

    <div id="map" class="sec">
      <div ref="map" class="map"></div>
    </div>
    
    
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'StoreView',
  data () {
    return {
      rating: 4.5,
      storeData: {},
      designerList: [],
      workList: [],
      promotionList: [],
      priceList: [],
    }
  },
  mounted() {
    this.getStore()
    this._getDesignerList()
    this._getWorkList()
    this._getPriceList()
    
  },
  methods: {
    ...mapActions([
      'getStoreList',
      'getDesignerList',
      'getWorkList',
      'getPriceList',
    ]),
    onPriceClicked(priceGuid) {
      this.$router.push({name: 'StoreSchedule', query: {prc_id: priceGuid}})
    },
    async getStore() {
      var res = await this.getStoreList({noid_mask: this.$route.query.noid})
      if(res.code === 0 && res.data.storeList[0]) {
        this.storeData = res.data.storeList[0]
        this.initMap(this.storeData.address)
      }
    },
    async _getDesignerList() {
      var res = await this.getDesignerList({storeGuid: this.$route.query.guid})
      if(res.code === 0) {
        this.designerList = _.filter(res.data.designerList, {appoint: 1})
      }
    },
    async _getPriceList() {
      var res = await this.getPriceList({storeGuid: this.$route.query.guid})
      if(res.code === 0) {
        this.promotionList = _.filter(res.data.priceList, {priceType: '2'})
        this.priceList = _.filter(res.data.priceList, {priceType: '1'})
      }
    },
    async _getWorkList() {
      var res = await this.getWorkList({storeGuid: this.$route.query.guid})
      if(res.code === 0) {
        this.workList = res.data.workList
      }
    },
    async initMap(address) {
      var data = {
        key: "AIzaSyCBVY-1DcsBageoWwtD8MGdRx0isT5kpeY",
        address,
      }
      var res = await $.get('https://maps.googleapis.com/maps/api/geocode/json', data)
      if(res.status === 'OK') {
        var location = res.results[0].geometry.location
        var _opt = {center: location, zoom: 15};
        var map = new google.maps.Map(this.$refs.map, _opt);

        var marker = new google.maps.Marker({
          position: location,
          map
        });
      }
    }
  }
  
}
</script>

<style lang="stylus">
#StoreView
  background-color: #f5f5f5
  // padding-bottom: 100px
  .main 
    background-color: #fff
    padding: 40px 0
    @media screen and (max-width: 767px)
      padding-top: 20px
    .slider 
      a:not(.md-button):not(.md-bottom-bar-item):hover
        text-decoration none
    .intro 
      position: relative
      .topBtns 
        position: absolute
        right: 0 
        top: 0 
        margin: 20px
      .centerBtns 
        .btn 
          margin-right: 5px
          margin-bottom: 10px
      .bottomBtns 
        margin-top: 30px
        a.btn 
          margin: 10px 0
          background-color: #00B9A7
          border: 0 
          border-radius 0
          color: #fff 
          line-height 30px
          font-size: 16px
          letter-spacing 2px 
          font-weight bold
          &:hover, &:active
            text-decoration none
            background-color: darken(#00B9A7, 10%)
        a.btn.dark
          background-color: #666
          &:hover, &:active
            text-decoration none
            background-color: darken(#666, 10%)

        .mu-raised-button
          height: 40px 
          margin: 5px 0
          .mu-raised-button-label 
            font-size: 16px
      h3 
        font-size 26px
        // font-weight bold
        padding-top: 20px
      p 
        font-size: 16px 
        margin: 10px 0
        line-height 22px
        color: #333
        span
          display inline-block
          width: 120px
          i.fa 
            font-size: 16px 
            width: 30px 
            color: #666
            text-align center
  .sec 
    padding: 50px 0
    .more 
      margin: 30px 0
      text-align center
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

    &#desc 
      padding: 80px 0
      min-height: 300px
      p 
        margin-top: 30px
        letter-spacing 0.5px
        line-height 30px
        font-size: 16px
        color: #666
    &#service 
      .paper 
        background-color: #fff
        padding: 0 20px
        padding-bottom: 30px
        margin-top: 40px
        box-shadow 0 2px 5px rgba(#000, 0.1)
        @media screen and (max-width: 767px)
          .table-responsive
            border: 0
        table 
          width: 100%
          min-width: 800px
          @media screen and (max-width: 767px)
            min-width: 100%
          thead 
            border-bottom: 1px solid #eee

          tbody > tr 
            @media screen and (max-width: 767px)
              padding: 15px 0
          tr 
            border-bottom: 1px solid #eee
            @media screen and (max-width: 767px)
              display: flex
              flex-direction column
              
            th 
              text-align: center
              padding: 20px
              font-size: 16px
            td 
              padding: 10px 0
              text-align center
              font-size: 16px
              min-width: 200px
              @media screen and (max-width: 767px)
                min-width: 100%
              

              img 
                width: 100%

    &#designer 
      .card-wrap
        padding: 15px
        .md-card-header
          padding: 2px 10px
          .md-title
            font-size: 16px
          .md-subhead
            font-size: 14px
    &#work 
      .card-wrap
        padding: 15px
    &#map 
      .map 
        width: 100% 
        height: 500px
    &#comment 
      .md-card 
        .md-title
          font-size: 22px
        .md-rating-bar
          padding: 10px 0



</style>
