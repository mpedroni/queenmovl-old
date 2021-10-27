import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import './styles/global.css';

library.add(faPlus, faChevronRight);

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app');
