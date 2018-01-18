<template>
  <div  class="show_code_main">
    <n22-page class="first">
      <mt-header slot="header" :fixed="true" title="日历控件">
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>

      <div slot="content">
        <div class="">
          <n22-calendar @choose="chooseDate" :date="new Date('2018-02-02')" :punchs="['2018-01-18']"></n22-calendar>
          <br/><br/><br/>
          <mt-button type="primary" size="large" @click="sunbmit()">提交</mt-button>
        </div>

        <br/>
      </div>
    </n22-page>

    <div class="secend">
       <n22-highlight lang="html">
&lt;n22-calendar @choose="chooseDate"
              :date="new Date('2018-02-02')"
              :punchs="['2018-01-18']" &gt;
&lt;/n22-calendar&gt;
      </n22-highlight>
      <br>
      <n22-highlight lang="javascript">
chooseDate (date) {
  console.log(date)
}
      </n22-highlight>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    /**
     * @name 选中日期
     */
    chooseDate (date) {
      console.log(date)
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
