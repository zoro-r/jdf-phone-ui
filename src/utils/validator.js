// 定义方法
const validatorFun = {
  /**
   * @name 身份证校验方法
   * @param 需要验证的字符串
   */
  isID: function (idStr = '') {
    if (idStr == null) {
      idStr = ''
    }
    let oldCode = idStr
    idStr = idStr.toUpperCase()
    let city = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江 ',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北 ',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏 ',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外 '
      },
      // tip,
      pass = true
    // tip = ''
    if (!idStr || (!/^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(idStr) && !/^[1-9]\d{7}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}$/i.test(idStr))) {
      // tip = '身份证号格式错误'
      pass = false
    } else if (!city[idStr.substr(0, 2)]) {
      // tip = '地址编码错误'
      pass = false
    } else {
      // 18位身份证需要验证最后一位校验位
      if (idStr.length == 18) {
        idStr = idStr.split('')
        // ∑(ai×Wi)(mod 11)
        // 加权因子
        let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        // 校验位
        let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        let sum = 0
        let ai = 0
        let wi = 0
        for (let i = 0; i < 17; i++) {
          ai = idStr[i]
          wi = factor[i]
          sum += ai * wi
        }
        // let last = parity[sum % 11]
        if (parity[sum % 11] != idStr[17]) {
          // tip = '校验位错误'
          pass = false
        }
      }
    }
    if (!pass) {
      return false
    } else {
      let sex = oldCode.length == 15 ? oldCode.substr(14, 1) % 2 : oldCode.substr(16, 1) % 2
      sex == 0 ? sex = 2 : sex = 1
      let birthDay = oldCode.length == 15 ? '19' + oldCode.substr(6, 2) + '-' + oldCode.substr(8, 2) + '-' + oldCode.substr(10, 2) : oldCode.substr(6, 4) + '-' + oldCode.substr(10, 2) + '-' + oldCode.substr(12, 2)
      return {
        cityCode: oldCode.substr(0, 4),
        cityDesc: city[oldCode.substr(0, 2)],
        birthDay: birthDay,
        sex: sex
      }
    }
  }
}

