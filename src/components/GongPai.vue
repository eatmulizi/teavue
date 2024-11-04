<template>
  <div class="page-content">
    <!-- 轮播图 -->
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            :src="require('@/assets/image/homepage/homepage-pad.png')"
            class="d-block w-100"
            alt="Carousel Image 1"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('@/assets/image/homepage/homepage-pad.png')"
            class="d-block w-100"
            alt="Carousel Image 2"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require('@/assets/image/homepage/homepage-pad.png')"
            class="d-block w-100"
            alt="Carousel Image 3"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="middile-content">
      <div class="content-part">
        <div class="content-words">
          <div class="title">
            <h3>西湖龙井 · 中国贡牌</h3>
          </div>
          <div class="description">
            <span>中国龙井先锋者，坚守匠心传承茶文化</span>
          </div>
        </div>
        <div class="image">
          <img
            :src="require('@/assets/image/homepage/content-1.png')"
            alt="Image 4"
            class="gallery-image"
          />
        </div>
      </div>
      <div class="content-part">
        <div class="content-words">
          <div class="title">
            <h3>送礼送国礼</h3>
          </div>
          <div class="description">
            <span>国礼品质值得信赖</span>
          </div>
        </div>
        <div class="image">
          <img
            :src="require('@/assets/image/homepage/content-2.png')"
            alt="Image 4"
            class="gallery-image"
          />
        </div>
      </div>
      <div class="content-part2">
        <div class="content-part2-words">
          <h3>媒体聚焦</h3>
        </div>
        <div class="content-part2-image1">
          <img
            :src="require('@/assets/image/homepage/content-3-1.png')"
            alt="Image 4"
            class="gallery-image"
          />
          <div class="content-part2-title">
            <h4>杭州市副市长王宏一行莅临贡牌调研西湖龙井茶开采情况</h4>
          </div>
          <div class="content-part2-description">
            <span>正是一年春茶季，又是一年茶忙节。</span>
            <span>2020年3月16日，王宏副市长一行人莅临我杭州西湖龙</span>
            <span>井茶叶有限公司对西湖龙井茶情况进行调研指导工作。</span>
          </div>
        </div>
        <div class="content-part2-image2">
          <img
            :src="require('@/assets/image/homepage/content-3-2.png')"
            alt="Image 4"
            class="gallery-image"
          />
          <div class="content-part2-title">
            <h4>杭州市副市长王宏一行莅临贡牌调研西湖龙井茶开采情况</h4>
          </div>
          <div class="content-part2-description">
            <span>正是一年春茶季，又是一年茶忙节。</span>
            <span>2020年3月16日，王宏副市长一行人莅临我杭州西湖龙</span>
            <span>井茶叶有限公司对西湖龙井茶情况进行调研指导工作。</span>
          </div>
        </div>
        <div class="content-part2-image3">
          <img
            :src="require('@/assets/image/homepage/content-3-3.png')"
            alt="Image 4"
            class="gallery-image"
          />
          <div class="content-part2-title">
            <h4>杭州市副市长王宏一行莅临贡牌调研西湖龙井茶开采情况</h4>
          </div>
          <div class="content-part2-description">
            <span>正是一年春茶季，又是一年茶忙节。</span>
            <span>2020年3月16日，王宏副市长一行人莅临我杭州西湖龙</span>
            <span>井茶叶有限公司对西湖龙井茶情况进行调研指导工作。</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
  <script>
export default {
  name: "ImageCarousel",
};
</script>
  
  <style scoped>
.page-content {
  text-align: center;
  margin-top: 20px;
}
.content-words {
  margin-top: 50px;
  margin-bottom: 25px;
}
.middile-content img{
  width:82.5%;
}
.content-part{
  width:100%;
}
.content-part2 {
  width: 88%;
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  justify-content: center;
  margin: 0 auto; /* 上下为0，左右自动居中 */
}
.content-part2-words {
  margin-top: 50px;
  margin-bottom: 25px;
  flex: 0 0 100%; /* 第一个框占满整行 */
}

.content-part2-image1,
.content-part2-image2,
.content-part2-image3 {
  flex: 1; /* 剩下的框均分剩余空间 */
  min-width: 200px; /* 最小宽度 */
}
.content-part2-title{
  text-align: left;
}
.content-part2-title h4{
  width: 80%;
  margin-left:10%;
}
.content-part2-description{
  width: 80%;
  text-align: left;
}
.content-part2-description span{
  width: 100%;
  display: block;
  margin-left:10%;
}
.carousel-inner img {
  object-fit: cover; /* 图片自动填充裁剪 */
  margin-top: 0; /* 紧贴上方 */
}
img {
    max-width: 100%; /* 图像宽度最大为 100% */
    height: auto; /* 自动调整高度以保持宽高比 */
}
.vertical-images {
  display: flex;
  flex-direction: column;
}
.vertical-images img {
  width: 100%; /* 图片宽度填满 */
  /* height: 33.33vh; 每张图片占屏幕高度的三分之一 */
  object-fit: cover;
}
</style>