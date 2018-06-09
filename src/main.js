import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({

  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/*',
      redirect: '/'
    }
  ],
  // Vue-router
  // https://router.vuejs.org/en/advanced/scroll-behavior.html
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})