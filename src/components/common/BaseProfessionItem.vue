<template>
  <div class="profess-select-list">
    <div class="profess-select-item" v-for="(item,index) of value" :key="index" :class="{'profess-select-item-active':isChooseCode == item.code}" @click="chooseItem(item)">{{item.desc}}</div>
  </div>
</template>

<script>
export default {
  name:'BaseProfessionItem',
  props:['value'],
  data(){
    return {
      isChooseCode: '',
    }
  },
  methods:{
    chooseItem(item){
      this.isChooseCode = item.code;
      console.log(this.isChooseCode)
    }
  },
  mounted(){
    console.log(this.value)
  }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/css/proposal';

  .profess-select-list{
    height: 100px;
    overflow-y: scroll;
  }

  .profess-select-item{
    line-height: 15px;
    padding: 5px;
    text-align: center;
    font-size: 13px;
  }

  .profess-select-item-active{
    background: $bg-color;
    font-size: 15px;
  }
</style>
