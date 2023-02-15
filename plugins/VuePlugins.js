
import Vue from 'vue'
import VueEvents from 'vue-events'
import Vuelidate from 'vuelidate'
import vueCountryRegionSelect from 'vue-country-region-select'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('bootstrap');

Vue.use(VueEvents)
Vue.use(Vuelidate)
Vue.use(vueCountryRegionSelect)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'))

var p_json = require('/package.json')
console.log("Version: " + p_json.version + " [Last Updated: " + p_json.last_updated + "]")
// console.log("Base API URL: " + process.env.BASE_URL)