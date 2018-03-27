<template>
  <n22-page class="page_list">
    <mt-header title="列表滚动" slot="header" :fixed="true" >
      <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
    </mt-header>

    <div slot="content">
      <!-- <div  id="mescroll" class="mescroll list"> -->
        <!-- <div v-for="(item, index) in list" :key="index" class="list_item">
          {{item}}
        </div> -->
        <!-- <p v-if="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中...
        </p> -->
      <!-- </div> -->
      <div id="mescroll" class="mescroll list">
        <!--展示上拉加载的数据列表-->
        <div id="dataList" class="data-list" v-cloak>
          <div class="list_item" v-for="(item, index) in list" :key="index">
             {{item}}
          </div>
        </div>
      </div>
    </div>
  </n22-page>
</template>

<script>
// 滚动控件
import '../../../static/lib/mescroll/mescroll.m'
export default {
  name: 'n22List',
  components: {
  },
  data () {
    return {
      mescroll: null,
      list: [1],
      loading: false,
      allLoaded: false
    }
  },
  methods: {
    /**
     * @name sunbmit
     */
    sunbmit () {

    },
    loadMore () {
      console.log('加载数据')
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 15; i++) {
          this.list.push(last + i)
        }
        this.mescroll.endSuccess()
      }, 2500)
    },
    downCallback () {
      console.log('下拉刷新')
      setTimeout(() => {
        this.mescroll.endErr()
      }, 2000)
    },
    someFunction () {
      console.log('加载数据--')
    }
  },
  beforeRouteLeave (to, from, next) {
    this.mescroll.setBounce(true)
    next()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.mescroll && vm.mescroll.setBounce(false)
    })
  },
  mounted () {
    var self = this
    /* eslint-disable */
    this.mescroll = new MeScroll('mescroll', {
      down: {
        callback: self.downCallback // 下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
      },
      up: {
        callback: self.loadMore,
        isBounce: false,
        toTop: {
          src: './../../../static/lib/scroll/img/mescroll-totop.png'
        },
        empty: {
          warpId: 'dataList',
          icon: '../res/img/mescroll-empty.png'
        }
      }
    })
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
@import "../../../static/lib/mescroll/mescroll.min.css";
.page_list{
  .list{
    width: 100%;
  }
  .list_item{
    height: 50px;
    width: 100%;
    border-bottom: 1px solid rgba(1,1,1,.2);
    font-size: 14px;
    line-height: 50px;
    text-align: center;
  }
  a {text-decoration: none;color: #18B4FE;}

  /*vue*/
  // [v-cloak] {
  //   display: none;
  // }

  /*模拟的标题*/
  /*mescroll滚动的区域*/
  .mescroll{
    position: fixed;
    top: 70px;
    bottom: 0;
    height: auto;
  }
  /*展示上拉加载的数据列表*/
  .data-list li{
    position: relative;
    // padding: 10px 8px 10px 120px;
    border-bottom: 1px solid #eee;
  }
  .data-list .pd-img{
    position: absolute;
    left: 18px;
    top: 18px;
    width: 80px;
    height: 80px;
  }
  .data-list .pd-name{
    font-size: 16px;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
  .data-list .pd-price{
    margin-top: 8px;
    color: red;
  }
  .data-list .pd-sold{
    font-size: 12px;
    margin-top: 8px;
    color: gray;
  }
}
</style>
