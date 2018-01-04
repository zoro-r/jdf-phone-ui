<template>
  <div style="position:relative;display:inline-block;">
    <div @click="isDebug?null:upload(true)">
      <slot ref="img"></slot>
    </div>
    <input v-if="isDebug" ref="file" type="file" @change="upload(false)" style="position:absolute;left:0;top:0;width:100%;height:100%;opacity:0;">
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data() {
    return {
      isDebug: globalConfig.isDebug,
      sheetVisible: false,
      actions:[{
        name: '拍照',
        method:()=>{
          this.getPicture(Camera.PictureSourceType.CAMERA)
        }
      }, {
        name: '从相册中选择',
        method:()=>{
          this.getPicture(Camera.PictureSourceType.PHOTOLIBRARY)
        }
      }]
    }
  },
  props: {
    label: {
      type: String
    },
    quality: {
      type: Number,
      default:50
    }
  },
  methods: {
    upload(native){
      if(native){
        this.sheetVisible = true
      }else{
        let simpleFile = this.$refs.file.files[0];
        if(!/image\/\w+/.test(simpleFile.type)) {
          alert("请确保文件类型为图像类型");
          return false;
        }
        let reader = new FileReader();
        reader.readAsDataURL(simpleFile);
        reader.onload = e => {
          this.$el.children[0].src = e.target.result
          this.$emit('getResult', e.target.result)
        }
      }
    },
    getPicture(sourceType){
      let cameraOptions = {
        allowEdit: true,
        quality:this.quality,
        targetWidth:100,
        targetHeight:100,
        cameraDirection:Camera.Direction.FRONT,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: sourceType
      }

      navigator.camera.getPicture(suc => {
        this.$el.children[0].src = 'data:image/jpeg;base64,' + suc
        this.$emit('getResult', 'data:image/jpeg;base64,' + suc)
      }, err => {
        console.log(err)
      }, cameraOptions);
    }
  }
}
</script>