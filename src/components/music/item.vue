<template>
  <li>
    <span>歌名:{{title}}</span>
    <span>类型:{{type}}</span>
    <span class="fa fa-play" title="播放"></span>
    <span class="fa fa-trash" title="删除"></span>
  </li>
</template>
<script>
export default {
  name: 'Item',
  props: {
    title: String,
    type: String
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
