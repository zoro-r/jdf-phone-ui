
## 项目模块开发注意点
1、仔细阅读开发规范：[开发指南 ]( https://cn.vuejs.org/v2/style-guide/)

2、深入理解vue生命周期：[传送门 ]( https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)

3、图片等静态文件全部存放在根目录 static文件夹 eg:/static/imges/xxx.png。

4、assets存放bo（对象原型）,css（模块sass）,data（码表）。

5、根据路由之间的继承关系，合理利用路由参数来切换子路由可避免重复渲染。

6、定义路由时候一定记得配置meta参数。

7、命名规则：
```

    1、公共组件，指令命名以“-”分割 eg：n22-data-picker

    2、开发模块使用驼峰命名首字母大写 eg：DemoField

    3、css，class命名以“_”分割 ：.page_demo_main

    4、方法命名使用驼峰首字母小写 eg:getCustomerList

    5、不要使用缩写用全拼，方便识别 eg:getCustomerList
 ```

8、组件初始化代码定义在mounted方法内部

9、字体设置为复数 eg：12px 14px 16px ...

10、组件编写规范
```
   <template>
      <div class="page_example">
      </div>
  </template>

  <script>
  export default {
    name: 'n22Example',
    components: {},
    directives: {},
    data () {
      return {
      }
    },
    created: {},
    computed: {},
    methods: {
      /** @name 初始化数据 */
      init () {}
    },
    watch: {},
    mounted () {
      this.init()
    }
  }
  </script>
  <style rel="stylesheet/scss" lang="scss" >
  .page_example{

  }
  </style>



```


