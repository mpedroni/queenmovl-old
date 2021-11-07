import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight, faExclamation } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/global.css';

library.add(faPlus, faChevronRight, faExclamation);

createApp(App)
  .use(router)
  .use(store)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app');
