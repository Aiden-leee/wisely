import Vue from "vue";
import App from "./App.vue";
import store from "@/store/";
import router from "@/routes/";
import Fragment from "vue-fragment";
require("@/assets/css/style.min.css");

Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
