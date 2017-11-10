<template>
    <div class="recommend-contain">
        <tab :tabTitles="tabTitles"
             :current-page="3">
            <!-- div contain as each page -->
            <div class="tab-content-container">
                <scroll class="list-scroll">
                    <div>
                        <template v-for="i in 20">
                            <h1 style="margin-bottom: 50px;">tab {{ i }}</h1>
                        </template>
                    </div>
                </scroll>
            </div>
            <div class="tab-content-container">
                <scroll class="list-scroll">
                    <div>
                        <template v-for="i in 20">
                            <h1 style="margin-bottom: 50px;">tab {{ i }}</h1>
                        </template>
                    </div>
                </scroll>
            </div>
            <div class="tab-content-container">
                <scroll class="list-scroll">
                    <div>
                        <template v-for="i in 20">
                            <h1 style="margin-bottom: 50px;">tab {{ i }}</h1>
                        </template>
                    </div>
                </scroll>
            </div>
        </tab>
    </div>
</template>

<script>
  import tab from '../../components/base/tab.vue'
  import scroll from '../../components/common/scroll.vue'

  export default {
    components: {tab, scroll},
    data () {
      return {
        tabTitles: ['音乐', '视频', '电台']
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
    .recommend-contain {
        height: calc(~"100% - 52px");
        background-color: #fff;
        position: absolute;
        top: 52px;
        left: 0;
        right: 0;
        .tab-container {
            height: 100%;
            .tab-title-container {
                font-size: 14px;
            }
            .tabswiper {
                height: calc(~"100% - 38px");
            }
        }
        .list-scroll {
            position: relative;
            height: 100%;
            overflow: hidden;
        }
    }
</style>
