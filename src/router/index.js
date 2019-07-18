import Vue from 'vue';
import Router from 'vue-router';

import Top from '@/components/contents/TopInfo';
import Temphor from '@/components/contents/Temphor';
// vue-router の呼び出し
Vue.use(Router);

// importしたときにこのルーターインスタンスを呼び出す
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', // ルートのパス
      name: 'Top', // ルートの名前
      component: Top // ルートに使用するコンポーネント
    },
    {
      path: '/temphor', // ルートのパス
      name: 'Temphor', // ルートの名前
      component: Temphor // ルートに使用するコンポーネント
    }
  ]
});
