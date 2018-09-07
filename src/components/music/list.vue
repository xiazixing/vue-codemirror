<template>
  <div>
    <Item :title="title" :type="type"></Item>
  </div>
</template>
<script>
import Item from '@/components/music/item'
export default {
  name: 'musicList',
  components: {
    Item
  },
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
