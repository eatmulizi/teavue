<template>
    <div class="product-page">
      <!-- 最顶部图片 -->
      <img :src="require('@/assets/shifengchanping.png')" alt="Top Banner" class="top-banner-image" />
  
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <img :src="require(`@/assets/${product.image}`)" :alt="product.name" class="product-image" />
          <div class="product-title-price">
            <h3 class="product-title">{{ product.name }}</h3>
            <p class="product-price">¥ {{ product.price }}</p>
          </div>
          <p class="product-spec">{{ product.spec }}</p>
        </div>
        
      </div>
      <div class="button-container">
        <button class="show-more" @click="showMoreProducts">显示全部产品</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { name: '狮峰龙井系列·精品', price: '18000', spec: '礼盒 50g 5g*10', image: 'product1.png' },
          { name: '狮峰龙井系列·精品', price: '18000', spec: '礼盒 50g 5g*10', image: 'product1.png' },
          { name: '狮峰龙井系列·精品', price: '18000', spec: '礼盒 50g 5g*10', image: 'product1.png' },
          { name: '狮峰龙井系列·精品', price: '18000', spec: '礼盒 50g 5g*10', image: 'product1.png' },
          { name: '狮峰龙井系列·精品', price: '18000', spec: '礼盒 50g 5g*10', image: 'product1.png' },
          { name: '狮峰龙井系列·精品', price: '18000', spec: '礼盒 50g 5g*10', image: 'product1.png' }
        ]
      };
    },
    methods: {
      showMoreProducts() {
        // 在这里实现显示更多产品的逻辑
        console.log('显示更多产品');
      }
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
  </style>
  