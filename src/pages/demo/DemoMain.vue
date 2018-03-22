<template>
  <n22-page @scroll="scroll" :has-header = 'hasHeader' class="demo_page">

    <mt-header slot="header" :fixed="true" title="组件列表" :style="{'opacity': opacity}">
    </mt-header>

    <div slot="content" class="demo_page" style="padding-top:20px">
      <div class="demo_main_header">
        <h2>组件列表</h2>
        <a href="https://github.com/jdfdcc/n22-phone-ui" class="gitDiv"></a>
      </div>
      <mt-cell v-for="(item,index) in components"
        :key="index"
        :title="index + 1 +'、'+item.name"
        :to="item.url"
        is-link
        value="点击查看">
      </mt-cell>
      <!-- 公共方法 -->
      <div class="demo_main_header">
        <h2>公共方法utils</h2>
      </div>

      <mt-cell v-for="(item,index) in componentTwo"
        :key="index + 20"
        :title="index + 1 +'、'+item.name"
        :to="item.url"
        is-link
        value="点击查看">
      </mt-cell>

      <!-- demo页面 -->
       <div class="demo_main_header">
        <h2>demo页面设计</h2>
      </div>

      <mt-cell v-for="(item,index) in componentThree"
        :key="index + 20"
        :title="index + 1 +'、'+item.name"
        :to="item.url"
        is-link
        value="点击查看">
      </mt-cell>


      <div style="font-size:1.5rem;margin:20px 0px;color:gray">
        @请用chome的手机调试模式查看
        <a href="https://cn.vuejs.org/v2/style-guide/">开发指南</a>
      </div>

      <!-- <mt-button @click="scrollTo()">
        测试
      </mt-button> -->
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
      hasHeader: false,
      opacity: 0,
      components: [
        {name: '开发模板', url: {name: 'n22Template'}},
        {name: 'Field组件', url: {name: 'n22Field'}},
        {name: '地址组件', url: {name: 'n22Address'}},
        {name: '地图', url: {name: 'n22Map'}},
        {name: '性别组件', url: {name: 'n22Switch'}},
        {name: '日历组件', url: {name: 'n22Calendar'}},
        {name: '输入组件', url: {name: 'n22Input'}},
        // {name: '滚动日历', url: {name: 'n22Scroll'}},
        {name: '缩放组件', url: {name: 'n22Zoom'}},
        {name: 'Tab组件', url: {name: 'n22Tab'}},
        {name: '日期组件', url: {name: 'n22DatePicker'}},
        {name: '自定义轮播图', url: {name: 'n22Touch'}},
        {name: '语法高亮', url: {name: 'n22Highlight'}},
        // {name: '图标', url: {name: 'n22Icon'}},
        {name: '列表', url: {name: 'n22List'}},
        {name: '视频', url: {name: 'n22Video'}},
        {name: '签字', url: {name: 'n22Sign'}},
        {name: '滑动列表', url: {name: 'n22CellSwipe'}}
      ],
      componentTwo: [
        {name: '公共方法', url: {name: 'n22Utils'}},
        {name: '原生交互方法', url: {name: 'n22Native'}},
        {name: '微信调用方法', url: {name: 'n22WeChat'}},
        {name: '动画', url: {name: 'n22Animate'}},
        {name: '欢迎页', url: {name: 'n22SplashScreen'}},
        {name: '版本管理', url: {name: 'n22Version'}}
      ],
      componentThree: [
        {name: '渲染组件', url: {name: 'n22Render'}},
        {name: '搜索页面', url: {name: 'n22Search'}}
      ]
    }
  },
  methods: {
    scroll (ele) {
      this.opacity = ele.top / 90
    },
    scrollTo () {
      let ele = document.getElementsByClassName('scroll-content')
      console.log(ele)
      console.log(ele[0])
      alert(ele[0].scrollTo)
      // ele[0].scrollTo(0, 100)
      ele[0].scrollTop = 100
    }
  },
  computed: {},
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.demo_page{
  text-align: center;
  width: 100vw;
  max-width: 500px;
  .demo_main_header{
    height: 45px;
  }
}
</style>
