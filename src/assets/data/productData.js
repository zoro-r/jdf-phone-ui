//3115
// const CodeData = {
//   //基本保额
//   insureCode: [
//     { code: '50000', desc: '5万元' },
//     { code: '100000', desc: '10万元' },
//     { code: '150000', desc: '15万元' },
//     { code: '200000', desc: '20万元' },
//     { code: '250000', desc: '25万元' },
//     { code: '300000', desc: '30万元' }
//   ],
//   //性别
//   sexCode: [
//     { code: 'm', desc: '男' },
//     { code: 'f', desc: '女' }
//   ],
//   //保障期限
//   insuredTimeCode: [
//     { code: '20', desc: '20年' },
//     { code: '30', desc: '30年' },
//     { code: '40', desc: '40年' },
//     { code: '50', desc: '50年' },
//     { code: '60', desc: '60年' },
//     { code: '106', desc: '终身' }
//   ],
//   //交费类型
//   typeCode: [
//     { code: '12', desc: '年缴' },
//     { code: '0', desc: '趸缴' }
//   ],
//   //交费年限
//   termCode: [
//     { code: '5', desc: '5年' },
//     { code: '10', desc: '10年' },
//     { code: '15', desc: '15年' },
//     { code: '20', desc: '20年' }
//   ],
// };
// export default CodeData;

//模拟130001,130002,130003 组合产品
// const productData = [
//   {
//     "cCnmAbr":"*",
//     "cFixedAmtFlag":"0",
//     "cInsEndFlag":"0",
//     "cKindNo":"00",
//     "cNmeCn":"双百家庭支柱（基础款）",
//     "cNmeCnShort":"基础款",
//     "cPkgFlag":"1",
//     "cPkgPlyFlag":"0",
//     "cProdNo":"130001",
//     "cStatus":"1",
//     "nMinPrm":"598",
//     "tBgnTm":"2017-06-22 09:56:55"
//   },
//   {
//     "cCnmAbr":"*",
//     "cFixedAmtFlag":"0",
//     "cInsEndFlag":"0",
//     "cKindNo":"00",
//     "cNmeCn":"双百家庭支柱（升级款）",
//     "cNmeCnShort":"升级款",
//     "cPkgPlyFlag":"0",
//     "cProdNo":"130002",
//     "cStatus":"1",
//     "nMinPrm":"450",
//     "tBgnTm":"2017-06-13 10:00:18"
//   },
//   {
//     "cCnmAbr":"*",
//     "cFixedAmtFlag":"0",
//     "cInsEndFlag":"0",
//     "cKindNo":"00",
//     "cNmeCn":"双百家庭支柱（全能款）",
//     "cNmeCnShort":"全能款",
//     "cPkgPlyFlag":"0",
//     "cProdNo":"130003",
//     "cStatus":"1",
//     "nMinPrm":"300",
//     "tBgnTm":"2017-06-22 10:04:46"
//   }]
// export default productData;

//130001,130002,130003
// const CodeData = {
//   //基本保额
//   insureCode: [
//     { code: '100000', desc: '10万元' },
//     { code: '200000', desc: '20万元' },
//     { code: '300000', desc: '30万元' },
//     { code: '400000', desc: '40万元' },
//     { code: '500000', desc: '50万元' },
//   ],
//   //性别
//   sexCode: [
//     { code: 'm', desc: '男' },
//     { code: 'f', desc: '女' }
//   ],
//   //保障期限
//   insuredTimeCode: [
//     { code: '60', desc: '60年' },
//     { code: '70', desc: '70年' },
//     { code: '106', desc: '终身' }
//   ],
//   //交费类型
//   typeCode: [
//     { code: '0', desc: '趸缴' }
//   ],
// };
// export default CodeData;


//AJB00A  AJB00B  AJB00C
// const CodeData = {
//   //基本保额
//   insureCode: [
//     { code: '500000', desc: '50万元' },
//   ],
//   //性别
//   sexCode: [
//     { code: 'm', desc: '男' },
//     { code: 'f', desc: '女' }
//   ],
//   //保障期限
//   insuredTimeCode: [
//     { code: '1', desc: '一年' },
//   ],
//   //是否有社保
//   CIsSocCode:[
//     { code:'1', desc: '有'},
//     { code:'0', desc: '无'},
//   ],
//   //交费类型
//   typeCode: [
//     { code: '0', desc: '趸缴' }
//   ],
// };
// export default CodeData;



