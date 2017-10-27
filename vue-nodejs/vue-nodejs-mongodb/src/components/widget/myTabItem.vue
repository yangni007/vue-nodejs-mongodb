<template>
  <transition name='fade' v-if='isShow'>
  <div>
      <slot></slot>
  </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      isShow:false
    }
  },
 mounted(){
   if(this.$parent.$children[this.$parent.tabActive]===this){
     this.isShow=true;
   }
 }
}
</script>
<style lang='less' scoped>
  .fade-enter,.fade-leave-active{
    opacity:0;
  }
  .fade-enter-active, .fade-leave{
    transition: all .5 ease;
  }
</style>
