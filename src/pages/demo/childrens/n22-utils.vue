<template>
  <n22-page>
    <mt-header title="工具类" slot="header" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div slot="content">
      <div class="demo_page">
        <br/>
        <mt-button type="primary" size="large" @click="showLoadding()">显示loadding（3S）</mt-button>
      </div>
    </div>
  </n22-page>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      showZoom: false,
      disabled: false,
      value: 'm'
    }
  },
  methods: {
    // 塞入默认值
    showLoadding () {
      Indicator.open({
        text: '',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        Indicator.close()
      }, 3000)
    },
    // 选中
    choose (data) {
      console.log('返回数据---->', JSON.stringify(data))
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
