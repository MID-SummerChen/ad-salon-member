<template>
  <div id="Home">
    <div class="banner">
    </div>
    <div class="searchBox">
      店家搜尋：
      <input type="text" placeholder="城市">
      <input type="text" placeholder="地區">
      <button>搜尋</button>
    </div>
    <div style="margin-top: 200px"></div>
    <div class="section">
      <h2 class="title">人氣髮型</h2>
      <div class="container">
        <span>男/女</span>
        <div class="row">
          <div v-for="n in 4" class="col-xs-6 col-sm-4 col-md-3">
            <img src="http://fakeimg.pl/250x360/?text=Hair">
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 60px"></div>
    <div class="section">
      <h2 class="title">最新髮型</h2>
      <div class="container">
        <span>男/女</span>
        <div class="row">
          <div v-for="n in 4" class="col-xs-6 col-sm-4 col-md-3">
            <img src="http://fakeimg.pl/250x360/?text=Hair">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
