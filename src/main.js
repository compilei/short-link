import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRotate, faTriangleExclamation, faLink } from '@fortawesome/free-solid-svg-icons';
import 'sweetalert2/dist/sweetalert2.min.css';

library.add(faRotate, faTriangleExclamation, faLink);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
