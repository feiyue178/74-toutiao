import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 职责1：导入项目需要依赖的资源（包 css...）
// 职责2：初始化根实例
new Vue({// 创建实例
  render: h => h(App)// 作用是把某一个组件渲染在你指定的容器内
}).$mount('#app')// 挂载在app容器内
