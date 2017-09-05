<template>
  <div class="sidebar-cover" @click.self="SWITCH_SIDEBAR_STATUS(false)">
    <aside id="Sidebar">
      <mu-menu :autoWidth="false">
        <mu-menu-item title="會員中心" @click="$router.push({name: 'MyInfo'})" leftIcon="person"/>
        <mu-menu-item title="我的訂單" @click="$router.push({name: 'MyOrders'})" leftIcon="event_available"/>
        <mu-menu-item title="我的收藏" @click="$router.push({name: 'MyFavorite'})" leftIcon="favorite"/>
        <mu-divider />
        <mu-menu-item title="會員註冊" @click="$router.push({name: 'Register'})" leftIcon="person_add"/>
        <mu-menu-item title="登出" leftIcon="reply"/>
      </mu-menu>
    </aside>
  </div>
  
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters([
      'showSidebar'
    ])
  },
  methods: {
    ...mapMutations([
      'SWITCH_SIDEBAR_STATUS'
    ])
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.sidebar-cover
  position: fixed 
  width: 100vw
  height: 100vh
  // background-color: rgba(#000, 0.1)
  z-index 99
  left: 0 
  top: 0 
aside#Sidebar 
  width: 300px
  position: absolute
  left: 0 
  top: 0 
  height: 100vh
  background-color: #fff 
  box-shadow 0 0 10px rgba(#000, 0.4)
  @media screen and (max-width: 767px)
    width: calc(100vw - 70px)

  .mu-menu
    width: 100%

</style>
