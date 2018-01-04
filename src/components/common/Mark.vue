<template>
  <mt-popup v-model="isMarkShow" popup-transition="popup-fade" style="width:90%;border-radius:4px;">
    <h2 class="center">备注</h2>
    <div style="padding:0 12px 12px;">
      <textarea v-model="markContent" name="" id="" style="width:98%;height:80px;background:#F8F8FA;border:none;border-radius:4px;"></textarea>
    </div>
    <div class="mint-msgbox-btns" style="border-top:1px solid #ddd;">
      <button @click="isMarkShow = false" class="mint-msgbox-btn mint-msgbox-cancel" style="border-radius:0 0 0 4px;">取消</button>
      <button @click="confirmMark()" class="mint-msgbox-btn mint-msgbox-confirm" style="border-radius:0 0 4px 0;">完成</button>
    </div>
  </mt-popup>
</template>

<script>
export default {
  naem:'mark',
  props:['isMarkShow'],
  data(){
    return{
      markContent: "",
    }
  },
  methods:{
    //确定备注
    confirmMark(){
      this.$emit('update:confirmMark',markContent)
    }
  },
  mounted(){
    // console.log(this.isMarkShow)
  }
}
</script>

<style>

</style>
