<template>
  <n22-page >
      <div slot="header" class="search_header mint-header is-fixed">
        <div class="item_left item">
          <mt-button @click.native = "back"  slot="left" icon="back"></mt-button>
        </div>
        <div class="item_center item " :class="className">
          <input type="text" placeholder="请输入搜索内容" @focus="focus" @blur="blur">
          <div class="line_box">
            <span class="line_w"></span>
            <span class="line"></span>
          </div>
        </div>
        <!-- <div class="item_right item">
          右边
        </div> -->
      </div>
  </n22-page>
</template>

<script>
export default {
  name: 'demo',
  components: {
  },
  data () {
    return {
      className: ''
    }
  },
  methods: {
    focus () {
      this.className = 'focus'
    },
    blur () {
      this.className = ''
    }
  },
  mounted () {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.search_header {
  display: flex;
  .item_left,.item_right{
    flex: 0 0 30px;
  }
  .item_center{
    flex: 1;
    height: 60%;
    input[placeholder]{
      color: white!important;
    }
    input {
      background-color: transparent;
      border:none;
      height: 100%;
      width: 100%;
      font-size: 1.6rem;
      // border-bottom: 1px solid rgba(1,1,1,.3);
      &:focus{
      //  border-bottom: 2px solid white;
      }
    }
    .line_box{
      display: flex;
      justify-content: center;
      text-align: center;
      position: relative;
      .line{
        position: absolute;
        display: block;
        width: 100%;
        border: 1px solid rgba(1,1,1,.2);
      }
      .line_w{
        position: absolute;
        opacity: 0;
        width: 0px;
        border: 1px solid white;
        transition: width .3s linear;
      }
    }
  }
  .focus{
    .line_w {
      opacity: 1!important;
      width: 100%!important;
      // display: block!important;
    }
    .line{
      opacity: 0;
      transition: opacity .3s linear;
    }
  }
}
</style>

