<template>
  <header data-uk-sticky>
    <div class="header-logo">LOGO</div>
    <div class="header-btns">
      <i class="fa fa-bars"></i>
      下拉選單：
        1. 個人資料
        2. 我的訂單
        3. 我的收藏(作品, 店家)
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
header 
  height: 80px 
  display flex 
  .header-logo
    flex-grow: 1
  
  .header-btns
    //


</style>
