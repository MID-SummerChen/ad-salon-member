<template>
  <div id="MyOrders">
    <h3 class="pageTitle">我的訂單列表</h3>
    <!-- 訂單完成後讓會員評價(滿意度星星, 留言) -->
    <div class="container">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>預約時間</th>
              <th>髮廊</th>
              <th>設計師</th>
              <th>金額</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 5">
              <td>2017-10-20 14:30</td>
              <td>CUTE SALON</td>
              <td>傑克森</td>
              <td>1050元</td>
              <td>
                <mu-raised-button primary>評價</mu-raised-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyOrders',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
#MyOrders 
  padding 50px 0
  min-height calc(100vh - 200px)
  .pageTitle 
    margin-bottom: 30px
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
  .table-responsive
    @media screen and (max-width: 767px)
      border: 0
  table 
    width: 100%
    min-width: 800px
    @media screen and (max-width: 767px)
      min-width: 100%
    thead 
      border-bottom: 1px solid #eee
      tr
        th 
          text-align: center
          padding: 20px
          font-size: 16px
          color: #333
          @media screen and (max-width: 767px)
            display: none
    tbody 
      tr 
        border-bottom: 1px solid #eee
        &:hover 
          background-color: #f5f5f5
        @media screen and (max-width: 767px)
          padding: 15px 0
          display: flex
          flex-direction column
        td 
          padding: 10px 0
          text-align center
          font-size: 16px
          min-width: 200px
          color: #666
          @media screen and (max-width: 767px)
            padding: 7px 15px
            text-align: left
            min-width: 100%
            &:nth-of-type(1)
              color: #00B9A7
              font-weight: bold
              
            &:nth-of-type(2)
              font-weight: bold
              

          img 
            width: 100%
</style>
