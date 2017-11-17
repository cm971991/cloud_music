<template>
    <div class="recommend-contain">
        <tab :tabTitles="tabTitles"
             :current-page="3">
            <!-- region 音乐 -->
            <div class="tab-content-container">
                <scroll class="list-scroll">
                    <div>
                        <!-- region slide 图片滑动 -->
                        <slide ref="slide">
                            <div v-for="item in imageItems">
                                <a :href="item.linkUrl">
                                    <img :src="item.picUrl" lazy="loaded">
                                </a>
                            </div>
                        </slide>
                        <!-- endregion slide 图片滑动 -->

                        <!-- region 菜单模块 -->
                        <div class="menu-row">
                            <template v-for="item in menuIcons">
                                <div class="menu-item">
                                    <div class="menu-item-icon">
                                        <i :class="item.className" v-html="item.iconCode"></i>
                                    </div>
                                    <div class="menu-item-title">{{ item.title }}</div>
                                </div>
                            </template>
                        </div>
                        <!-- endregion 菜单模块 -->

                        <!-- region 推荐歌单 -->
                        <card-list :cards="cardItems" :title="cardTitle"></card-list>
                        <!-- endregion 推荐歌单 -->

                        <!-- region 独家放送 -->
                        <!-- endregion 独家放送 -->

                        <!-- region 最新音乐 -->
                        <!--<card-list :cards="newSongItems" :title="newSongTitle"></card-list>-->
                        <!-- endregion 最新音乐 -->

                        <!-- region 推荐MV -->
                        <card-list :cards="mvItems" :title="mvTitle" :lines="mvLines" :icon="2"></card-list>
                        <!-- endregion 推荐MV -->

                        <!-- region 精选专栏 -->
                        <!-- endregion 精选专栏 -->

                        <!-- region 主播电台 -->
                        <!-- endregion 主播电台 -->
                    </div>
                </scroll>
            </div>
            <!-- endregion 音乐 -->

            <!-- region 视频 -->
            <div class="tab-content-container">
                <scroll class="list-scroll">
                    <div>
                        <template v-for="i in 20">
                            <h1 style="margin-bottom: 50px;">tab {{ i }}</h1>
                        </template>
                    </div>
                </scroll>
            </div>
            <!-- endregion 视频 -->

            <!-- region 电台 -->
            <div class="tab-content-container">
                <scroll class="list-scroll">
                    <div>
                        <template v-for="i in 20">
                            <h1 style="margin-bottom: 50px;">tab {{ i }}</h1>
                        </template>
                    </div>
                </scroll>
            </div>
            <!-- endregion 电台 -->
        </tab>
    </div>
</template>

<script>
  import tab from '../../components/base/tab.vue'
  import cardList from '../../components/base/cardList.vue'
  import scroll from '../../components/common/scroll.vue'
  import slide from '../../components/common/slide.vue'
  import Business from '../../business/recommend_biz'
  
  export default {
    components: {tab, cardList, scroll, slide},
    data () {
      return {
        tabTitles: ['音乐', '视频', '电台'],
        imageItems: [
          {
            linkUrl: 'http://music.163.com/m/at/HYMSEED',
            picUrl: require('../../assets/image/recommend/slider3.jpg')
          },
          {
            linkUrl: 'http://music.163.com/#/song?id=518077040',
            picUrl: require('../../assets/image/recommend/slider4.jpg')
          },
          {
            linkUrl: 'https://music.163.com/store/newalbum/detail?id=36714070',
            picUrl: require('../../assets/image/recommend/slider1.jpg')
          },
          {
            linkUrl: 'http://music.163.com/store/concert/detail?concertId=193416',
            picUrl: require('../../assets/image/recommend/slider2.jpg')
          },
          {
            linkUrl: 'http://music.163.com/store/newalbum/detail?id=36709029',
            picUrl: require('../../assets/image/recommend/slider5.jpg')
          }
        ],
        menuIcons: [
          {iconCode: '&#xe76a;', className: 'icon-fm', title: '私人FM'},
          {iconCode: '&#xe612;', className: 'icon-menu', title: '每日推荐'},
          {iconCode: '&#xe652;', className: 'icon-menu', title: '歌单'},
          {iconCode: '&#xe602;', className: 'icon-paihang', title: '排行榜'}],
        cardTitle: '推荐新歌',
        cardItems: [],
        newSongTitle: '最新音乐',
        newSongItems: [],
        mvTitle: '推荐MV',
        mvItems: [],
        mvLines: 2
      }
    },
    created () {
      this.Business = new Business(this)
      this.getPersonalized()
      this.getNewSong()
      this.getMv()
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 获取推荐歌单
       */
      getPersonalized () {
        if (this.$store.getters.personalized && this.$store.getters.personalized.length > 0) {
          this.cardItems = this.$store.getters.personalized
        } else {
          this.Business.personalized()
            .then((res) => {
              console.log('getPersonalized:', res)
              if (res.code !== 200) {
                this.$toast.show({text: res.msg})
              } else {
                this.cardItems = res.result
                this.$store.commit('SET_PERSONALIZED', res.result)
              }
            })
        }
      },
      /**
       * 获取推荐新音乐
       */
      getNewSong () {
        if (this.$store.getters.newSong && this.$store.getters.newSong.length > 0) {
          this.newSongItems = this.$store.getters.newSong
        } else {
          this.Business.newSong()
            .then((res) => {
              console.log('getNewSong:', res)
              if (res.code !== 200) {
                this.$toast.show({text: res.msg})
              } else {
                this.newSongItems = res.result
                this.$store.commit('SET_NEWSONG', res.result)
              }
            })
        }
      },
      /**
       * 获取推荐mv
       */
      getMv () {
        if (this.$store.getters.mv && this.$store.getters.mv.length > 0) {
          this.mvItems = this.$store.getters.mv
        } else {
          this.Business.mv()
            .then((res) => {
              console.log('getMv:', res)
              if (res.code !== 200) {
                this.$toast.show({text: res.msg})
              } else {
                this.mvItems = res.result
                this.$store.commit('SET_MV', res.result)
              }
            })
        }
      }
    }
  }
</script>

<style lang="less">
    .recommend-contain {
        height: calc(~"100% - 52px");
        background-color: #232323;
        position: absolute;
        top: 52px;
        left: 0;
        right: 0;
        .tab-container {
            height: 100%;
            .tab-title-container {
                font-size: 13px;
                font-weight: 300;
                background-color: #232323;
                color: #fff;
            }
            .tabswiper {
                height: calc(~"100% - 38px");
            }
            .list-scroll {
                position: relative;
                height: 100%;
                overflow: hidden;
                .dots {
                    width: 100%;
                    float: left;
                    position: inherit;
                    margin-top: -20px;
                }
                .menu-row {
                    padding: 14px 10px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    align-items: center;
                    align-content: center;
                    border-bottom: 1px solid #292929;
                    .menu-item {
                        width: 56px;
                        .menu-item-icon {
                            height: 40px;
                            width: 40px;
                            margin: 0 auto;
                            border: 1px solid #FE1D49;
                            border-radius: 56px;
                            text-align: center;
                            line-height: 40px;
                            font-weight: 600;
                        }
                        .menu-item-title {
                            margin-top: 8px;
                            color: #fff;
                            font-size: 12px;
                            font-weight: 300;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>
