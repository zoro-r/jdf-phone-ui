<template>
  <div>
    <div class="tabs">
      <div class="tab-bar">
        <div v-for="(item,index) in tabs" @click="change(item,index)" :key="index" class="tab-item" :style="{width:100/tabs.length+'%'}" :class="{active:tabIndexValue==index}">{{item}}</div>
      </div>
      <div class="tab-line" style="transition:all .3s ease-out;" :style="{width:100/tabs.length-4+'%',left:100/tabs.length*tabIndexValue+2+'%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: ['tabs', 'tabIndex'],
  data() {
    return {
      tabIndexValue: this.tabIndex
    }
  },
  methods: {
    change(item, index) {
      this.tabIndexValue = index
      this.$emit('update:tabIndex', index)
    }
  },
  watch: {
    tabIndex(value) {
      this.$emit('change', value)
      this.change(this.tabs[value], value)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >

</style>
