<template>
  <div ref="qrcode"></div>
</template>


<script>
import VueQArt from 'vue-qart'
console.log(extQr)
export default {
  name:'qrcode',
  components:{
    VueQArt
  },
  mounted(){
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = extQr(typeNumber, errorCorrectionLevel);
    qr.addData('Hi!');
    qr.make();
    qr.createImgTag(); // this is a base64 data
  }
}
</script>