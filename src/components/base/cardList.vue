<template>
    <div class="card-container">
        <div class="title-row">
            <div class="sign"></div>
            <div class="title">{{ title }}</div>
            <i class="icon-arrow-right" v-html="arrowIcon"></i>
        </div>
        <div class="card-row">
            <template v-for="item in cards">
                <div class="card-item" :style="{ width: lines === 2 ? '49%' : '33%' }">
                    <div class="card-img" v-lazy:background-image="item.picUrl" lazy="loaded">
                        <div class="card-img-title">
                            <i class="icon-headset" v-html="iconHtml"></i>
                            <span>{{ item.playCount }}</span>
                        </div>
                    </div>
                    <div class="card-content">{{ item.name }}</div>
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
      },
      lines: {
        type: Number,
        default: 3
      },
      icon: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        arrowIcon: '&#xe600;',
        headsetIcon: '&#xe76b;',
        videoIcon: '&#xe615;'
      }
    },
    created () {
    },
    mounted () {
    },
    computed: {
      iconHtml () {
        if (this.icon === 1) {
          return this.headsetIcon
        } else {
          return this.videoIcon
        }
      }
    },
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
                margin-bottom: 16px;
                text-align: left;
                .card-img {
                    height: 120px;
                    margin-bottom: 10px;
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
                .card-img[lazy=loaded] {
                    animation: fade 0.5s;
                }
                @keyframes fade {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
                .card-content {
                    padding-left: 4px;
                    color: #fff;
                    line-height: 14px;
                    font-size: 11px;
                    font-weight: 300;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
    }
</style>
