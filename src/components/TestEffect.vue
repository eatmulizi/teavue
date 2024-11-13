<template>
   <lunbo5 :images="imageList" />
  </template>
  
  <script>

  import lunbo5 from './lunbo5.vue';
  
  export default {
  components: { lunbo5 },
    data() {
      return {
        
        imageList: [// 这里放图片
      {url : require('@/assets/gongpai1.png'), caption:'揉'},
      {url : require('@/assets/gongpai1.png'), caption:'搓'}, 
      {url : require('@/assets/gongpai1.png'), caption:'锤'},
      {url : require('@/assets/gongpai1.png'), caption:'打'},
      {url : require('@/assets/gongpai1.png'), caption:'拍'},
      {url : require('@/assets/gongpai1.png'), caption:'1'},
      {url : require('@/assets/gongpai1.png'), caption:'2'},
      {url : require('@/assets/gongpai1.png'), caption:'3'},
      {url : require('@/assets/gongpai1.png'), caption:'5'},
      ]
      };
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  