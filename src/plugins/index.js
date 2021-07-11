/**
 * 组件库入口
 */
import Text from './text'

/**
 * 组件列表
 */
const components = [
  Text
]

/**
 * 定义 install 方法，接收 Vue 作为参数
 * @param {*} Vue
 * @returns
 */
const install = Vue => {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(com => Vue.component(com.name, com))
}

/**
 * 检测到 Vue 才执行，毕竟我们是基于 Vue 的
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const registryComponents = {}
components.forEach(item => {
  registryComponents[item.name] = item
})

export {
  registryComponents
}

export default {
  // 所有组件，必须具有 install，才能使用 Vue.use()
  install
}
