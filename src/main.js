import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from "vue";
import App from "./App.vue";
import CV from "./components/CV";
import findPattern from "./components/findPattern";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  { path: "/", component: CV },
  { path: "/findpattern", component: findPattern }
];

const router = new VueRouter({
  routes,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
