<template>
    <div class="dailySong-contain">
        <div class="banner"></div>
        <scroll class="list-scroll" :listenScroll="true">
            <div>
                <playlist :data="dailySongItems"></playlist>
            </div>
        </scroll>
    </div>
</template>

<script>
  import Business from '../../business/recommend_biz'
  import scroll from '../../components/common/scroll.vue'
  import playlist from '../../components/common/playList.vue'

  export default {
    components: {scroll, playlist},
    data () {
      return {
        dailySongItems: []
      }
    },
    created () {
      this.Business = new Business(this)
      this.dailySong()
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 每日推荐 点击事件
       */
      dailySong () {
        if (this.$store.getters.dailySong && this.$store.getters.dailySong.length > 0) {
          this.dailySongItems = this.$store.getters.dailySong
        } else {
          this.Business.dailySong()
            .then((res) => {
              console.log('dailySong:', res)
              if (res.code !== 200) {
                this.$toast.show({text: res.msg})
              } else {
                this.dailySongItems = res.recommend
                this.$store.commit('SET_DAILYSONG', this.dailySongItems)
              }
            })
        }
        console.log('recommendSongs:')
      }
    }
  }
</script>

<style lang="less">
    .dailySong-contain {
        height: calc(~"100% - 52px");
        background-color: #232323;
        position: absolute;
        top: 52px;
        left: 0;
        right: 0;
        .banner {
            width: 100%;
            height: 105px;
            background: url("../../assets/image/recommend/recmd_daily.jpg") no-repeat;
            background-size: 100% 100%;
        }
        .list-scroll {
            position: relative;
            height: 100%;
            overflow: hidden;
        }
    }
</style>
