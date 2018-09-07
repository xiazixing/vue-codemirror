<template>
  <li>
    <span>歌名:{{title}}</span>
    <span>类型:{{type}}</span>
    <span>播放</span>
    <span>删除</span>
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
