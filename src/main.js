import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconVue from '@element-plus/icons-vue'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
for (const [key,component] of Object.entries(ElementPlusIconVue)){
  app.component(key,component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
