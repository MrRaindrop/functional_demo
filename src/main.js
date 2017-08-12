import Vue from 'vue'
import App from './App'

import weex from './render'
debugger;
weex.init(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
