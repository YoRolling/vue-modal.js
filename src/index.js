import Modal from './modal/Modal';

// import Backdrop from './components/V-Backdrop.vue';
export default {
    install(Vue, options) {
        // let _opts = Object.assign({}, {}, options);
        Vue.prototype.$modal = Modal;
    }
};
