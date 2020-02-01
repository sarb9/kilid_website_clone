import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css' 
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import jalali from 'jalali-moment';
Vue.use(require('vue-jalali-moment'));

Vue.filter('numFormat', numFormat(numeral));
// Vue.filter('jmoment', jalali.unix);
delete Icon.Default.prototype._getIconUrl;
Vue.config.productionTip = false

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
