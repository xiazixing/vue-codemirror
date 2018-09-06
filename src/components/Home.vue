<template>
  <div class="home">
    这是首页哦！
    {{msgs}}
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msgs: '你会喜欢我的！'
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
