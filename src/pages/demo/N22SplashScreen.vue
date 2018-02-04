<template>
	<div>
			<div v-if="!imgLoaded">
				加载中...
			</div>
		  <!-- swiper -->
      <div  v-bind:style="{'opacity':imgLoaded?1:0}">
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide class="swiper_base first">
						<img class="one ani" :src="'./static/images/screen/1.png'" swiper-animate-effect="fadeInDown" swiper-animate-duration=".8s" swiper-animate-delay="0s">
						<img class="two ani" :src="'./static/images/screen/2.png'"  swiper-animate-effect="fadeInUpBig" swiper-animate-duration=".8s" swiper-animate-delay="0s">
						<!-- <img class="three" src="./../../assets/img/screen/3.png" alt=""> -->
					</swiper-slide>
					<swiper-slide class="swiper_base secend-22">
						<img class="ani"  :src="'./static/images/screen/22.png'" swiper-animate-effect="fadeInLeft" swiper-animate-duration=".8s" swiper-animate-delay="0s" style="margin-top:40%;" />
						<img class="down ani" swiper-animate-effect="fadeInUp" swiper-animate-duration=".6s" swiper-animate-delay="0s"  :src="'./static/images/screen/11.png'"/>
					</swiper-slide>
					<swiper-slide class="swiper_base secend">
						<img :src="'./static/images/screen/two.png'" alt="">
					</swiper-slide>
					<swiper-slide class="swiper_base third">
						<img :src="'./static/images/screen/third.jpeg'" alt="">
						<mt-button class="btn_open" @click="toMain" plain>立即体验</mt-button>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
	</div>
</template>

<script>
export default {
  name: 'n22SqlashScreen',
  data () {
    return {
      imgLoaded: false,
      swiperOption: {
        // 设置加载图片完成
        preloadImages: true,
        updateOnImagesReady: true,
        direction: 'horizontal',
        effect: 'fade',
        height: window.height,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          init () {
            // 隐藏动画元素
            // 初始化完成开始动画
            // this.$nextTick(e => {
            window.swiperAnimateCache(this)
            // })
          },
          slideChangeTransitionEnd () {
            // 每个slide切换结束时也运行当前slide动画
            setTimeout(() => {
              window.swiperAnimate(this)
            }, 150)
          },
          imagesReady: () => {
            console.log('页面图片加载完成，动画开始.......')
            this.$nextTick(e => {
              this.imgLoaded = true
              window.swiperAnimate(this.$refs.mySwiper.swiper)
            })
            // alert("图片加载完成了");
          }
        }
      }
    }
  },
  methods: {
    /**
     * 跳转至首页
     */
    toMain () {
      this.$router.push({ name: 'demoMain' })
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 100, false);
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.swiper_base {
  height: 100vh;
  font-size: 1.5rem;
  &.first {
    box-sizing: border-box;
    // display: flex;
    text-align: center;
    // justify-content: center;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgb(65, 112, 227)),
      to(rgb(255, 255, 255))
    );
    .one {
      height: 70%;
			padding-top: 20%;
    }
    .two {
      height: 30%;
      width: 100%;
    }
  }
  &.secend {
    img {
      width: 100%;
      height: 100%;
    }
  }
	&.secend-22{
		background: url('../../../static/images/screen/bg.png');
		background-size: 100% 100%;
		.down{
			position: absolute;
			width: 100%;
			bottom: 0px;
			left: 0px;
		}
	}
  &.third {
    // text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .btn_open {
    position: absolute;
    width: 100px;
    bottom: 60px;
    left: calc(50% - 50px);
  }
}
</style>
