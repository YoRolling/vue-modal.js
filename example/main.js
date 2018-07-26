// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Modal from '@/index';
Vue.config.productionTip = false;
Vue.use(Modal);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
});
