<template>
  <div class="image-container" @wheel="onScroll">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      alt="Image"
      class="full-screen-image"
      :class="{ 'fade-in': index <= currentVisibleIndex }"  
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count:0,
      images: [
        require('@/assets/qijia1.png'),
        require('@/assets/qijia2.png'),
        require('@/assets/qijia3.png'),
        require('@/assets/qijia4.png'),
      ],
      currentVisibleIndex: 0, // 当前可见的图片索引
      hasScrolled: false // 标记是否已滚动过
    };
  },
  methods: {
    onScroll(event) {
      // 检查滚动方向
      const delta = event.deltaY;
      
      this.count += delta;
      // 向下滚动，显示下一张图片
      if (this.count > 500 && this.currentVisibleIndex < this.images.length - 1) {
        this.count = 0
        this.currentVisibleIndex++; // 增加可见图片索引
      }
    }
  }
};
</script>

<style scoped>
.image-container {
  display: flex;
  flex-direction: column; /* 使图片竖向排列 */
  height: 90vh; /* 让容器占满屏幕高度 */
}

.full-screen-image {
  flex: 1; /* 每张图片均分屏幕宽度 */
  object-fit: cover; /* 确保图片以适合方式填充 */
  height: 100%; /* 图片高度撑满视口高度 */
  width: 100%; /* 图片宽度撑满父容器的宽度 */
  opacity: 0; /* 初始透明度为0 */
  transition: opacity 1s ease; /* 渐变效果 */
}

.fade-in {
  opacity: 1; /* 渐变出现时的透明度 */
}
</style>
