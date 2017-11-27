<template>
    <div class="playList">
        <!--<div class="playAll"></div>-->
        <template v-for="i in 10">
            <div class="item">
                <div class="music">
                    <div class="name"></div>
                    <div class="artist"></div>
                </div>
                <div class="info"></div>
            </div>
        </template>
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
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
    .playList {
        background-color: #fff;
        .item {
            padding: 4px 10px;
            .music {
                
                .name {

                }
                .artist {

                }
            }
            .info {

            }
        }
    }
</style>
