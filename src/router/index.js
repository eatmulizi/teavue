
import Gongpai from '../components/GongPai.vue'
import Vue from 'vue';
import Router from 'vue-router';
import ProductDetail from '@/components/ProductDetail.vue';
import ProductAll from '@/components/ProductAll.vue';
import TeaMap from '@/components/TeaMap.vue';
import QiJia from '@/components/QiJia.vue';
Vue.use(Router);
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: Gongpai,
    props: { images: [] }
  },
 
  
  {
    path: '/product',
    name: 'product',
    component: ProductDetail,
    // component: PageContent,
    props: { 
     
      
    }
  },
  {
    path: '/join',
    name: 'join',
    component: ProductAll,
    props: { 
    
     
    }
  },
  {
    path: '/media',
    name: 'media',
    // component: PageContent,
    props: { 
     
      
    }
  },
  {
    path: '/museum',
    name: 'museum',
    // component: PageContent,
    props: { 
     
      
    }
  },
  {
    path: '/maps',
    name: 'maps',
     component: TeaMap,
    props: { 
     
      
    }
  },
  {
    path: '/history',
    name: 'history',
     component: QiJia,
    props: { 
     
      
    }
  },

]

const router =new Router({
  mode: "history",
  routes
})

export default router