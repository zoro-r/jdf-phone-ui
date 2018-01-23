<template>
    <div class="page_example">
      <mt-header title="模板" slot="header"  >
        <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
      </mt-header>
      <n22-highlight lang='javascript'>

        &lt;template&gt;
    &lt;div class="page_xxxx"&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'n22Xxx',
  components: {},
  directives: {},
  data () {
    return {
    }
  },
  created: {},
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
&lt;/script&gt;
&lt;style rel="stylesheet/scss" lang="scss" &gt;
.page_xxxx{

}
&lt;/style&gt;



      </n22-highlight>
    </div>
</template>

<script>
export default {
  name: 'n22Template',
  components: {},
  directives: {},
  data () {
    return {
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
.page_example{

}
</style>
