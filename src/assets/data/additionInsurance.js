const additionInsurance = [{
  values: [{
    "desc":"附加住院费用医疗险",
    "code":"addition1",
    select:{
      //基本保额
      insureCode:[{
        values:[
          { code: '100000', desc: '10万元' },
          { code: '200000', desc: '20万元' },
          { code: '300000', desc: '30万元' },
          { code: '400000', desc: '40万元' },
          { code: '500000', desc: '50万元' }]
      }],

      //性别
      sexCode: [{
        values:[
          { code: 'm', desc: '男' },
          { code: 'f', desc: '女' }
        ]
      }],

      //保障期限
      insuredTimeCode: [{
        values:[
          { code: '60', desc: '60年' },
          { code: '70', desc: '70年' },
          { code: '106', desc: '终身' }
        ]
      }],

      //交费类型
      typeCode: [{
        values:[
          { code: '0', desc: '趸缴' },
          { code: '12', desc: '年交' }
        ]
      }],
    }
  },
  {
    "desc":"附件交通意外险",
    "code":"addition2",
    select:{
      //基本保额
      insureCode:[{
        values:[
          { code: '100000', desc: '10万元' },
          { code: '200000', desc: '20万元' },
          { code: '300000', desc: '30万元' },
          { code: '400000', desc: '40万元' },
          { code: '500000', desc: '50万元' }]
      }],

      //性别
      sexCode: [{
        values:[
          { code: 'm', desc: '男' },
          { code: 'f', desc: '女' }
        ]
      }],

      //保障期限
      insuredTimeCode: [{
        values:[
          { code: '60', desc: '60年' },
          { code: '70', desc: '70年' },
          { code: '106', desc: '终身' }
        ]
      }],

      //交费类型
      typeCode: [{
        values:[
          { code: '0', desc: '趸缴' },
          { code: '12', desc: '年交' }
        ]
      }],
    }
  }],
}]

export default additionInsurance;