<template>
  <div class="input_field">
    <span v-if="label"><font style="color:red">{{need}}</font>{{label}}</span>
    <div class="text">
			<slot class="right" name="right">
      </slot>
      <slot class="input" name="input">
      </slot>
      <slot class="select" name="select">
      </slot>
      <slot class="date" name="date">
      </slot>
      <div class="choose">
        <slot name="choose">
        </slot>
      </div>
    </div>
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {
  name: 'n22Field',
  data () {
    return {}
  },
  props: {
    // 显示文字
    label: {
      type: String
    },
    // 标红的文字
    need: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.input_field {
  .mint-cell-wrapper {
    background-image: none;
    padding: 0 10px 0 0;
  }
  .mint-field-core {
    text-align: left;
    font-size: 14px;
  }
  .icon_img {
    width: 15px;
  }
}
</style>

<style lang="scss" scoped>
.input_field {
  background: white;
  position: relative;
  min-height: 45px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  padding-left: 16px;
  span {
    flex: 0 0 80px;
    font-size: 13px;
  }
  .text {
    flex: 1;
    text-align: right;
  }
  .choose {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
  }
  .icon {
    flex: none;
    width: 50px;
  }
}
</style>
