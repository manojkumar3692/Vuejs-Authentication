// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import header from './components/header.vue'
import footer from './components/footer.vue'
import BootstrapVue from 'bootstrap-vue'
import login from './components/login/login.vue'

Vue.component('app-header',header);
Vue.component('app-footer',footer);
Vue.component('app-login',login);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
})