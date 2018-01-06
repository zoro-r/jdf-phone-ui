/*
 * @Author: jdf
 * @Date: 2018-01-06 21:45:22
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-06 21:46:21
 * **** 大型的码表请单独建立
 */
const CodeData = {
  // 性别
  sexCode: [{
    code: 'm',
    desc: '男'
  }, {
    code: 'f',
    desc: '女'
  }, {
    code: '0',
    desc: '不详'
  }],

  // 社保
  soc: [{
    code: '1',
    desc: '是'
  }, {
    code: '0',
    desc: '否'
  }],

  // 证件类型
  certCode: [{
    code: 0,
    desc: '身份证'
  }],

  // 关系
  relationCode: [{
    code: '00',
    desc: '本人'
  }, {
    code: '31',
    desc: '父母'
  }, {
    code: '32',
    desc: '子女'
  }, {
    code: '33',
    desc: '配偶'
  }, {
    code: '99',
    desc: '其他'
  }],

  // 婚姻状况
  marriageCode: [{
    code: '1',
    desc: '已婚'
  }, {
    code: '2',
    desc: '未婚'
  }, {
    code: '3',
    desc: '离婚'
  }, {
    code: '4',
    desc: '丧偶'
  }, {
    code: '5',
    desc: '其他'
  }],

  // 客户等级
  customerLevelCode: [{
    code: '1',
    desc: '低'
  }, {
    code: '2',
    desc: '中'
  }, {
    code: '3',
    desc: '高'
  }],
  // 客户登记
  buyWillCode: [{
    code: '01',
    desc: '想买'
  }, {
    code: '02',
    desc: '观望'
  }],

  // 学历高中及以下、高中、中专、大专、本科、硕士、博士、博士以上
  educationCode: [
    { 'code': '1', 'desc': '博士' },
    { 'code': '2', 'desc': '硕士' },
    { 'code': '3', 'desc': '本科' },
    { 'code': '4', 'desc': '大专' },
    { 'code': '5', 'desc': '中专' },
    { 'code': '6', 'desc': '职高' },
    { 'code': '7', 'desc': '中学' },
    { 'code': '8', 'desc': '小学' },
    { 'code': '9', 'desc': '文盲' },
    { 'code': '10', 'desc': '半文盲' }
  ],

  // 日志类型 所有、待提交、待审批、已审批、审批中
  recordCode: [{
    code: 1,
    desc: '待提交'
  }, {
    code: 2,
    desc: '待审批'
  }, {
    code: 3,
    desc: '审批中'
  }, {
    code: 4,
    desc: '已审批'
  }]
}

export default CodeData
