// .vue 文件只不过是在编译的时候将template编译成render而已
export default {
  name: 'n22-btn',

  mixins: [
  ],

  props: {
    title: {
      type: String,
      default: '我是标题'
    }
  },

  computed: {
    classes () {
      return 'btn'
    }
  },
  methods: {
  },

  mounted () {
  },

  beforeDestroy () {
  },

  render (createElement) {
    return createElement('div', {
      class: this.classes,
      style: 'height:100px;background:red',
      on: {
        click () {
          console.log('click')
        },
        touchstart () {
          console.log('touchStart')
        }
      }
    }, [this.$slots.title, '先来一些文字', createElement('h2', {class: 'title'}, '标题')])
  }
}
