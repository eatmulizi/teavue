<template>
    <div class="image-container">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Image" class="full-screen-image" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          require('@/assets/qijia1.png'),
          require('@/assets/qijia2.png'),
          require('@/assets/qijia3.png'),
          require('@/assets/qijia4.png')
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    
    display: flex;
    flex-direction: column; /* 使图片竖向排列 */
    weight: 90vh; /* 让容器占满屏幕高度 */
  }
  
  .full-screen-image {
    flex: 1; /* 每张图片均分屏幕宽度 */
    object-fit: cover; /* 确保图片以适合方式填充 */
    height: 100%; /* 图片高度撑满视口高度 */
    width: 100%; /* 图片宽度撑满父容器的宽度 */
  }
  </style>
  