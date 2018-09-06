<template>
  <div class="">
  <codemirror v-model="code" :options="cmOptions"></codemirror>
  <div class="home">
    这是编辑器哦！
    {{msgs}}
  </div>
    </div>
</template>
<script>
import { codemirror } from 'vue-codemirror'
// import 'codemirror/lib/codemirror.css'
export default {
  name: 'Editor',
  components:{
    codemirror
  },
  data () {
    return {
      msgs: '你会喜欢我的！',
      code:'const a = 10',
      // cmOptions:{
      //   tabSize:4,
      //   mode:'text/javascript',
      //   theme:'base16-dark',
      //   lineNumbers:true,
      //   line:true
      // }
    }
  }
}
</script>
<style scoped>
</style>
