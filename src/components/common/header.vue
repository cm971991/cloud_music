<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="setting">
                <i class="icon-caidan" v-html="iconList.setting"></i>
            </div>
            <div class="menu">
                <span class="menu-item">
                    <i class="icon-yinyue" :class="{ hover : clickData.songListClick }" v-html="iconList.songList"
                       @click="menuSelect('songList')"></i>
                </span>
                <span class="menu-item">
                    <i class="icon-cloudmusic" :class="{ hover : clickData.recommendClick }" v-html="iconList.recommend"
                       @click="menuSelect('recommend')"></i>
                </span>
                <span class="menu-item">
                    <i class="icon-ren" :class="{ hover : clickData.momentsClick }" v-html="iconList.moments"
                       @click="menuSelect('moments')"></i>
                </span>
            </div>
            <div class="search">
                <i class="icon-chaxun" v-html="iconList.search"></i></div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        iconList: {
          setting: '&#xe6b9;',
          songList: '&#xe680;',
          recommend: '&#xe601;',
          moments: '&#xe614;',
          search: '&#xe603;'
        },
        clickData: {
          songListClick: false,
          recommendClick: true,
          momentsClick: false
        }
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {
      menuSelect (type) {
        switch (type) {
          case 'songList':
            this.clickData.songListClick = true
            this.clickData.recommendClick = false
            this.clickData.momentsClick = false
            this.$router.push('/songList')
            break
          case 'recommend':
            this.clickData.recommendClick = true
            this.clickData.songListClick = false
            this.clickData.momentsClick = false
            this.$router.push('/recommend')
            break
          case 'moments':
            this.clickData.momentsClick = true
            this.clickData.songListClick = false
            this.clickData.recommendClick = false
            this.$router.push('/moments')
            break
        }
      }
    }
  }
</script>

<style lang="less">
    .header {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        background-color: #3A373C;
        z-index: 1;
        .header-wrapper {
            display: flex;
            padding: 15px 15px;
            .setting {
                flex: 0 0 28%;
                text-align: left;
            }
            .menu {
                flex: 0 0 44%;
                text-align: center;
                display: flex;
                .menu-item {
                    flex: 0 0 33.33%;
                }
            }
            .search {
                flex: 0 0 28%;
                text-align: right;
            }
            .hover {
                padding: 5px;
                border-radius: 20px;
                background-image: linear-gradient(176deg, #F6F7F1 0%, #080808 100%)
            }
        }
    }
</style>
