import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { i18n } from './i18n'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'

const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(Vue3Toastify, {
  autoClose: 3000,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  multiple: false,
} as ToastContainerOptions)

app.mount('#root')
