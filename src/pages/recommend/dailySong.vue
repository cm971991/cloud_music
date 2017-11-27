<template>
    <div class="dailySong-contain">
        <h1>每日推荐歌单</h1>
    </div>
</template>

<script>
  import Business from '../../business/recommend_biz'

  export default {
    components: {},
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
          this.mvItems = this.$store.getters.dailySong
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
        margin-top: 52px;
        background-color: #fff;
    }
</style>
