<template>
  <div class="highlight free-code" :lang="lang" >
     <pre id='text' ref="copy_content"  :style="{'max-height':screenHeight - 40 + 'px','min-height':'200px'}">
        <code  :class="lang" class="hljs" style="width:100%">
          <div >
            <slot></slot>
          </div>
        </code>
      </pre>
      <div class="btns">
        <button class="copy" @click="chooseText">
          全选
        </button>
        <button class="copy" :data-clipboard-text="code.textContent" size="small" ref="btn_copy">
          复制
        </button>
      </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import highlight from 'highlight.js/lib/highlight.js'
import highlightJavascript from 'highlight.js/lib/languages/javascript'
import highlightCSS from 'highlight.js/lib/languages/css'
import highlightBash from 'highlight.js/lib/languages/bash'
import highlightXML from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/darkula.css'
export default {
  name: 'n22Highlight',
  components: {
  },
  data () {
    return {
      code: {}
    }
  },
  props: {
    lang: {
      type: String,
      default: ''
    }
  },
  methods: {
    init () {
      // 初始化highlight配置
      highlight.registerLanguage('javascript', highlightJavascript)
      highlight.registerLanguage('xml', highlightXML)
      highlight.registerLanguage('bash', highlightBash)
      highlight.registerLanguage('css', highlightCSS)
      this.code = this.$refs.copy_content
      this.code.textContent = this.format()
      highlight.highlightBlock(this.code)

      // 初始化 clipboard配置 https://clipboardjs.com/
      let clipboard = new Clipboard(this.$refs.btn_copy)
      clipboard.on('success', e => {
        window.utils.Toast({message: '复制成功', position: 'bottom'})
        console.log('复制成功')
        this.chooseText()
      })
      clipboard.on('error', function (e) {
        console.log('复制失败')
      })
    },
    /**
     * @name 格式化显示内容
     */
    format () {
      let lines = this.code.textContent.split('\n')
      let matches
      if (lines[0] === '') {
        lines.shift()
      }
      const indentation = (matches = (/^[\s\t]+/).exec(lines[0])) !== null ? matches[0] : null
      if (indentation) {
        lines = lines.map(function (line) {
          line = line.replace(indentation, '')
          return line.replace(/\t/g, '  ')
        })
        const text = lines.join('\n').trim()
        return text
      }
    },
    /**
     * @name 清除内容
     */
    clearSelection () {
      const selection = window.getSelection()
      try {
        selection.removeAllRanges()
      } catch (ex) {
        document.body['createTextRange']().select()
        document['selection'].empty()
      }
    },
    /**
     * @name 选中区域
     */
    chooseText () {
      this.clearSelection()
      this.code = this.$refs.copy_content
      this.code.appendChild(document.createTextNode(''))
      const range = document.createRange()
      range.setStart(this.code, 0)
      range.setEnd(this.code.lastChild, 0)
      window.getSelection().addRange(range)
      document.execCommand('copy')
    }
  },
  watch: {
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang='scss' scoped>
  .free-code {
    min-width: 375px;
    // border-radius: 3px;
    box-sizing: content-box;
    font-size: 1.4rem;
    flex: 1 0 auto;
    width: 100%;
    overflow: hidden;
    // padding: 5px;
    pre{
      // background: black;
      margin: 0px;
      padding: 20px;
      .hljs{
        padding: 0px;
      }
    }
    .btns{
      position: absolute;
      top: 20px;
      right: 10px;
      .copy{
        padding: 5px;
        border: none;
        border-radius: 3px;
        font-size: 10px;
        // display: none;
        opacity: .4;
        transition: all .2s linear;
      }
      &:hover .copy{
        opacity: 1;
      }
    }
  }

  .free-code-clone {
    position: absolute;
    right: 1rem;
    top: .2rem;
    opacity: 0;
    z-index: 100;
    border: none;
    padding: 0 .25rem;
    border-radius: 3px;
    transition: opacity .3s;
  }
  .free-code {
    position: relative;
    code {
      // max-height: 22.5rem;
      overflow-y: auto;
    }

    // &:hover .free-code-clone {
    //   opacity: .7;
    //   &:hover {
    //     opacity: 1;
    //   }
    // }

    &:after {
      position: absolute;
      top: .55rem;
      left: 1.55rem;
      color: gray;
      border: 1px solid gray;
      padding: 2px;
      border-radius: 2px;
      opacity: .7;
      font-size: .5rem;
    }

    &[lang="html"]:after {
      content: "HTML";
    }
    &[lang="javascript"]:after {
      content: "JAVASCRIPT";
    }
    &[lang="css"]:after {
      content: "CSS";
    }
  }
</style>

