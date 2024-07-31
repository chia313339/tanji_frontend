import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'  // 添加 .js 擴展名
import './style.css'

createApp(App).use(router).mount('#app')