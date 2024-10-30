<template>
    <div class="page-content">
      <!-- 轮播图 -->
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  :src= "require ('@/assets/lunbo1.jpg') " class="d-block w-100" alt="Carousel Image 1">
          </div>
          <div class="carousel-item">
            <img :src="require('@/assets/lunbo2.jpg')" class="d-block w-100" alt="Carousel Image 2">
          </div>
          <div class="carousel-item">
            <img :src="require('@/assets/lunbo3.jpg')" class="d-block w-100" alt="Carousel Image 3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  
      <!-- 三张图片 -->
      <div class="vertical-images">
        <img :src="require('@/assets/xihulongjin.png')" alt="Image 4" class="gallery-image">
        <img :src="require('@/assets/songli.png')" alt="Image 5" class="gallery-image">
        <img :src="require('@/assets/pingpaizixun.png')" alt="Image 6" class="gallery-image">
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCarousel'
  }
  </script>
  
  <style scoped>
  .page-content {
    text-align: center;
    margin-top: 20px;
  }
  
  .carousel-inner img {
    height: 300px; /* 让轮播图填满屏幕高度 */
  object-fit: cover; /* 图片自动填充裁剪 */
  margin-top: 0; /* 紧贴上方 */
  }
  
  .vertical-images{
    display:flex;
    flex-direction: column;
  }
  .vertical-images img {
  width: 100%; /* 图片宽度填满 */
  /* height: 33.33vh; 每张图片占屏幕高度的三分之一 */
  object-fit: cover;
}
  
 
  </style>