import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '../store';

Vue.prototype.$browser = require('webextension-polyfill');

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#popup',
  render: h => h(App),
});
