import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'