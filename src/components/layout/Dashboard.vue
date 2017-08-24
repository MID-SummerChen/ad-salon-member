<template>
  <div id="dashboard">
    <transition name="slide-fade">
      <Sidebar v-if="showSidebar"></Sidebar>
    </transition>
    
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
import Sidebar from '@/components/layout/Sidebar'
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'Dashboard',
  components: {
    HeaderComponent,
    FooterComponent,
    Sidebar,
  },
  data () {
    return {
    }
  },
  watch: {
    $route: 'onRouterChanged'
  },
  computed: {
    ...mapGetters([
      'showSidebar'
    ])
  },
  methods: {
    ...mapMutations([
      'SWITCH_SIDEBAR_STATUS'
    ]),
    onRouterChanged() {
      this.SWITCH_SIDEBAR_STATUS(false)
    }
  }
}
</script>

<style lang="stylus">
</style>
