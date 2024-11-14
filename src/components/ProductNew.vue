<template>
    <div class="product-page">
      <!-- 最顶部图片 -->
      <div class="top-banner">
        <ul class="top-image-list">
          
        </ul>
        <img :src="topImages[topImageIndex]" alt="Top Banner" class="top-banner-image" />
      </div>
  
      <div class="product-grid">
        <div class="product-card" v-for="(product, index) in products" :key="index">
          <router-link to= "/DetailNew" >
            <img 
              :src="product.picture64" 
              alt="狮峰龙井系列·精品" 
              class="product-image" 
              @mouseenter="hoveredIndex = index" 
              @mouseleave="hoveredIndex = null" 
            />
          </router-link>
          <div class="product-title-price">
            <h3 class="product-title">狮峰龙井系列·精品</h3>
            <p class="product-price">¥ 18000</p>
          </div>
          <p class="product-spec">礼盒 50g(5g*10)</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hoveredIndex: null,
        products: [
          { picture64: require('@/assets/产品1.png') },
          { picture64: require('@/assets/产品2.png') },
          { picture64: require('@/assets/产品3.png') },
          { picture64: require('@/assets/产品1.png') },
          { picture64: require('@/assets/产品2.png') },
          { picture64: require('@/assets/产品3.png') },
          { picture64: require('@/assets/产品1.png') },
          { picture64: require('@/assets/产品2.png') },
          { picture64: require('@/assets/产品3.png') },
        ],
        topImageIndex: 0, // 默认显示第一张图片
        topImages: [
          require('@/assets/狮峰大图.png'),
          require('@/assets/龙井大图.png'),
          require('@/assets/西湖大图.png'),
          require('@/assets/其他大图.png'),
        ],
      };
    },
    created() {
    this.setTopImage(); // 根据 URL 参数设置顶部图片
  },

    methods: {
        setTopImage() {
      const params = this.$route.query.imageIndex; // 获取 URL 参数
      if (params && ['1', '2', '3', '4'].includes(params)) {
        this.topImageIndex = parseInt(params) - 1;
      }
    },
    },
  };
  </script>
  
  <style scoped>
  /* 顶部图片 */
  .top-banner {
    margin-bottom: 20px;
  }
  
  .top-image-list {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .top-image-button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
  }
  
  .top-image-button.active {
    background-color: #f0f0f0;
  }
  
  .top-banner-image {
    width: 100%;
    height: auto;
  }
  
  /* 产品展示部分 */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
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
  }
  
  .show-more:hover {
    background-color: #f2f2f2;
  }
  
  .product-image:hover {
    transform: scale(1.05);
  }
  </style>
  