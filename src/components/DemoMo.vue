<template>
  <div class="container">
    <div class="image-container">
      <img :src="image" alt="Image" />
    </div>
    <div class="text-container" @wheel="onScroll">
      <div class="scrollable-content" :style="{ transform: `translateY(${scrollOffset}px)` }">
        <h1>标题</h1>
        <p>这里是一些文本内容。可以多加一些内容，确保可以滚动。</p>
        <p>更多的内容...</p>
        <p>还有更多内容...</p>
        <p>继续添加内容，直到超过容器的高度...</p>
        <p>这段文本用于测试滚动效果。</p>
        <p>再加几行内容...</p>
        <p>更多的内容...</p>
        <p>还有更多内容...</p>
        <p>继续添加内容，直到超过容器的高度...</p>
        <p>这段文本用于测试滚动效果。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('@/assets/lunbo1.jpg'), 
      scrolling: false,
    };
  },
  methods: {
    onScroll(event) {
      event.preventDefault(); 
      if (this.scrolling) return; // 防止重复滚动
      this.scrolling = true;

      const delta = event.deltaY > 0 ? -30 : 30; 
      this.scrollOffset += delta; 

      
      this.scrollOffset = Math.min(this.scrollOffset, 0); // 上限
      this.scrollOffset = Math.max(this.scrollOffset, -400); // 下限
      setTimeout(() => {
        this.scrolling = false; // 允许下一次滚动
      }, 20);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 750px;
}

.image-container {
  width: 50%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  width: 50%;
  height: 100%;
  overflow: hidden; /* 隐藏溢出内容 */
  position: relative;
}

.scrollable-content {
  transition: transform 0.2s ease; /* 平滑过渡 */
}
</style>
