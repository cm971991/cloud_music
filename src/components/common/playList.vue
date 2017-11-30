<template>
    <div class="playList">
        <ul>
            <li class="item-all">
                <div class="play-all">
                    <i class="icon-play" v-html="iconPlay"></i>
                    <span class="name">播放全部</span>
                </div>
                <div class="select">
                    <i class="icon-playlist_menu" v-html="iconSelect"></i>
                    <span>多选</span>
                </div>
            </li>
            <template v-for="item in data">
                <li class="item">
                    <div class="music" @click="playMusic(item.id)">
                        <div class="name">{{ item.name }}</div>
                        <div class="artist">{{ item.artists[0].name }}</div>
                    </div>
                    <div class="info">
                        <i class="icon-tool" v-html="iconTool"></i>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
  import Business from '../../business/recommend_biz'

  export default {
    props: {
      data: {
//        type: Array,
        default: null
      }
    },
    data () {
      return {
        iconPlay: '&#xe647;',
        iconSelect: '&#xe637;',
        iconTool: '&#xe627;'
      }
    },
    created () {
      this.Business = new Business(this)
    },
    mounted () {
    },
    computed: {},
    methods: {
      /**
       * 播放音乐
       * @param id
       */
      playMusic (id) {
        console.log('id:', id)
        this.getMusicUrl(id)
          .then((res) => {
            console.log('getMusicUrl:', res)
          })
      }
    }
  }
</script>

<style lang="less">
    .playList {
        background-color: #232323;
        color: #fff;
        .item-all {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            justify-items: center;
            padding: 15px;
            border-bottom: 1px solid #292929;
            .play-all {
                .name {
                    font-size: 16px;
                    font-weight: 300;
                }
            }
            .select {
                span {
                    font-size: 14px;
                }
            }
        }

        .item {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            border-bottom: 1px solid #292929;
            .music {
                flex: 0 1 90%;
                .name {
                    padding-bottom: 10px;
                    font-size: 14px;
                }
                .artist {
                    font-size: 12px;
                    color: #ccc;
                }
            }
            .info {
                flex: 0 1 8%;
            }
        }
    }
</style>
