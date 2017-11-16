<template>
    <div class="card-container">
        <div class="title-row">
            <div class="sign"></div>
            <div class="title">推荐歌单</div>
            <i class="icon-arrow-right" v-html="arrowIcon"></i>
        </div>
        <div class="card-row">
            <template v-for="item in cards">
                <div class="card-item">
                    <div class="card-img" :style="{ backgroundImage:'url('+ item.image +')' }">
                        <div class="card-img-title">
                            <i class="icon-headset" v-html="headsetIcon"></i>
                            <span>{{ item.count }}万</span>
                        </div>
                    </div>
                    <div class="card-content">{{ item.content }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      cards: {
        type: Array,
        default: []
      },
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        arrowIcon: '&#xe600;',
        headsetIcon: '&#xe76b;'
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="less">
    .card-container {
        width: 100%;
        padding: 20px 0;
        .title-row {
            width: 100%;
            height: 30px;
            .sign {
                width: 2px;
                height: 15px;
                margin-right: 5px;
                float: left;
                background: #FE1D49;
            }
            .title {
                color: #fff;
                font-size: 14px;
                font-weight: 300;
                float: left;
                margin-left: 4px;
                letter-spacing: 1px;
            }
        }
        .card-row {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
            align-content: space-around;
            .card-item {
                width: 33%;
                height: 120px;
                margin-bottom: 16px;
                text-align: left;
                .card-img {
                    height: 100px;
                    margin-bottom: 6px;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    .card-img-title {
                        padding-right: 4px;
                        text-align: right;
                        .icon-headset {

                        }
                        span {
                            color: #fff;
                            font-size: 12px;
                            font-weight: 300;
                        }
                    }
                }
                .card-content {
                    padding-left: 4px;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 300;
                    letter-spacing: 0.5px;
                }
            }
        }
    }
</style>
