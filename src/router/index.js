import Vue from 'vue';
import Router from 'vue-router';

import Top from '@/components/contents/Top';
import Temphor from '@/components/contents/Temphor';
import About from '@/components/contents/About';
import Performance from '@/components/contents/Performance';
// vue-router の呼び出し
Vue.use(Router);

// importしたときにこのルーターインスタンスを呼び出す
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/temphor',
      name: 'Temphor',
      component: Temphor
    },
    {
      path: '/performance',
      name: 'Performance',
      component: Performance
    }
  ]
});
