<template>
  <div id="StoreSearchResult">
    <h2 class="pageTitle">搜尋結果</h2>
    <div class="container">
      <div class="searchBox">
        店家搜尋：
        <input type="text" placeholder="城市">
        <input type="text" placeholder="地區">
        <button>搜尋</button>
      </div>
      <div v-for="n in 10" class="listItem">
        <div class="item-img" style="background-image: url('/static/imgs/store01.jpg')">
        </div>
        <div class="item-content">
          <h4>Cute Salon</h4>
          <p><i class="fa fa-picture-o"><md-tooltip md-direction="top">作品數量</md-tooltip></i> 10</p>
          <p><i class="fa fa-users"><md-tooltip md-direction="top">設計師數量</md-tooltip></i> 5</p>
          <p><i class="fa fa-map-marker"><md-tooltip md-direction="top">髮廊地址</md-tooltip></i> 台中市南區新河街100號10Ｆ</p>
          <p><i class="fa fa-commenting-o"><md-tooltip md-direction="top">留言總數</md-tooltip></i> 20</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreSearchResult',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
#StoreSearchResult
  .searchBox
    padding: 15px
    border: 1px solid #ccc 
    border-radius 5px
    margin: 20px 0
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
