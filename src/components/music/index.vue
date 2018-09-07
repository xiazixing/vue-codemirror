<template>
  <div class="home">
    这是音乐哦！
    {{msgs}}
    <el-button>按钮</el-button>
    <music-list v-for="mu in mlist" :title="mu.title" :type="mu.type"></music-list>
  </div>
</template>
<script>
import musicList from '@/components/music/list'
export default {
  name: 'Music',
  components: {
    musicList
  },
  data () {
    return {
      msgs: '你会喜欢我的！',
      mlist: [
        {title: '音乐' , type: '摇滚' },
        {title: '音乐2' , type: '摇滚3' },
      ]

    }
  }
}
</script>
<style scoped>
.home{
  color:red;
}
body{
background:green;
}
</style>
