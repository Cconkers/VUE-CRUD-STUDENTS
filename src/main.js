import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js")
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min.js";

createApp(App).use(store).use(router).mount('#app')
