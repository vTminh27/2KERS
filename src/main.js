import { createApp } from 'vue'
import Vue from "vue";
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import './css/style.css';
// import {  IconsPlugin } from 'bootstrap-vue';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import "./assets/css/colors/colors.css";
// import "./assets/css/main.css";

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

// Component Registration
var app = createApp(App);
app.use(store).use(router).mount('#app');


app.component('my-component', {
    /* ... */
})
//Plugins
app.provide('message', 'Add item success');
const myPlugin = {
    install(app, options) {
        app.config.globalProperties.$translate = (key) => {
            // retrieve a nested property in `options`
            // using `key` as the path
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
    }
}
app.use(myPlugin, {
    /* optional options */
})
const myDirective = app.directive('focus', {
    inserted: function (el) {
        debugger
        // Ta gán focus vào phần tử đó
        el.focus();
    }
})
app.use(myDirective);