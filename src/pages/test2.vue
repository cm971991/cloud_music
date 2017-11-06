<template>
    <div class="test2container">
        <span>TEST2</span>
        <button @click="redirect" style="width:100px;height:50px;">上一页</button>
    </div>
</template>

<script type="text/ecmascript-6">
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
    methods: {
      redirect () {
        this.$router.push({ path: 'test1' })
      }
    }
  }
</script>

<style lang="less" scoped>
    .test2container {
        height: 100%;
        background-color: lightgreen;
    }
</style>
