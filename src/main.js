import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation.js'

const app = createApp(App)

app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
