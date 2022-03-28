import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/js/rem'
import '@/style/index.css'

Vue.use(ElementUI)
Vue.use(Vant);
Vue.config.productionTip = false;
if(process.env.NODE_ENV==='development'){
   require('@/mock/index')
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
