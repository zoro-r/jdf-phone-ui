import './ext'
// 引入框架公有工具类方法
import { Indicator, Toast, MessageBox } from 'mint-ui'
// 引入自定义工具类
import cache from './cache'
import format from './format'
import validator from './validator'
import ui from './ui'
import native from './native'
import http from './http'
import wechat from './wechat'

/**
 * cache 缓存数据
 * format 日期格式化
 * validator 输入数据验证
 * native 和原生的cordova方法进行交互
 * ui 页面公共弹出框 eg: 确定
 * http 后台请求交互
 */
const utils = {
  Toast,
  Indicator,
  MessageBox,
  cache,
  format,
  validator,
  native,
  ui,
  http,
  wechat
}

export default utils
