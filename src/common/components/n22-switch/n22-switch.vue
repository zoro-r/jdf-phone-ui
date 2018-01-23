<template>
	<div class="baseSwitch">
		<!-- @change="change" -->
		<mt-switch :disabled="disabled"  v-model="switchValue" @change="change(switchValue)" class="gender" slot="choose">
			<span class="text">
	        <span>男</span>
			<span>女</span>
			</span>
		</mt-switch>
	</div>
</template>

<script>
export default {
  name: 'n22Switch',
  data () {
    return {
      switchValue: true,
      needListion: true
    }
  },
  props: {
    // 默认值
    value: {
      type: String,
      default: 'm'
    },
    // 未选中的值
    unSelectValue: {
      type: String,
      default: 'f'
    },
    // 选中的值
    selectValue: {
      type: String,
      default: 'm'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (newVal) {
      this.switchValue = newVal == this.selectValue
    }
  },
  methods: {
    change (val) {
      this.$emit('update:value', val ? this.selectValue : this.unSelectValue)
      this.$emit('change', val)
    }
  },
  mounted () {
    this.switchValue = this.value == this.selectValue
  }
}
</script>
<style lang='scss'>
.gender {
  margin-right: -10px;
  .mint-switch-core {
    width: 60px;
  }
  .mint-switch-core::before {
    width: 58px;
  }
  .mint-switch-core::after {
    z-index: 2;
    background-color: white;
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: 7px;
  }
  .mint-switch-input + .mint-switch-core::after {
    background-image: url('./assets/images/female.png');
  }
  .mint-switch-input:checked + .mint-switch-core::after {
    -webkit-transform: translateX(28px);
    background-image: url('./assets/images/male.png');
  }
  .mint-switch-label .text {
    position: absolute;
    top: 0;
    left: 2px;
    height: 32px;
    line-height: 32px;
    z-index: 1;
    :first-child {
      display: inline-block;
      width: 30px;
      text-align: center;
      color: #fff;
      font-size: 13px;
    }
    :last-child {
      display: inline-block;
      width: 20px;
      text-align: center;
      color: rgb(210, 21, 142);
      font-size: 13px;
    }
  }
}
</style>

