<template>
  <div>
    <n22-bth>
      <div slot="title" class="wq">dss</div>
    </n22-bth>

    <input  v-bind:value="something"  ref="input"
            v-on:input="updateValue($event.target.value)"/>

    <button @click="showSomething">ww </button>
  </div>
</template>

<script>
import n22Bth from './commponts/n22-render'
export default {
  name: 'n22Render',
  components: {
    n22Bth
  },
  data () {
    return {
      something: 'nimeide '
    }
  },
  methods: {
    updateValue: function (value) {
      var formattedValue = value
        // 删除两侧的空格符
        .trim()
        // 保留 2 位小数
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        )
      // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 通过 input 事件带出数值
      this.$emit('input', Number(formattedValue))
    },
    showSomething () {
      console.log(this.something)
    }
  },
  mounted () {
    this.$on('input', function (val) {
      this.something = val
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
