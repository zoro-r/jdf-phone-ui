<template>
  <div class="address_district">
    <mt-field style="color:red" @click.native="showPopup" v-model="showDesc.small" :placeholder="'请选择职业'" :disableClear="true" disabled />
    <mt-popup v-bind:style="{height:(screenHeight *.55 + 45)+'px'}" v-model="popupVisible" position="bottom" @close="showPopup(false)">
      <div class="address_header">
        <span>请选择职业</span>
        <img @click="showPopup" src="../../assets/images/icon/close.png" />
      </div>
      <div v-if="popupVisible">
        <v-distpicker :placeholders="placeHolders" defaultCode="xx" @selected="onSelected" :districts="districts" :province="showDesc.big" :city="showDesc.medium" :area="showDesc.small" type="mobile">
        </v-distpicker>
      </div>
    </mt-popup>
  </div>
</template>

<script>
// import DISTRICTS from "../../assets/data/districts";
import DISTRICTS from "../../assets/data/profession";
import VDistpicker from "../../assets/lib/vDistpicker/src/Distpicker";
export default {
  name: "BaseAddress",
  components: {
    "v-distpicker": VDistpicker
  },
  data() {
    return {
      placeHolders: { province: "大类", city: "中类", area: "小类" },
      popupVisible: false,
      showDesc: {
        big: null,
        medium: null,
        small: null
      },
      big: null,
      medium: null,
      districts: DISTRICTS
    };
  },
  props: {
    small: {
      type: String,
      default: ""
		},
		//禁用
		disabled:{
			type:Boolean,
			default:false
		}
  },
  methods: {
    //选中区
    onSelected(data) {
      console.log(data);
      this.$emit("update:small", data.area.code);
      this.popupVisible = false;
    },
    //显示/关闭弹出框
    showPopup() {
			if (!this.popupVisible) {
				//解决安卓键盘弹出导致页面高度不对问题
        setTimeout(() => {
          this.popupVisible = !this.popupVisible && !this.disabled;
        }, 200);
      } else {
        this.popupVisible = !this.popupVisible && !this.disabled;
      }

			// if(this.disabled) return ;
      // this.popupVisible = !this.popupVisible;
    },
    //初始化数据
    _initData() {
      let professionList = utils.help.getProfession(this.small);
      if (professionList.length >= 3) {
        this.showDesc.big = professionList[0].desc;
        this.showDesc.medium = professionList[1].desc;
        this.showDesc.small = professionList[2].desc;

        this.big = professionList[0].code;
        this.medium = professionList[1].code;
        this.small = professionList[2].code;
      }
      //如果等于0，表示getProfession没有拿到数据
      else if(professionList.length == 0){
        this.showDesc.big = null;
        this.showDesc.medium = null;
        this.showDesc.small = null;

        this.big = null;
        this.medium = null;
        this.small = null;
      }

    }
  },
  watch: {
    popupVisible(newVal) {
      // utils.help.disabled(newVal);
      newVal
        ? utils.help.ModalHelper.afterOpen()
        : utils.help.ModalHelper.beforeClose();
    },
    // big(newVal, oldVal) {
    //   this._initData()
    // },
    // medium(newVal, oldVal) {
    //   this._initData()
    // },
    small(newVal, oldVal) {
      this._initData();
    }
  },
  mounted() {
    //初始化数据
    this.$nextTick(() => {
      this._initData();
    });
  }
};
</script>

<style lang='scss' scoped>
.address_district {
  .address_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    span {
      flex: 1;
      text-align: center;
      padding-left: 46px;
      font-size: 15px;
    }
    img {
      flex: 0 0 30px;
      width: 30px;
      margin-right: 16px;
    }
  }
  .mint-popup {
    width: 100%;
    bottom: 0px;
  }
}
</style>

