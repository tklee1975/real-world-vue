import { createApp } from 'vue'
import router from "./router";      // // <-- This imports index.js from the /router directory
import App from './App.vue'

createApp(App).use(router).mount('#app')
//createApp(App).mount('#app')
