<template>
  <div id="MyFavorite">
    <h2 class="pageTitle">我的收藏</h2>
    <div class="section">
      <div class="container">
        <div class="tabs">
          <button class="btn btn-default" @click="activeTab = 'store'">店家</button>
          <button class="btn btn-default" @click="activeTab = 'work'">作品</button>
        </div>
        <div style="margin-top: 30px"></div>
        <template v-if="activeTab === 'store'">
          <h2 class="title">店家</h2>
          <div class="row">
            <div v-for="n in 8" class="col-xs-6 col-sm-4 col-md-3 cardItem">
              <md-card>
                <md-card-area>
                  <md-card-media>
                    <img src="../../assets/logo.png">
                  </md-card-media>

                  <md-card-header>
                    <div class="md-title">CUTE SALON</div>
                    <div class="md-subhead">台中市北區一中街100號2F</div>
                  </md-card-header>

                  <!-- <md-card-content>
                    店名, 資料圖片第一張, 作品數, 設計師人數, 地址, 留言評價數
                  </md-card-content> -->
                </md-card-area>

                <md-card-actions>
                  <md-button class="md-icon-button">
                    <md-icon>favorite</md-icon>
                    <md-tooltip md-direction="top">My tooltip</md-tooltip>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                    <md-tooltip md-direction="top">My tooltip</md-tooltip>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>share</md-icon>
                    <md-tooltip md-direction="top">My tooltip</md-tooltip>
                  </md-button>
                </md-card-actions>
              </md-card>
            </div>
          </div>
        </template>
        <template v-if="activeTab === 'work'">
          <h2 class="title">作品</h2>
          <div class="row">
            <div v-for="n in 8" class="col-xs-6 col-sm-4 col-md-3 cardItem">
              <md-card>
                <md-card-area>
                  <md-card-media>
                    <img src="../../assets/logo.png">
                  </md-card-media>

                  <md-card-header>
                    <div class="md-title">Title goes here</div>
                    <div class="md-subhead">Subtitle here</div>
                  </md-card-header>

                  <md-card-content>
                    作品圖, 作品名稱, 店家, 設計師, 價格, 說明, 長度, 男女, 髮色, 時間, 設計師名稱
                  </md-card-content>
                </md-card-area>

                <md-card-actions>
                  <md-button class="md-icon-button">
                    <md-icon>favorite</md-icon>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                  </md-button>

                  <md-button class="md-icon-button">
                    <md-icon>share</md-icon>
                  </md-button>
                </md-card-actions>
              </md-card>
            </div>
          </div>
        </template>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'MyFavorite',
  data () {
    return {
      activeTab: "store"
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
