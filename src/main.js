import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

// import './assets/styles/base.css'
Vue.config.debug = true;

new Vue({
    router,
    el:'#appIndex',
    render:function(h){
        return h(App)
    }
})