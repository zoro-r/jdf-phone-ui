import Vue from 'vue'

var AlertConstructor = {}
const div = document.createElement('div')

AlertConstructor.init = function (template) {
  AlertConstructor = Vue.extend(template)
}

AlertConstructor.show = (options = {}) => {
  document.body.appendChild(div)
  options.type = 'inform'
  const propsData = Object.assign({}, options)
  const alertInstance = new AlertConstructor({
    propsData
  }).$mount(div)
  alertInstance.show()
}

AlertConstructor.confirm = (options) => {
  document.body.appendChild(div)
  options.type = 'confirm'
  const propsData = Object.assign({}, options)
  const alertInstance = new AlertConstructor({
    propsData
  }).$mount(div)
  alertInstance.show()
}

export default AlertConstructor
