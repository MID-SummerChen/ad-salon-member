<template>
  <div id="dashboard">
    <HeaderComponent></HeaderComponent>
    <main>
      <router-view></router-view>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/layout/Header'
import FooterComponent from '@/components/layout/Footer'
export default {
  name: 'Dashboard',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
