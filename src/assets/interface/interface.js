/**
 * @Author: jdf
 * @description 配置所有的接口信息
 * @Date: 2018-05-06 19:23:05
 * @Last Modified by: jdf
 * @Last Modified time: 2018-05-07 10:52:08
 */
export default {
  login: 'LOGIN', // 登陆
  register: 'REGISTERED',// 注册
  changePwd: 'MODIFY_PWD', // 修改密码
  sendMsg: 'GET_VERIFY_CODE',// 发送手机验证码
  update: 'UPGRADE', // 升级
  getVersion: 'CHECKUPGRADE', // 获取当前版本号（版本检测接口）
  agentInfo: 'AGENTINFO', // 查询推荐人接口
  personInfo: 'GET_PERSONAL_INFO', // 获取个人信息接口
  updatePersonInfo: 'MODIFY_PERSONAL_IN', // 个人信息修改接口
  percessStep: 'GET_PROCESS_LIST', //获取当前流程步骤接口
  processInfo: 'PROCESSFIELDRULE', // 加载流程步骤信息接口 （我的测试）
  savePeocessInfo: 'PROCESSPAGESTEPSAVE',// 保存流程步骤信息接口
  ocr: 'OCR_RECOGINZE', // ocr识别接口
  certificationInfo: 'REAL_NAME_VALIDATION', // 实名认证接口
  signInOrOut: 'SIGN_IN_OR_OUT', // 签到签退按钮
  outApply: 'OUT_APPLY', // 外出申请接口
  outApplyList: 'OUT_APPLY_LIST', //
  myCount : 'MY_COUNT', // 我的考勤统计接口
  teamCount: 'TEAM_COUNT' //团队考勤统计接口
}
