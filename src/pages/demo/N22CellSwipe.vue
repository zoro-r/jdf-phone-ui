<template>
  <n22-page>
    <mt-header title="滑动" slot="header" :fixed = "true">
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content" class="show_code_main">
      <n22-cell-swipe style="height:100px;border-bottom:1px solid black" v-for="(item, index) in dateList" :key="index">
        <div slot="main">dadadsadadadadasdsadasdada{{item}}</div>
        <div slot="right" style="background:red;height:100%">
          <button @click="deleteItem(item, index)">删除</button>
        </div>
      </n22-cell-swipe>
    </div>
  </n22-page>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      dateList: [1, 3, 5, 5, 6]
    }
  },
  methods: {
    deleteItem (item, index) {
      this.dateList.splice(index, 1)
      console.log('22', item)
    }
  },
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.demo_page{
  padding: 10px;
  font-size: 1.4rem;
}
</style>
