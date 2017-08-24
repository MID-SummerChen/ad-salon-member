<template>
  <div id="MyFavorite">
    <!-- <h2 class="pageTitle">我的收藏</h2> -->
    <div class="tabs">
      <a href="#store" data-uk-smooth-scroll="{offset: 80}"><mu-raised-button mini primary>店家</mu-raised-button></a>
      <a href="#work" data-uk-smooth-scroll="{offset: 80}"><mu-raised-button mini secondary>作品</mu-raised-button></a>
    </div>
    <div id="store" class="sec">
      <div class="container">
        <h3>我收集的髮廊</h3>

        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-5" data-uk-grid>
          <div v-for="n in 10" class="card-wrap">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <router-link :to="{name: 'DesignerView'}">
                    <img src="/static/imgs/work01.jpg">
                  </router-link>
                </md-card-media>

                <md-card-header>
                  <div class="md-title">CUTE SALON</div>
                  <div class="md-subhead">台中市西區</div>
                </md-card-header>

                <!-- <md-card-content>
                店名, 資料圖片第一張, 作品數, 設計師人數, 地址, 留言評價數
              </md-card-content> -->
              </md-card-area>

              <md-card-actions>

                <md-button class="md-icon-button">
                  <md-icon>collections</md-icon>
                  <md-tooltip md-direction="top">作品集</md-tooltip>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>people</md-icon>
                  <md-tooltip md-direction="top">設計師</md-tooltip>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>event</md-icon>
                  <md-tooltip md-direction="top">立即預約</md-tooltip>
                </md-button>
              </md-card-actions>
            </md-card>
          </div>

        </div>
      </div>
    </div>

    <div id="work" class="sec">
      <div class="container">
        <h3>我收集的作品</h3>

        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-5" data-uk-grid>
          <div v-for="n in 10" class="card-wrap">
            <md-card>
              <md-card-area>
                <md-card-media>
                  <router-link :to="{name: 'DesignerView'}">
                    <img src="/static/imgs/work01.jpg">
                  </router-link>
                </md-card-media>
              </md-card-area>

              <md-card-actions>

                <md-button class="md-icon-button">
                  <md-icon>event</md-icon>
                  <md-tooltip md-direction="top">立即預約</md-tooltip>
                </md-button>
              </md-card-actions>
            </md-card>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyFavorite',
  data() {
    return {
      activeTab: "store"
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
#MyFavorite
  background-color: #f5f5f5
  padding: 60px 0
  .main 
    padding: 50px 0
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

    
    .card-wrap
      padding: 15px
      .md-card-header
        padding: 2px 10px
        .md-title
          font-size: 16px
        .md-subhead
          font-size: 14px

  .tabs
    text-align: center
    // margin-bottom: 20px
    // padding: 30px 0
    .mu-raised-button 
      margin: 0 5px
</style>