// 检验方法
const validator = {
  reg: {
    // require: /^[\s\S]+$/, //判断是否为空，可以为空格
    require: /\S/, // 判断是否为空 不能为空格
    // Positive: /^([1-9]\d*|[0]{1,1})$/, // 匹配非负整数（正整数 + 0）
    positive: /^[0-9]*[1-9][0-9]*$/, // 匹配正整数
    // Negative: /^((-d+)|(0+))$/, // 匹配非正整数（负整数 + 0）
    negative: /^-[0-9]*[1-9][0-9]*$/, // 匹配负整数
    realNumber: /^-?\d+\.?\d*$/, // 实数
    integer: /^-?d+$/, // 匹配整数
    // PositiveFloat: /^d+(.d+)?$/, // 匹配非负浮点数（正浮点数 + 0）
    positiveFloat: /^(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*))$/, // 匹配正浮点数
    NegativeFloat: /^((-d+(.d+)?)|(0+(.0+)?))$/, // 匹配非正浮点数（负浮点数 + 0）
    negativeFloat: /^(-(([0-9]+.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*.[0-9]+)|([0-9]*[1-9][0-9]*)))$/, // 匹配负浮点数
    letter: /^[A-Za-z]+$/, // 匹配由26个英文字母组成的字符串
    numberLetter: /^[A-Za-z0-9]+$/,
    mobile: /^(13|14|15|16|17|18|19)\d{9}$/, // 手机号
    mobileOrEmpty: /^\s*$|^(13|14|15|17|18)\d{9}$/, // 手机号(或为空)
    telephone: /^((0\d{2,3})-?)(\d{7,8})(-?(\d{3,}))?$/, // 电话
    // telephone:/^(0\d{2,3}\d{7,8})(-\d{1,4})?$/
    chineseLetter: /^[a-z A-Z\u4E00-\u9FA5]+$/, // 汉字+字母
    name: /^[a-zA-Z\u4E00-\u9FA5·.]+$/, // 汉字+字母
    chinese: /^[\u4E00-\u9FA5]+$/, // 汉字
    // email: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i, //email
    // email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //email
    email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/, // email edited by liule
    carNO: /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/, // 车牌号
    // pwd: /^[A-Za-z0-9]{6,20}$/, //密码验证
    // pwd: /^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/, // 密码验证
    pwd: /^[0-9a-zA-z]{6,20}$/, // 密码验证
    passport: /^[G|E][0-9]{8}$|^[S|P|D][0-9]{7}$/, // 护照
    bankCode: /^[0-9]+$/, // 银行卡号
    numberStr: /^[0-9]+$/
    // 护照 ^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$
  },

  /**
   * @name 判断是否通过校验
   * @param {*} validateObj 传入参数
   * @param {*} ignoreStr 忽略校验的参数名 以‘-’ 隔开 eg：name-pwd-
   * @return 返回对象 {status:是否通过校验，rules:未通过的校验内容}
   */
  judge (validateObj = {}, ignoreStr = '-') {
    let valiStr = ignoreStr,
      flag = true,
      rules = []
    for (let key in validateObj) {
      if (valiStr.indexOf(key) < 0 && !validateObj[key].status) {
        flag = false
        rules.push(validateObj[key].msg)
      }
    }
    return {
      status: flag,
      rules: rules
    }
  },

  // 判断
  validate (label, val, ...rules) {
    // if(val&&typeof val =="string") val = val.trim()  //去掉输入值的首尾空格
    const result = {
      status: true,
      msg: '验证通过',
      results: []
    }
    for (let rule of rules) {
      const ruleResult = {
        status: true,
        reg: rule.reg,
        msg: '验证通过'
      }
      if (rule.isMethods) {
        // 进行方法校验
        if (val && !rule.methods(val)) {
          result.status = false
          ruleResult.status = false
          let msg = null
          if (typeof rule.msg === 'function') {
            msg = rule.msg(label)
          } else {
            msg = rule.msg
          }
          if (result.results.length == 0) {
            result.msg = msg
          }
          ruleResult.msg = msg
        } else {
          ruleResult.status = true
          ruleResult.data = rule.methods(val)
        }
        result.results.push(ruleResult)
      } else {
        let flag = false
        if (rule.name != 'require') {
          if (val) {
            flag = !rule.reg.test(val)
          }
        } else {
          flag = !rule.reg.test(val)
        }
        // 正则判断
        if (flag) {
          result.status = false
          ruleResult.status = false
          let msg = null
          if (typeof rule.msg === 'function') {
            msg = rule.msg(label)
          } else {
            msg = rule.msg
          }
          if (result.results.length == 0) {
            result.msg = msg
          }
          ruleResult.msg = msg
          result.results.push(ruleResult)
        }
      }
    }
    return result
  }
}
// 自执行函数 初始化规则
validator.rules = (function () {
  let tempObj = {}
  // 配置特殊的方法
  let methodsValidator = {
    // 身份证校验
    idcard: {
      isMethods: true,
      methods: validatorFun.isID,
      msg (label) {
        return (label || '') + '身份证格式不匹配'
      }
    }
  }
  // 循环初始化规则
  for (let i in validator.reg) {
    let temp = {
      reg: validator.reg[i],
      msg (label) {
        return '校验失败'
      }
    }
    tempObj[i] = temp
  }
  return Object.assign(tempObj, methodsValidator)
})()
// 默认的规则
// validator.rules = {
//   require: {
//     reg: validator.reg.require,
//     msg (label) {
//       return (label || '') + '必填项'
//     }
//   },
//   chinese: {
//     reg: validator.reg.chinese,
//     msg (label) {
//       return (label || '') + '中文格式不匹配'
//     }
//   },
//   number: {
//     reg: validator.reg.Positive,
//     msg (label) {
//       return (label || '') + '数字格式不匹配'
//     }
//   },
//   mobile: {
//     reg: validator.reg.mobile,
//     msg (label) {
//       return (label || '') + '手机号格式不匹配'
//     }
//   },
//   mobileOrEmpty: {
//     reg: validator.reg.mobileOrEmpty,
//     msg (label) {
//       return (label || '') + '手机号格式不匹配'
//     }
//   },
//   email: {
//     reg: validator.reg.email,
//     msg (label) {
//       return (label || '') + '电子邮箱格式不匹配'
//     }
//   },
//   pwd: {
//     reg: validator.reg.pwd,
//     msg (label) {
//       return (label || '') + '密码不正确'
//     }
//   },
//   name: {
//     reg: validator.reg.name,
//     msg (label) {
//       return (label || '') + '姓名格式不匹配'
//     }
//   },
//   idcard: {
//     isMethods: true,
//     methods: validatorFun.isID,
//     msg (label) {
//       return (label || '') + '身份证格式不匹配'
//     }
//   },
//   passport: {
//     reg: validator.reg.passport,
//     msg (label) {
//       return (label || '') + '护照格式不匹配'
//     }
//   },
//   bank: {
//     reg: validator.reg.bankCode,
//     msg (label) {
//       return (label || '') + '格式不为整数'
//     }
//   },
//   telephone: {
//     reg: validator.reg.telephone,
//     msg (label) {
//       return (label || '') + '格式不为整数'
//     }
//   },
//   realNumber: {
//     reg: validator.reg.realNumber,
//     msg (label) {
//       return (label || '') + '正浮点数'
//     }
//   }
// }

export default validator
