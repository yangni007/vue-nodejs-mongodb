<template>
  <div >
      <slot></slot>
  </div>
</template>
<script>
import myTabItem from './myTabItem'
export default {
  data () {
    return {
      tabActive : this.active
    }
  },
  props: ["active"],
  watch: {
    active: function(newVal, oldVal){
      console.log(newVal)
      console.log(this.$children.length)
      this.$children[oldVal].$data.isShow = false;
      this.$children[newVal].$data.isShow = true;
    }
  },
  components: {
    'my-tab-item': myTabItem
  }
}
</script>
<style lang='less' scoped>

</style>
