<template>
    <div class="login-contain">
        <!--<svg class="icon" aria-hidden="true">-->
        <!--<use xlink:href="#icon-wangyiyun"></use>-->
        <!--</svg>-->
        <!--<div class="mobile-item">-->
            <!--<input type="search" placeholder="1111"/>-->
        <!--</div>-->
        <!--<div class="password-item"></div>-->
        <!--<div class="btn-item"></div>-->
    </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        icon: '&#xe617;'
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

<style lang="less" rel="stylesheet/less" scoped>
    .login-contain {
        width: 100%;
        height: 100%;
        background-color: #fff;
        .mobile-item {
            input {
                border: 0.025rem solid #e4e4e4;
                font-size: 16px;
                color: #333;
                background-color: #f2f2f2;
                font-weight: bold;
                padding: 10px 10px;
            }
        }
    }
</style>
