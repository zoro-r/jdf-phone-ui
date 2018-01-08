import addressData from '../assets/data/districts'
// import profession from '../assets/data/profession'
import codeData from '../assets/data/codeData.js'

const help = {
  pushState (title, url) {
    let state = {
      title: title || 'title',
      url: url || '#'
    }
    window.history.pushState(state, state.title, state.url)
  },
  scrollAnchor (id, box) {
    if (!box) {
      box = document.querySelector('.mu-content-block')
    }
    let element = document.querySelector('#' + id)
    box.scrollTop = element.offsetTop
  },
  getScrollTop (box) {
    if (!box) {
      box = document.querySelector('.mu-content-block')
    }
    return box.scrollTop
  },
  scrollPosition (top, box) {
    if (!box) {
      box = document.querySelector('.mu-content-block')
    }
    box.scrollTop = top
  },

  // 获取省市区对应的中文
  getAddressOfCn (key = '0') {
    let returnValue = null
    outer: for (let i in addressData) {
      if (typeof addressData[i] === 'object') {
        for (let j in addressData[i]) {
          if (j == key) {
            returnValue = addressData[i][j]
            break outer
          }
        }
      } else if (i == key) {
        returnValue = addressData[i]
        break outer
      }
    }
    return returnValue
  },

  // 获取职业对应的中文
  getProfession (key) {
    let returnValue = []
    let jobCode = codeData.jobCode
    outer: for (let i in jobCode) {
      if (jobCode[i].code == key) {
        returnValue.push(jobCode[i])
        break outer
      } else {
        // 循环职业第二层
        for (let j in jobCode[i].children) {
          if (jobCode[i].children[j].code == key) {
            returnValue.push(jobCode[i])
            returnValue.push(jobCode[i].children[j])
            break outer
          } else {
            // 循环职业第三层
            for (let n in jobCode[i].children[j].children) {
              if (jobCode[i].children[j].children[n].code == key) {
                returnValue.push(jobCode[i])
                returnValue.push(jobCode[i].children[j])
                returnValue.push(jobCode[i].children[j].children[n])
                break outer
              }
            }
          }
        }
      }
    }
    return returnValue
  },

  // 生产UUID
  uuid (len = 36) {
    // let radix = 10
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let uuid = [],
      i
    // radix = radix || chars.length
    // if (false) {
    //   // Compact form
    //   for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
    // } else {
      // rfc4122, version 4 form
    let r
      // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = ''
    uuid[14] = '4'
      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
    for (i = 0; i < 26; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
        // }
      }
    }
    return uuid.join('')
  },
  // 复制一个对象
  copy (obj = {}) {
    return JSON.parse(JSON.stringify(obj))
  },
  /**
   * 键盘弹出 键盘消失
   */
  keyBoardShow () {
    if (window.globalConfig.os === 'android') {
      let list = document.getElementsByClassName('footer_fixd')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add('noFixed')
      }
    }
  },
  /**
   * 键盘弹出 键盘消失
   */
  keyBoardHide () {
    if (window.globalConfig.os === 'android') {
      let list = document.getElementsByClassName('footer_fixd')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('noFixed')
      }
    }
  },
  /**
   * 窗口变化
   */
  sizeChange (e) {
    if (e.target.innerHeight >= 500) {
      help.keyBoardHide()
    } else {
      help.keyBoardShow()
    }
  },
  /**
   * 判断菜单权限
   * @id 菜单id
   * @tree 菜单权限树
   */
  hasAccessTo (id, tree) {
    if (tree.id == id && tree.status == '1') return true
    if (tree.children) {
      for (let item of tree.children) {
        if (help.hasAccessTo(id, item)) return true
      }
    }
    return false
  },

  /**
   * JS日期系列：根据出生日期 得到周岁年龄
   * 参数strBirthday已经是正确格式的2007-02-09这样的日期字符串
   */
  birthdayToAge (strBirthday) {
    if (!strBirthday) return
    var returnAge
    var strBirthdayArr = strBirthday.split('-')
    var birthYear = strBirthdayArr[0]
    var birthMonth = strBirthdayArr[1]
    var birthDay = strBirthdayArr[2]

    let d = new Date()
    var nowYear = d.getFullYear()
    var nowMonth = d.getMonth() + 1
    var nowDay = d.getDate()

    if (nowYear == birthYear) {
      returnAge = 0// 同年 则为0岁
    } else {
      var ageDiff = nowYear - birthYear // 年之差
      if (ageDiff > 0) {
        if (nowMonth == birthMonth) {
          var dayDiff = nowDay - birthDay// 日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        } else {
          var monthDiff = nowMonth - birthMonth// 月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1
          } else {
            returnAge = ageDiff
          }
        }
      } else {
        returnAge = -1// 返回-1 表示出生日期输入错误 晚于今天
      }
    }

    return returnAge// 返回周岁年龄
  },

  // copy一个对象
  copyObj (obj) {
    return JSON.parse(JSON.stringify(obj))
  },

  /**
   * 页面是否可以滚动
   * @param {Boolen} scroll 是否可以滚动
   */
  disabled (scroll) {
    document.body.style.overflow = scroll ? 'hidden' : 'auto'
  },

  ModalHelper: (function (bodyCls) {
    var scrollTop
    return {
      afterOpen: function () {
        scrollTop = document.scrollingElement.scrollTop
        document.body.classList.add(bodyCls)
        document.body.style.top = -scrollTop + 'px'
      },
      beforeClose: function () {
        document.body.classList.remove(bodyCls)
        // scrollTop lost after set position:fixed, restore it back.
        document.scrollingElement.scrollTop = scrollTop
      }
    }
  })('modal-open')
}
export default help;
//
(function () {
  document.getElementsByTagName('body')[0].onresize = help.sizeChange
})(help)
