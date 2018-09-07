<template>
  <div class="setting">
    <select id="theme" v-model="something">
      <option v-for="name in mapArray" :value="name.mode2" :key="name.id">{{name.name}}</option>
    </select>
  <codemirror v-model="code" :options="cmOptions"></codemirror>
  <div class="home">
    这是编辑器哦！
    {{msgs}}
  </div>
    </div>
</template>
<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/css/css'
import 'codemirror/addon/hint/css-hint'
import 'codemirror/addon/selection/active-line'
import 'codemirror/keymap/sublime'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/seti.css'
export default {
  name: 'Editor',
  components: {
    codemirror
  },
  mounted () {
    this.mapArray = [
      {id: 1, name: 'sfsf', mode2: 'sfsdf'},
      {id: 2, name: 'javascript', mode2: 'javascript'}
    ]
    this.something = 'javascript'
    document.getElementById('theme').nodeValue = 'javascript'
  },
  data () {
    return {
      msgs: '你会喜欢我的！',
      code: 'body{margin:0}',
      nameArray: [],
      modeArray: [],
      mapArray: [],
      something: '',
      cmOptions: {
        theme: 'seti',
        tabSize: 4,
        mode: 'css',
        extraKeys: {'Ctrl-Space': 'autocomplete'},
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        scrollbarStyle: 'overlay',
        keymap: 'sublime'
      }
    }
  }

}
</script>
<style scoped>
.CodeMirror pre{
  font-weight: bold;
}
.setting{
    margin: 0;
    width: 1398px;
    height: 600px;
    background-color: rgb(248, 248, 248);
    h1{
        margin: 0;
    }
}
</style>
