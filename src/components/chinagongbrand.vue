<template>
 
  <div class="page-content">
    <div class="pad-content">
      <img
        :src="require('@/assets/image/chinagongbrand/中国贡牌大图.png')"
        class="d-block w-100"
        alt="Image 1"
      />
    </div>
    <div class="content-1">
      <div class="text-content-1">
        <div class="title-text-content-1">
          <h1>贡牌与西湖龙井</h1>
        </div>
        <div class="h2-text-content-1">
          <h2>
            杭州西湖龙井茶叶有限公司成立于 1984
            年，坐落于西湖龙井茶的故乡——杭州。三十多年来，公司一直坚持品质初心，为消费者制作高品质的西湖龙井茶。
          </h2>
          <div class="p-text-content-1">
            <p>
              旗下
              “贡”牌西湖龙井茶，以其独特风味和精湛工艺，赢得了行业高度认可。
              它不仅被选为上海世博会、G20 杭州峰会的指定用茶，还在这些国际舞台上
              大放异彩，成为中国与世界沟通的一张亮丽名片。品牌屡获
              “中国驰名商标”
              “中国名牌农产品”和“浙江名牌”殊荣，还是全国率先获准使用西湖龙井原产
              地域产品专用标志的品牌。2008 年，其制作技艺被国务院列为国家级非物
              质文化遗产。
            </p>
            <p>
              品牌以其优质的产品质量和卓越的客户服务，连续四年（2020-2023）在天
              猫西湖龙井茶类销量领先。同时，在全国拥有超过 300
              家销售门店，实现了
              线上线下的全面覆盖，为消费者提供了便捷的购买渠道。
            </p>
          </div>
        </div>
      </div>
      <div class="img-content-1">
        <img
          :src="require('@/assets/image/chinagongbrand/西湖龙井_中国贡牌.png')"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
    </div>
   
      <!--这里请用走马灯式轮播图，共3张，下方是写死的2个div，可以删掉，现在文字和图合并成图片了-->
    <div>
  <VueSlickCarousel
v-bind="settings"
class="content123" >
   
<div class="carousel-item">
            <img
              :src="require('@/assets/image/chinagongbrand/源头管控轮播1.png')"
             
             
            />
          </div>
          <div class="carousel-item">
            <img
              :src="require('@/assets/image/chinagongbrand/源头管控轮播2.png')"
              
            
            />
          </div>
          <div class="carousel-item">
            <img
              :src="require('@/assets/image/chinagongbrand/源头管控轮播3.png')"
             
             
            />
          </div>
</VueSlickCarousel>
      
</div>

    <div class="content-3">
      <div class="text-content-3">
        <h1>发展历程</h1>
      </div>
  
  
        <!-- 这里请用首页式的轮播图，共2张 -->
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img  :src= "require ('@/assets/image/chinagongbrand/历史1.png') " class="d-block w-100" alt="Carousel Image 1">
        </div>
        <div class="carousel-item">
          <img :src="require('@/assets/image/chinagongbrand/历史2.png')" class="d-block w-100" alt="Carousel Image 2">
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
    </div>
    <div class="content-4">
      <div class="text-content-4">
        <!-- 这里请用首页式的轮播图，共2张 -->
        <div class="title-text-content-4">
          <h1>品牌荣誉</h1>
        </div>
        
        <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img  :src= "require ('@/assets/image/chinagongbrand/品牌荣誉轮播1.png') " class="d-block w-100" alt="Carousel Image 1">
        </div>
        <div class="carousel-item">
          <img :src="require('@/assets/image/chinagongbrand/品牌荣誉轮播2.png')" class="d-block w-100" alt="Carousel Image 2">
        </div>
       
        
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

   
   
      </div>
      </div>
    
    </div>
  
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' 
export default {
  components: {

      VueSlickCarousel

  },
  data() {
    return {
      // 在这里定义你的数据
      imageList: [
        // 这里放图片
        require("@/assets/image/chinagongbrand/源头管控轮播1.png"),
        require("@/assets/image/chinagongbrand/源头管控轮播2.png"),
        require("@/assets/image/chinagongbrand/源头管控轮播3.png"),
        
      ],
      settings: {

          centerMode: true,
    centerPadding: '20px',
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    autoplay: true
  },
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
.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column; /* 垂直排列 */
  max-width: 100%;
}
.pad-content {
  width: 100%;
}
img {
  max-width: 100%; /* 图像宽度最大为 100% */
  height: auto; /* 自动调整高度以保持宽高比 */
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
.h2-text-content-1 {
  margin-top: 10%;
}
.p-text-content-1 {
  margin-top: 10%;
}
.text-content-1 {
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  height: auto; /* 设置高度 */
  margin-left: 6%;
  margin-right: 2%;
  height: auto;
}

.img-content-1 {
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  height: auto; /* 设置高度 */
  margin-left: 2%;
  margin-right: 6%;
  height: auto;
}

.content-2 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  display: flex;
  margin-top: 2%;
}


.p-content-2-left {
  margin-top: 5%;
}
.image-content-2-left {
  margin-top: 10%;
}
.title-content-2-right {
  margin-top: 5%;
  margin-bottom: 5%;
}
.content-3 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  margin-top: 2%;
  background-image: url("@/assets/image/chinagongbrand/content-3-bg.png"); /* 设置背景图 */
  background-size: cover; /* 使背景图覆盖整个 div */
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat; /* 不重复背景图 */
  padding-bottom: 3%;
}
.text-content-3 {
  width: 100%;
  text-align: left;
  padding: 5%;
  display: flex;
}
.img-content-3 {
  width: 100%;
  display: flex;
}
.image-content-3-1,
.image-content-3-2,
.image-content-3-3 {
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  padding: 10px; /* 内边距 */
  height: auto; /* 设置高度 */
  margin-left: 5%;
  margin-right: 5%;
  height: auto;
}
.content-4 {
  width: 100%;
  display: flex;
}
.text-content-4 {
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  height: auto; /* 设置高度 */
  margin-left: 6%;
  margin-right: 2%;
  height: auto;
}
.title-text-content-4 {
  margin-top: 5%;
  margin-bottom: 5%;
}
.img-content-4 {
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  height: auto; /* 设置高度 */
  margin-left: 2%;
  margin-right: 6%;
  height: auto;
  margin-top: 3%;
}





.content123 {
width: 2000px;
margin: 0 auto;
padding: 20px;
}

/* 每个图片项的样式 */
.carousel-item {
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
}

/* 控制图片的样式 */
.carousel-item img {
width: 1000px; /* 控制图片宽度 */
height: auto; /* 保持图片的纵横比 */
border-radius: 8px; /* 圆角效果 */
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 给图片加阴影 */
transition: transform 0.3s ease, opacity 0.3s ease; /* 图片的过渡效果 */
padding: 20px;
}
html, body {
max-width: 100%;
overflow-x: hidden;  /* 防止横向滚动条 */
}

* {
box-sizing: border-box;  /* 使得所有元素的宽度和高度计算时包含内边距和边框 */
}

img, video, iframe {
max-width: 100%;
height: auto;  /* 防止图片或其他媒体元素超出父容器 */
}
</style>