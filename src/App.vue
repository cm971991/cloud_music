<template>
    <div id="app" style="height: 100%;">
        <transition :name="transitionName">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
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
    }
  }
</script>

<style lang="less">
    @import "assets/style/global/reset";
    @import 'assets/style/global/min';
    @import "assets/style/global/common";
</style>

