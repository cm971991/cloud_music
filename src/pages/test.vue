<template>
  <div class="container">
    <span>TEST1</span>
    <button @click="redirect" style="width:100px;height:50px;">下一页</button>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    redirect () {
      this.$router.push({ path: 'test2' })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: lightblue;
}
</style>
