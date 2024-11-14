<template>
    <div class="recruitment-page">
      <div class="image-container">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="招商图片"
          class="recruitment-image"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          require('@/assets/image/zhaoshang/1.png'),
          require('@/assets/image/zhaoshang/2.png'),
          require('@/assets/image/zhaoshang/3.png'),
          require('@/assets/image/zhaoshang/4.png'),
          require('@/assets/image/zhaoshang/5.png'),
        ], // 替换为您的图片路径
      };
    },
  };
  </script>
  
  <style scoped>
  .recruitment-page {
    text-align: center; /* 可根据需要调整 */
  }
  
  .image-container {
    display: flex;
    flex-direction: column; /* 垂直排列 */
    align-items: center; /* 居中对齐 */
  }
  
  .recruitment-image {
    width: 100%; /* 自适应宽度 */
    max-width: 600px; /* 最大宽度，适应大屏 */
    height: auto; /* 保持纵横比 */
    margin: 10px 0; /* 图片间距 */
  }
  </style>