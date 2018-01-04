<template>
<transition name='slide-top'>
  <div class="outer" v-if="isShow" @click="close">
    
  </div>
</transition>
</template>
<script>
export default {
  name: 'popup',
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    title: {
      type: String,
      default: '提示',
    },
    isBack: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    show(){
      this.isShow = true;
    },
    close(){
      this.isShow = false;
      console.log(this.isShow)
    }
  },
};
</script>
<style scoped lang="scss">
  .outer{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    transition: all 0.3s;
  }
</style>