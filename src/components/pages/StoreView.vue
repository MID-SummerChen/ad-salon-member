<template>
  <div id="StoreView">
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm-7">
            <div class="slider">
              <img src="../../../static/imgs/store01.jpg" alt="">
            </div>
          </div>
          <div class="col-sm-5 intro">
            <button class="bookBtn btn btn-default">收藏</button>
            <button class="bookBtn btn btn-default">預約</button>
            <h3>Cute Salon</h3>
            <hr>
            <p><i class="fa fa-picture-o"><md-tooltip md-direction="top">作品數量</md-tooltip></i> 10</p>
            <p><i class="fa fa-users"><md-tooltip md-direction="top">設計師數量</md-tooltip></i> 5</p>
            <p><i class="fa fa-map-marker"><md-tooltip md-direction="top">髮廊地址</md-tooltip></i> 台中市南區新河街100號10Ｆ</p>
            <p><i class="fa fa-commenting-o"><md-tooltip md-direction="top">留言總數</md-tooltip></i> 20</p>
            <hr>
            <div>
              <button class="btn btn-default">髮廊介紹</button>
              <button class="btn btn-default">作品集</button>
              <button class="btn btn-default">消費評價</button>
            </div>
          </div>
        </div>
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
#StoreView
  .main 
    .intro 
      position: relative
      .bookBtn 
        position: absolute
        right: 0 
        top: 0 
        margin: 20px
      h3 
        font-size 26px
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
