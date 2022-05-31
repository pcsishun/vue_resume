import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import Carousel3d from 'vue-carousel-3d';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Carousel3d);


new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
  router,
}).$mount('#app')
