import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入element-ui（element-lpus）
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'



createApp(App).use(store).use(router).use(ElementPlus).mount('#app').prototype.$axios=axios
