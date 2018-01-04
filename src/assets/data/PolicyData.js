const PolicyData = {
  //业务来源细分（销售渠道）
  channel: [
    {code:'0101', desc:'团险直销'},
    {code:'0102', desc:'个人营销'},
    {code:'0201', desc:'银行代理'},
    {code:'0202', desc:'专业代理'},
    {code:'0203', desc:'兼业代理'},
    {code:'0204', desc:'联办代理'},
    {code:'0301', desc:'经纪业务'},
    {code:'0401', desc:'合作业务'},
  ],
  //退保标志，退保为真则保单状态无效，退保为否则保单状态有效
  polState: [
    {code:'1',desc:'无效'},
    {code:'0',desc:'有效'},
  ],
  //性别
  sex: [
    {code:'m',desc:'男'},
    {code:'f',desc:'女'},
    {code:'0',desc:'不详'},
  ],
  //证件类型
  idType: [
    {code:'0',desc:'身份证'},
    {code:'1',desc:'护照'},
    {code:'2',desc:'军官证'},
    {code:'3',desc:'驾照'},
    {code:'4',desc:'户口本'},
    {code:'5',desc:'学生证'},
    {code:'6',desc:'工作证'},
    {code:'7',desc:'出生证'},
    {code:'8',desc:'其它'},
    {code:'9',desc:'无证件'},
    {code:'A',desc:'士兵证'},
    {code:'B',desc:'回乡证'},
    {code:'C',desc:'临时身份证'},
    {code:'D',desc:'警官证'},
    {code:'E',desc:'台胞证'},
  ],
  //缴费方式
  PAYINTV: [
    {code:'12',desc:'年缴'},
    {code:'1',desc:'月缴'},
    {code:'3',desc:'季缴'},
    {code:'6',desc:'半年缴'},
    {code:'0',desc:'趸缴'},
  ]
};
export default PolicyData;