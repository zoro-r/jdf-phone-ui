import bo from '../assets/bo/bo'

const proposal = {
  // 创建一个新的建议书
  createProposal (agentCode, customer) {
    let proposal = utils.help.copy(bo.proposal)
    proposal.holder = utils.help.copy(bo.proposalCustomer) // 投保人
    proposal.insurantList.push(utils.help.copy(bo.proposalCustomer)) // 被保人列表

    // 设置建议书Id
    let proposalId = utils.help.uuid()
    proposal.proposalId = proposalId
    proposal.holder.proposalId = proposalId
    proposal.insurantList[0].proposalId = proposalId

    // 设置客户Id
    proposal.holder.customerId = utils.help.uuid()
    proposal.insurantList[0].customerId = utils.help.uuid()

    // 设置投保人和自己的关系为：‘00’，这里除特殊情况以外，无需更改
    proposal.holder.relation = '00'

    // 设置agentCOde
    proposal.agentCode = agentCode

    // 如果customer有值，把customer放入投保人
    if (customer) {
      proposal.holder.name = customer.name
      proposal.holder.sex = customer.sex
      proposal.holder.customerId = customer.customerId
      proposal.holder.jobCode = customer.profession
      proposal.holder.birthday = new Date(customer.birthdate).format('yyyy-MM-dd')
    }

    console.log(proposal)

    // 储存建议书
    // this.$store.commit('SET_PROPOSAL',proposal)
    // debug
    window.sessionStorage.setItem('proposal', JSON.stringify(proposal))

    return proposal
  },

  // 给一个建议书挂载产品计划对象
  addPlan (proposal) {
    proposal.planList = []
    proposal.planList.push(utils.help.copy(bo.proposalPlan)) // 保险计划列表

    proposal.planList[0].proposalId = proposal.proposalId

    // 设置planList里面被保人Id
    proposal.planList[0].insuredId = proposal.insurantList[0].customerId
    
    // 设置planId
    proposal.planList[0].planId = utils.help.uuid()
  },

  // 加载产品定义
  getProductConfig () {
    let promise = new Promise((reslove, reject) => {
      utils.http
        .post('GETPRODUCTDEFLIST', {})
        .then(res => {
          console.log(res.data)
          reslove(res.data)
        })
        .catch(e => {
          console.log(e)
        })
    })
    return promise
  },

  // 主险列表
  getProductMain (agentCode) {
    let promise = new Promise((reslove, reject) => {
      let req = {
        agentCode: agentCode
      }
      utils.http
        .post('GETMAINRISKLIST', req)
        .then(res => {
          console.log(res.data)
          reslove(res.data)
        })
        .catch(e => {
          console.log(e)
        })
    })
    return promise
  },

  // 选择一款险种,返回对应的下标
  searchProduct (productList, code) {
    let nowProductIndex = null
    for (let i in productList) {
      if (productList[i].productCode == code) {
        nowProductIndex = i
      }
    }
    return nowProductIndex
  },

  // 根据产品ID在产品定义列表里面找到对应的产品
  getProduct (proposal, nowProduct, id) {
    // 在产品定义里面找到对应的产品-主险
    let product = utils.help.copy(bo.proposalProduct)
    
    // 赋值-主险属性列表
    product.attList = nowProduct.attList
    // 赋值-附加险列表
    product.extraList = nowProduct.ExtraList

    // 赋值-产品Id
    product.id = utils.help.uuid()
    // 赋值-产品名称
    product.productName = nowProduct.productName
    // 赋值-产品code
    product.productCode = nowProduct.productCode

    product.planId = proposal.planList[0].planId

    // 附加险添加id以及主险parentId
    for (let i in product.extraList) {
      product.extraList[i].id = utils.help.uuid()
      product.extraList[i].parentId = product.id
    }
    console.log(product)
    return product
  }

}
export default proposal
