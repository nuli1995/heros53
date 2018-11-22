//导入模块 模块化语法  CommonJS
//const Vue = require('vue');

//ES6中模块化的语法
import Vue from 'vue'
import App from './App.vue'

//导入全局样式
//导入bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//导入index.css
import './assets/css/index.css';
new Vue({
  el: '#app',
  render: h => h(App)
})
