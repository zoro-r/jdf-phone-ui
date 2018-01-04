const bo = {
  proposal:{
    proposalId: null,
		planInsureDate: null,//计划投保日期
		agentCode: null,//代理人Code
		channelCode: null,//代理人所在渠道：10个险，20银保
		printItem: null,//打印项（H5用不到）
    holder: null, //ProposalCustomer投保人
    insurantList: [], //List<ProposalCustomer>被保人列表
    status: null,
    planList: [],//ProposalPlan保险计划列表
  },

  //投被保人
  proposalCustomer:{
    customerId: null,
    proposalId: null,
    name: null,
    birthday: null,
    sex: 'm', //默认男
    jobCode: null,
    jobLevel: null,
    customerType: null,
    somking: null,
    relation: null,
    industryId: null,
    jobId: null,
    positionId: null,
    custNum: null,
    avgAge: null,
    potentialCustomerId: null,
  },

  //保险计划
  proposalPlan:{
    planId: null,
    proposalId: null,
    insuredId: null,
    addTime: null,
    updateTime: null,
    addUserId: null,
    updateUserId: null,
    versionNo: null,
    totalPremium: null,
    allTotalPremium: null,
    createPlanInsDate: null,
    holder: null,
    insurant: null,
    productList: [], //proposalProductDef 产品列表
  },

  //产品
  proposalProduct:{
    className: null,
    id: null,
    mobileId: null,
    productCode: null,
    fullCode: null,
    productName: null,
    preminu: null,
    productShortName: null,
    extraList: null,
    attList: null,
    payMode: null, //缴费方式
    policyPeriod: null, //保险期限
    payPeriod: null, //缴费期限
    amount: null,  //保险金额
    premiumDes: null, //保费
    drawDiv: null,
    automaticPay: null, //不用传
  },

  productAttribute:{
    attCode: null, 	//属性代码
    attName: null, 	//属性名称
    attViewType: null, 	//属性表现形式 见:建议书产品属性显示类型字典  attViewType 1:select  2:input 3:radio
    unit: null,	 	//单位
    defaultValue: null,//缺省值
    attValueList: null, //ProposalAttValue //属性值枚举,当attViewType为select时该属性不为空
  },

  proposalAttValue:{
    attId: null,
    productId: null,
    attCode: null,
    attValue: null,
    attText: null,
  },


  // 产品
  // proposalProductDef:{
  //   serialVersionUID: '-3144594677612414763L',
  //   className: null,//this.getClass().getSimpleName()
  //   coreCode: null, // 产品代码
  //   productCode: null, // 产品ID
  //   productName: null, // 产品名称
  //   productShortName: null, // 产品简称
  //   coverage: null, // 保险责任
  //   baseAmount: null, // 基本保额
  //   attList: [], //ProductAttribute产品属性列表
  //   ExtraList: [], // ProposalProductDef附加险列表
  //   BindExtraList: [], //ProposalProductDef绑定附加险列表
  //   isMain: null, // 是否主险
  //   type: null, // 0:个险 1:团险
  //   bind: null, // 1:绑定 0:非绑定
  //   bindCode: null,//绑定附加险的code
  //   productType: null, // 0.普通 1.投连 2.万能
  //   mutiBenefit: null, // 是否多张利益表
  //   hasService: null, // 有无服务指南
  //   isSell: null, // 是否在售
  //   hasBenefitTable: null,
  //   hasBenefitChart: null,
  //   hasCoverage: null,
  //   fullName: null,
  //   fullCode: null,
  //   productText: null,
  // },

} 

export default bo;
  