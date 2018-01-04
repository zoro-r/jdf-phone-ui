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
  name: "baseSwitch",
  data() {
    return {
      switchValue: true,
      needListion: true
    };
  },
  props: {
    //默认值
    value: {
      type: String,
      default: "m"
    },
    //未选中的值
    unSelectValue: {
      type: String,
      default: "f"
    },
    //选中的值
    selectValue: {
      type: String,
      default: "m"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newVal) {
      this.switchValue = (newVal == this.selectValue);
    },
  },
  methods: {
    change(val) {
      this.$emit("update:value", val ? this.selectValue : this.unSelectValue);
    }
  },
  mounted() {
    this.switchValue = (this.value == this.selectValue);
  }
};
</script>
