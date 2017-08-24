<template>
  <header>
    <div class="header-logo">
      <router-link :to="{name: 'Home'}"><img class="logo" src="/static/imgs/logo_white.png" alt=""></router-link>
    </div>
    <div class="header-btns">
      <a href="" @click.prevent="SWITCH_SIDEBAR_STATUS(!showSidebar)"><i class="fa fa-bars"></i></a>
      <!-- 下拉選單：
        1. 個人資料
        2. 我的訂單
        3. 我的收藏(作品, 店家) -->
    </div>
  </header>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'showSidebar'
    ])
  },
  methods: {
    ...mapMutations([
      'SWITCH_SIDEBAR_STATUS'
    ])
  }
}
</script>

<style lang="stylus">



</style>
