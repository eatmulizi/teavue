<template>
    <div class="carousel">
      <!-- 左箭头 -->
      <button @click="moveLeft" class="arrow left-arrow">←</button>
  
      <!-- 图片展示框 -->
      <div class="image-container">
        <div v-for="(image, index) in displayedImages" :key="index" class="image-box">
          <img :src="image.url" alt="Image">
          <p class="image-caption">{{ image.caption }}</p>
        </div>
      </div>
  
      <!-- 右箭头 -->
      <button @click="moveRight" class="arrow right-arrow">→</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        displayedImages: [], 
        currentIndex: 0, 
        intervalId: null 
      };
    },
    mounted() {
      this.updateDisplayedImages();
      this.startAutoSlide(); 
    },
    methods: {
      // 更新当前显示的图片和文字
      updateDisplayedImages() {
        this.displayedImages = [
          this.images[this.currentIndex],
          this.images[(this.currentIndex + 1) % this.images.length],
          this.images[(this.currentIndex + 2) % this.images.length],
          this.images[(this.currentIndex + 3) % this.images.length],
          this.images[(this.currentIndex + 4) % this.images.length],
        ];
      },
      // 向左移动图片
      moveLeft() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateDisplayedImages();
        this.resetAutoSlide();
      },
      // 向右移动图片
      moveRight() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateDisplayedImages();
        this.resetAutoSlide();
      },
      // 启动自动轮播
      startAutoSlide() {
        this.intervalId = setInterval(() => {
          this.moveRight();
        }, 5000);
      },
      // 重置自动轮播
      resetAutoSlide() {
        clearInterval(this.intervalId);
        this.startAutoSlide();
      }
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 80%; 
    margin: 0 auto; 
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    flex-wrap: nowrap;
    overflow: hidden;
    transition: transform 0.5s ease-in-out; /* 平滑过渡 */
  }
  
  .image-box {
    width: 20%; 
    padding: 0 10px;
    box-sizing: border-box; 
    text-align: center; 
    transition: opacity 0.5s ease-in-out;
  }
  
  .image-box img {
    width: 100%;
    height: auto;
    border-radius: 8px; 
  }
  
  .image-caption {
    margin-top: 10px; 
    font-size: 14px; 
    color: #333; 
  }
  
  .arrow {
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #333;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
  }
  
  .left-arrow {
    left: -40px; 
  }
  
  .right-arrow {
    right: -40px; 
  }
  </style>
  