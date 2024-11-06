<template>
    <div class="page-content">
      <div class="pad-content">
        <img
          :src="
            require('')
          "
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
      <div class="content-1">
        
      </div>
    </div>
  </template>
    
    <script>
      export default {
        name: "MyComponent",
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
  .content-1{
    width: 100%; /* 设置宽度 */
    height: auto; /* 设置高度 */
    background-image: url("@/assets/image/qifamily/content-1-bg.png"); /* 设置背景图 */
    background-size: cover; /* 使背景图覆盖整个 div */
    background-position: center; /* 背景图居中 */
    background-repeat: no-repeat; /* 不重复背景图 */
    display: flex;
  }
  </style>
    