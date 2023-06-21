import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 安装之前，挂载插件 use，插件提供一个 install 方法（就是一个函数）
// use 就是将 app 传入，传递一些参数
app.mount('#app')
