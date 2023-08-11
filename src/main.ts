import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 本地SVG图标
import 'virtual:svg-icons-register';    //引入SVG注册脚本
import 'uno.css' //引入 uno.css
import { createPinia } from "pinia"; //Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态
createApp(App).use(createPinia()).mount('#app')
