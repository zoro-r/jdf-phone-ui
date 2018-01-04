<template>
  <div>
    <mt-field @click.native="showPicker = true" v-model="inputValue" :placeholder="placeholder" disableClear disabled>
      <img class="icon_img" style="top:-2px;" src="../../assets/images/icon/down.png" />
    </mt-field>
    <mt-popup v-model="showPicker" position="bottom" style="width:100%;">
      <mt-picker class="cascade-picker" ref="picker" :showToolbar="true" :visibleItemCount="10" :slots="items" @change="onValuesChange" style="width:100%;">
          <div class="picker-bar" style="justify-content:center;flex-wrap:wrap;align-items:flex-start;text-overflow:ellipsis;">
            <mt-button @click="close" size="small" plain class="no-border" style="flex:0 1 18%;">取消</mt-button>
            <mt-button size="small" plain class="no-border" style="flex:0 1 64%;line-height:16px;">{{title}}</mt-button>
            <mt-button @click="confirm" type="primary" size="small" plain class="no-border" style="flex:0 1 18%;">确定</mt-button>
          </div>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import codeData from '../../assets/data/CodeData.js'
export default {
  name: 'cascadePicker',
  props: {
    value: String,
    type: {},
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  data() {
    return {
      showPicker: false,
      title:'',
      searchKey:null,
      inputValue:null,
      pickerValues: [],
      currentValue: null,
      currentText: null,
      items:(() => {
        let items = [{"flex":1,"values":["一般职业","农牧业","渔业","木材森林业","矿业采掘业","交通运输业","餐饮旅游业","建筑工程","制造加工维修业","出版广告业","医药卫生保健","娱乐业","文教机构","宗教机构","公共事业","一般买卖（零售批发业）","服务业","家庭管理","公检法等执法检查机关","军人","IT业（软、硬件开发制作）","职业运动"],"texts":[],"defaultIndex":1,"className":"slot0","textAlign":"center"},{"flex":1,"values":["农业","牧业"],"texts":[],"defaultIndex":1,"className":"slot1","textAlign":"center"},{"flex":1,"values":["畜牧场经营者(不亲自作业)","畜牧工作人员","兽医","动物养殖人员","驯养人员"],"texts":[],"defaultIndex":1,"className":"slot2","textAlign":"center"}]
        if(this.value){
          let jobCode = codeData[this.type]
          for(let i=0;i<jobCode.length;i++){
            let item0 = jobCode[i]
            if(item0.children){
              for(let j=0;j<item0.children.length;j++){
                let item1 = item0.children[j]
                if(item1.children){
                  for(let k=0;k<item1.children.length;k++){
                    let item2 = item1.children[k]
                    if(item2.code == this.value){
                      items = this.initData([item0.desc,item1.desc,item2.desc])
                      this.currentValue = item2.code
                      this.currentText = item2.desc
                      setTimeout(()=>{
                        this.inputValue = item2.desc
                      })
                    }
                  }
                }
              }
            }
          }
        }
        
        return items
      })()
    }
  },
  methods: {
    initData(values){
      let jobCode = codeData[this.type]
      let textAligns = ['center', 'center', 'center']
      let result = []

      let foo = (items, level) => {
        for(let i=0;i<items.length;i++){
          if(result[level] == null){
            result[level] = {
              flex: 1,
              values: [],
              texts: [],
              defaultIndex:0,
              className: 'slot'+level,
              textAlign: textAligns[level]
            }
          }
          result[level].values.push(items[i].desc)
          if(items[i].desc == (values[level])){
            if(items[i].children){
              foo(items[i].children, level+1)
            }
            result[level].defaultIndex = i
          }
        }
      }

      foo(jobCode, 0)
      return result
    },
    onValuesChange(picker, values){
      if(values[0] == undefined){
        return
      }
      let index = 0
      for(let i=1;i<values.length;i++){
        if(values[i] != this.pickerValues[i]){
          index = i
          break;
        }
      }
      this.pickerValues = [].concat(values)
      if(index == 2){
        this.title = values[index]
        if(values[values.length-1] != undefined){
          this.currentText = values[values.length-1]
        }
        let jobCode = codeData[this.type]
        for(let i=0;i<jobCode.length;i++){
          let item0 = jobCode[i]
          if(item0.desc == values[0] && item0.children){
            for(let j=0;j<item0.children.length;j++){
              let item1 = item0.children[j]
              if(item1.desc == values[1] && item1.children){
                for(let k=0;k<item1.children.length;k++){
                  let item2 = item1.children[k]
                  if(item2.desc == values[2]){
                    this.currentValue = item2.code
                  }
                }
              }
            }
          }
        }
      }else{
        let result = this.initData(values)
        for(let i=index;i<values.length-1;i++){
          if(result[i+1]){
            picker.setSlotValues(i+1, result[i+1].values)
          }
        }
      }
    },
    confirm() {
      console.log(this.currentValue)
      this.$emit('input', this.currentValue)
      this.inputValue = this.currentText
      this.close()
    },
    close() {
      setTimeout(() => {
        this.showPicker = false
      })
    }
  },
  search(){
    let defaultValue = []
    let defaultIndex = []
    let jobCode = codeData[this.type]
    for(let i=0;i<jobCode.length;i++){
      let item0 = jobCode[i]
      if(item0.children){
        for(let j=0;j<item0.children.length;j++){
          let item1 = item0.children[j]
          if(item1.children){
            for(let k=0;k<item1.children.length;k++){
              let item2 = item1.children[k]
              if(item2.code.indexOf(this.searchKey)!=-1 || item2.desc.indexOf(this.searchKey)!=-1){
                defaultIndex = [i,j,k]
              }
            }
          }
        }
      }
    }
    for(let i=0;i<this.items.length;i++){
      this.$refs.picker.setSlotValue(i, this.items[i].values[defaultIndex[i]])
    }
  },
  mounted() {
    if(this.value){
      let defaultValue = []
      let defaultIndex = []
      let jobCode = codeData[this.type]
      for(let i=0;i<jobCode.length;i++){
        let item0 = jobCode[i]
        if(item0.children){
          for(let j=0;j<item0.children.length;j++){
            let item1 = item0.children[j]
            if(item1.children){
              for(let k=0;k<item1.children.length;k++){
                let item2 = item1.children[k]
                if(item2.code == this.value){
                  defaultIndex = [i,j,k]
                }
              }
            }
          }
        }
      }
      for(let i=0;i<this.items.length;i++){
        this.$refs.picker.setSlotValue(i, this.items[i].values[defaultIndex[i]])
      }
    }
  }
}
</script>
<style>
.picker-center-highlight{
  /* margin-top:0!important; */
}
</style>