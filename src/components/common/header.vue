<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="setting">
                <i class="icon-caidan" v-html="iconSetting"></i>
            </div>
            <div class="menu">
                <template v-for="item in iconList">
                    <span class="menu-item">
                        <i :class="[ item.className, { hover : item.clicked } ]" v-html="item.iconCode"
                           @click="menuSelect(item.type)"></i>
                    </span>
                </template>
            </div>
            <div class="search">
                <i class="icon-chaxun" v-html="iconSearch"></i></div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        iconSetting: '&#xe6b9;',
        iconSearch: '&#xe603;',
        iconList: [
          {iconCode: '&#xe680;', className: 'icon-yinyue', type: 'songList', clicked: false},
          {iconCode: '&#xe601;', className: 'icon-cloudmusic', type: 'recommend', clicked: true},
          {iconCode: '&#xe614;', className: 'icon-ren', type: 'moments', clicked: false}
        ],
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
            this.iconList[0].clicked = true
            this.iconList[1].clicked = false
            this.iconList[2].clicked = false
            this.$router.push('/songList')
            break
          case 'recommend':
            this.iconList[0].clicked = false
            this.iconList[1].clicked = true
            this.iconList[2].clicked = false
            this.$router.push('/recommend')
            break
          case 'moments':
            this.iconList[0].clicked = false
            this.iconList[1].clicked = false
            this.iconList[2].clicked = true
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