const productData = [{
  values: [{
    "cCnmAbr":"*",
    "cFixedAmtFlag":"0",
    "cInsEndFlag":"0",
    "cKindNo":"00",
    "cNmeCn":"爱加保医疗保险(实惠款)",
    "cPkgFlag":"1",
    "cPkgPlyFlag":"0",
    "cProdDesc":"100W保额的价格，买300W的保额，且包含癌症绿通服务。",
    "cProdNo":"AJB00A",
    "cSecurityAge":"0周岁-60周岁",
    "cStatus":"1",
    "nMinPrm":"170",
    "tBgnTm":"2017-09-11 11:38:18",
    "desc":"实惠款",
    "code":"AJB00A",
    select:{
      //基本保额
      insureCode:[
        { code: '100000', desc: '10万元' },
        { code: '200000', desc: '20万元' },
        { code: '300000', desc: '30万元' },
        { code: '400000', desc: '40万元' },
        { code: '500000', desc: '50万元' }
      ],

      //性别
      sexCode: [
        { code: 'm', desc: '男' },
        { code: 'f', desc: '女' }
      ],

      //保障期限
      insuredTimeCode: [
        { code: '60', desc: '60年' },
        { code: '70', desc: '70年' },
        { code: '106', desc: '终身' }
      ],

      //交费类型
      typeCode: [
        { code: '0', desc: '趸缴' },
        { code: '12', desc: '年交' }
      ],
    }
  },
  {
    "cCnmAbr":"*",
    "cFixedAmtFlag":"0",
    "cInsEndFlag":"0",
    "cKindNo":"00",
    "cNmeCn":"爱加保医疗保险(够用款)",
    "cPkgFlag":"1",
    "cPkgPlyFlag":"0",
    "cProdDesc":"100W保额的价格，买300W的保额，且包含癌症绿通服务，特色医疗服务，保障更全，交费更灵活。",
    "cProdNo":"AJB00B",
    "cSecurityAge":"0周岁-60周岁",
    "cStatus":"1",
    "nMinPrm":"182",
    "tBgnTm":"2017-09-11 21:55:26",
    "desc":"够用款",
    "code":"AJB00B",
    select:{
      //基本保额
      insureCode: [
        { code: '100000', desc: '10万元' },
        { code: '200000', desc: '20万元' },
        { code: '300000', desc: '30万元' },
        { code: '400000', desc: '40万元' },
        { code: '500000', desc: '50万元' },
      ],
      //性别
      sexCode: [
        { code: 'm', desc: '男' },
        { code: 'f', desc: '女' }
      ],
      //保障期限
      insuredTimeCode: [
        { code: '60', desc: '60年' },
        { code: '70', desc: '70年' },
        { code: '106', desc: '终身' }
      ],
      //交费类型
      typeCode: [
        { code: '0', desc: '趸缴' },
        { code: '12', desc: '年交' }
      ],
    }
  },
  {
    "cCnmAbr":"*",
    "cFixedAmtFlag":"0",
    "cInsEndFlag":"0",
    "cKindNo":"00",
    "cNmeCn":"爱加保医疗保险(尊享款)",
    "cPkgFlag":"1",
    "cPkgPlyFlag":"0",
    "cProdDesc":"100W保额的价格，买300W的保额，且包含癌症绿通服务，特色医疗服务，保障更全，交费更灵活。",
    "cProdNo":"AJB00C",
    "cSecurityAge":"0周岁-60周岁",
    "cStatus":"1",
    "nMinPrm":"200",
    "tBgnTm":"2017-09-11 21:55:58",
    "desc":"尊享款",
    "code":"AJB00C",
    select:{
      //基本保额
      insureCode: [
        { code: '100000', desc: '10万元' },
        { code: '200000', desc: '20万元' },
        { code: '300000', desc: '30万元' },
        { code: '400000', desc: '40万元' },
        { code: '500000', desc: '50万元' },
      ],
      //性别
      sexCode: [
        { code: 'm', desc: '男' },
        { code: 'f', desc: '女' }
      ],
      //保障期限
      insuredTimeCode: [
        { code: '60', desc: '60年' },
        { code: '70', desc: '70年' },
        { code: '106', desc: '终身' }
      ],
      //交费类型
      typeCode: [
        { code: '0', desc: '趸缴' },
        { code: '12', desc: '年交' }
      ],
    }
  }],
}]


export default productData;