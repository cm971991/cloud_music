<template>
    <div id="app" style="height: 100%;">
        <header-title></header-title>
        <transition :name="transitionName">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import headerTitle from './components/common/header.vue'

  export default {
    components: {
      headerTitle
    },
    data () {
      return {
        transition: 'go'
      }
    },
    computed: {
      ...mapState({
        direction: ({global}) => global.direction
      }),
      transitionName () {
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    methods: {}
  }
</script>

<style lang="less">
    @import "./assets/style/global/reset";
    @import './assets/style/global/min';
    @import "./assets/style/global/common";
    @import "./assets/style/global/icon";
</style>

