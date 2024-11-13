<template>
 
    <div class="page-content">

      <div class="content-1">
        <div class="img-content-left">
          <img
            :src="require('@/assets/image/media/媒体左边.png')"
            class="d-block w-100"
            alt="Image 1"
          />
        </div>
        <div class="img-content-right">
          <div class="flex-item">
            <img
            :src="require('@/assets/image/media/媒体左上.png')"
            class="d-block w-100"
            alt="Image 1"
          />
          </div>
          <div class="flex-item">
            <img
            :src="require('@/assets/image/media/媒体右上.png')"
            class="d-block w-100"
            alt="Image 1"
          />
          </div>
          <div class="flex-item">
            <img
            :src="require('@/assets/image/media/媒体左下.png')"
            class="d-block w-100"
            alt="Image 1"
          />
          </div>
          <div class="flex-item">
            <img
            :src="require('@/assets/image/media/媒体右下.png')"
            class="d-block w-100"
            alt="Image 1"
          />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    components: {
  
    },
    data() {
      return {
        // 在这里定义你的数据
      };
    },
    methods: {
      // 在这里定义你的方法
    },
    mounted() {
      // 在这里执行组件挂载后的代码
    },
  };
  </script>
  
  <style scoped>
  img {
    max-width: 100%; /* 图像宽度最大为 100% */
    height: auto; /* 自动调整高度以保持宽高比 */
  }
  h1 {
    font-family: "Heavy", sans-serif;
    font-weight: 900; /* 使用 Heavy 字体 */
    font-size: 30px;
    text-align: left;
    letter-spacing: 0.09em;
  }
  h2 {
    font-family: "Bold", sans-serif;
    font-weight: 700; /* 使用 Bold 字体 */
    font-size: 21px;
    text-align: left;
    letter-spacing: 0.09em;
    line-height: 1.8;
  }
  h3 {
    font-family: "Medium", sans-serif;
    font-weight: 600; /* 使用 Medium 字体 */
    font-size: 21px;
    color: #214815;
  }
  p {
    letter-spacing: 0.09em;
    line-height: 1.8;
    font-family: "Light";
    text-align: left;
    font-size: 21px;
  }
  .content-1 {
    width: 100%; /* 设置宽度 */
    height: auto; /* 设置高度 */
    background-image: url("@/assets/image/chinagongbrand/content-1-bg.png"); /* 设置背景图 */
    background-size: cover; /* 使背景图覆盖整个 div */
    background-position: center; /* 背景图居中 */
    background-repeat: no-repeat; /* 不重复背景图 */
    display: flex;
    padding-top: 3%;
    padding-bottom: 3%;
  }
  .p-text-content-1 {
    margin-top: 10%;
  }
  .img-content-left {
    flex: 1; /* 等比占据 */
    box-sizing: border-box; /* 包括内边距和边框 */
    height: auto; /* 设置高度 */
    margin-left: 6%;
    margin-right: 2%;
  }
  
  .img-content-right {
    flex: 1; /* 等比占据 */
    box-sizing: border-box; /* 包括内边距和边框 */
    height: auto; /* 设置高度 */
    margin-left: 2%;
    margin-right: 6%;
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    justify-content: space-between; /* 水平间距 */
    width: 100%; /* 容器宽度 */
  }
  .flex-item{
    width: 48%; /* 每个 item 的宽度 (48% 可以留出空间) */
    height: auto; 
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    margin-bottom: 10px; /* 下方间距 */
  }
  
  </style>
  