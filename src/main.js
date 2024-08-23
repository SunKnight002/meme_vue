// import './assets/main.css'
// import './style.css';
import "@/assets/css/reset.css"
import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { createPinia } from 'pinia'

import createRouter from './router/routes'
import App from './App.vue'

// 添加Font Awesome圖標到庫中
library.add(faBars);

const router = createRouter(createWebHistory())
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app')
app.use(createPinia())

