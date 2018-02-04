<template>
    <n22-page class="page_animation">
      <mt-header title="图标库" slot="header" :fixed="true" >
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>
      <div slot="content">
        <div class="icon_content" v-for="(item,index) in iconList" :key="index">
          <icon class="icon_item" :name="item" scale='1'></icon>
          <icon class="icon_item" :name="item" scale='1.5'></icon>
          <icon class="icon_item" :name="item" scale='2' ></icon>
          <icon class="icon_item" style="color:red" :name="item" scale='2.5'  flip="horizontal"></icon>
          <icon class="icon_item" :name="item" scale='3' pulse></icon>
        </div>
      </div>
    </n22-page>
</template>

<script>
export default {
  name: 'n22Icon',
  components: {},
  directives: {},
  data () {
    return {
      iconList: ['flag', 'camera', 'spinner', 'refresh', 'language']
    }
  },
  created () {},
  computed: {},
  methods: {
    /** @name 初始化数据 */
    init () {}
  },
  watch: {},
  mounted () {
    this.init()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.icon_content{
  height: 70px;
  display: flex;
  align-items: flex-end;
  .icon_item{
    margin-left: 20px;
  }

}
</style>
