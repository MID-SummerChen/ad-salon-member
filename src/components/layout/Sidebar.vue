<template>
  <aside id="Sidebar">
    <mu-menu :autoWidth="false">
      <mu-menu-item title="個人資料" leftIcon="person"/>
      <mu-menu-item title="我的訂單" leftIcon="event_available"/>
      <mu-menu-item title="我的收藏" @click="$router.push({name: 'MyFavorite'})" leftIcon="favorite"/>
      <mu-divider />
      <mu-menu-item title="登出" leftIcon="reply"/>
    </mu-menu>
  </aside>
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

<style lang="stylus">
aside#Sidebar 
  width: 300px
  position: fixed 
  left: 0 
  top: 0 
  height: 100vh
  z-index 99
  background-color: #fff 
  box-shadow 0 0 10px rgba(#000, 0.4)
  @media screen and (max-width: 767px)
    width: calc(100vw - 70px)

  .mu-menu
    width: 100%

</style>
