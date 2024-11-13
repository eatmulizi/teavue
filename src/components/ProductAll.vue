<template>
    <div class="product-page">
      <!-- 最顶部图片 -->
      <img :src="require('@/assets/shifengchanping.png')" alt="Top Banner" class="top-banner-image" />
  
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <!-- <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="product-image" /> -->
          <router-link :to="{ name: 'ProductDetail', params: { name: product.name } }">
            <img 
            :src="hoveredIndex === index ? products2[index].picture64 : product.picture64" 
            :alt="product.name" 
            class="product-image" 
            @mouseenter="hoveredIndex = index" 
            @mouseleave="hoveredIndex = null" 
          />
          <!-- <img :src="product.picture64"  :alt="product.name" class="product-image" /> -->
        </router-link>
          <div class="product-title-price">
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-price">¥ {{ product.price }}</p>
          </div>
          <p class="product-spec">{{ product.guige }}</p>
        </div>
        
      </div>

      <div class="button-container" v-if="storeproducts.length > 3">
      <button class="show-more" @click="showMore" v-if="!showAll">
        显示全部产品
      </button>
    </div>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        hoveredIndex: null, 
        products: [
          
        ],
        products2:[
        { picture64: require('@/assets/产品3.png') },
        { picture64: require('@/assets/产品1.png') },
        { picture64: require('@/assets/产品2.png') },
        { picture64: require('@/assets/产品3.png') },
        ],
        storeproducts:[],
        showAll: false, 
      };
    },
    created() {
    // 在组件初始化时调用 API
     this.fetchProductData();

 
    
  },
  computed: {
    displayedProducts() {
      // 根据 showAll 状态决定显示的产品数量
      
      
    },
  },
    methods: {
      showMoreProducts() {
        // 在这里实现显示更多产品的逻辑
        console.log('显示更多产品');
      },
      showMore() {
      this.showAll = !this.showAll;
      this.products = this.storeproducts;
    },
      async fetchProductData() {
      try {
        const response = await axios.get(`http://localhost:3000/api/searchAll`, );
        this.storeproducts = response.data.result;
        if (this.storeproducts.length <4){
          this.products = this.storeproducts
        }else{
          this.products = this.storeproducts.slice(0,3);
        }
       
       
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    },
    }
  };
  </script>
  
  <style scoped>
  /* 顶部图片 */
  .top-banner-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .product-page {
    padding: 20px;
  }
  
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* gap: 10px; */
  }
  
  .product-card {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .product-title-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    font-weight: bold; 
  }
  
  .product-title {
    font-size: 25px;
    font-weight: bold; 
  }
  
  .product-price {
    font-size: 25px;
    color: #333;
  }
  
  .product-spec {
    font-size: 20px;
    color: #777;
    margin-top: 5px;
    text-align: left;
    margin-left: 5px;
  }
  
  .show-more {

    padding: 24px 36px;
    font-size: 20px;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    cursor: pointer;
    max-width: 200px;
  }
  .button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  /* margin-left: 300px; */
}
  .show-more:hover {
    background-color: #f2f2f2;
  }

  .product-image:hover {
  transform: scale(1.05);
}

  </style>
  