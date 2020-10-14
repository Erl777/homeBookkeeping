import Vue from 'vue'
import Vuelidate from "vuelidate/src";
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import localizeFilter from "./filters/localize.filter";
import tooltipDirective from  './directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import titlePlugin from './utils/title.plugin'
import Loader from "./components/app/Loader";
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin)
Vue.use(Vuelidate);
Vue.use(VueMeta)
Vue.filter('date', dateFilter);
Vue.filter('localize', localizeFilter);
Vue.filter('currency', currencyFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyDzM4xoWN-vsIHhTjU21Z2KWBNc0BxqrNM",
  authDomain: "homebookkeeping-bbd22.firebaseapp.com",
  databaseURL: "https://homebookkeeping-bbd22.firebaseio.com",
  projectId: "homebookkeeping-bbd22",
  storageBucket: "homebookkeeping-bbd22.appspot.com",
  messagingSenderId: "995195030876",
  appId: "1:995195030876:web:47619183d655c5de10c599"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});


