import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import './registerServiceWorker';
import router from './router';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-6143259011',
  router
});

Vue.use(PrimeVue);
Vue.component('Calendar',Calendar);
Vue.component('Checkbox',Checkbox);


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
