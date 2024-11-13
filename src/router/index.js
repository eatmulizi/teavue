
import Gongpai from '../components/GongPai.vue'
import Vue from 'vue';
import Router from 'vue-router';
import ProductDetail from '@/components/ProductDetail.vue';
import ProductAll from '@/components/ProductAll.vue';
import TeaMap from '@/components/TeaMap.vue';
import QiJia from '@/components/QiJia.vue';
import Demo from '@/components/DemoMo.vue';
import UploadPicture from '@/components/UploadPicture.vue';
import NewsPublic from '@/components/NewsPublic.vue';
import TestEffect from '@/components/TestEffect.vue';
import DetailNew from '@/components/DetailNew.vue';
import ProductNew from '@/components/ProductNew.vue';
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
    path: '/detail',
    name: 'detail',
    component: DetailNew,
    // component: PageContent,
    props: { 
     
      
    }
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
    path: '/test',
    name: 'test',
    component: TestEffect,
    // component: PageContent,
    props: { 
     
      
    }
  },
  {
    path: '/product/:name',
    name: 'ProductDetail',
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
    component: NewsPublic,
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
  {
    path: '/demo',
    name: 'demo',
     component: Demo,
    props: { 
     
      
    }
  },

  {
    path: '/upload',
    name: 'upload',
     component: UploadPicture,
    props: { 
     
      
    }
  },

  {
    path: '/allproduct',
    name: 'allproduct',
     component: ProductNew,
    props: { 
     
      
    }
  },


]

const router =new Router({
  mode: "history",
  routes
})

export default router