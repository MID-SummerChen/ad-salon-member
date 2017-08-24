<template>
  <div id="WorkView">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-7">
            <div class="slider">
              <img src="/static/imgs/work01.jpg" alt="">
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 intro">
            <!-- <div class="topBtns">
              <button class="btn btn-default">收藏</button>
              <button class="btn btn-default">預約</button>
            </div> -->
            <h3>韓系空氣剪髮</h3>
            <hr>
            <!-- 1. 說明, 長度, 男女, 髮色, 時間, 設計師名稱
            2. 價目表上預約按鈕直接跳到行事曆(綁定原設計師)
            3. 最下面秀店家其他作品 -->
            <p><span><i class="fa fa-scissors"></i>長度</span> 中長髮</p>
            <p><span><i class="fa fa-venus-mars"></i>性別</span> 女</p>
            <p><span><i class="fa fa-clock-o"></i>時間</span> 2017-04-21</p>
            <p><span><i class="fa fa-map-marker"></i>髮廊名稱</span> <router-link :to="{name: 'StoreView'}">CUTE SALON</router-link></p>
            <p><span><i class="fa fa-user"></i>設計師名稱</span> <router-link :to="{name: 'DesignerView'}">傑克森</router-link></p>
            <hr>
            <div class="centerBtns">
              <a href="#desc" class="btn btn-default" data-uk-smooth-scroll="{offset: 80}">作品介紹</a>
            </div>
            <div class="bottomBtns">
              <mu-raised-button @click="$router.push({name: 'StoreView', hash: '#service'})" label="立即預約" primary fullWidth/>
              <mu-raised-button label="加入收藏" secondary  fullWidth/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="desc" class="sec">
      <div class="container">
        <h3>作品介紹</h3>
        <p>作品介紹在這裡作品介紹在這裡作品介紹在這裡作品介紹在這裡作品介紹在這裡，作品介紹在這裡作品介紹在這裡作品介紹在這裡，
        作品介紹在這裡作品介紹在這裡作品介紹在這裡，作品介紹在這裡作品介紹在這裡作品介紹在這裡作品介紹在這裡作品介紹在這裡作品介紹在這裡作品介紹在這裡。</p>
      </div>
    </div>
    <div id="work" class="sec">
      <div class="container">
        <h3>其他作品</h3>

        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-5" data-uk-grid>
          <div v-for="n in 10" class="card-wrap">
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

                <md-button class="md-icon-button">
                  <md-icon>event</md-icon>
                  <md-tooltip md-direction="top">立即預約</md-tooltip>
                </md-button>
              </md-card-actions> 
            </md-card>
          </div>
        </div>
        <div class="more"><mu-raised-button label="看更多作品" secondary/></div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'StoreView',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
#WorkView
  background-color: #f5f5f5
  padding-bottom: 100px
  .main 
    background-color: #fff
    padding: 40px 0
    @media screen and (max-width: 767px)
      padding-top: 20px
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
        margin-top: 40px
        @media screen and (max-width: 767px)
          .table-responsive
            border: 0
        table 
          width: 100%
          min-width: 800px
          thead 
            border-bottom: 1px solid #eee
          tr 
            border-bottom: 1px solid #eee
            th, td 
              padding: 20px
              text-align center
              font-size: 16px
              img 
                width: 100%

    &#work 
      .card-wrap
        padding: 15px


</style>
