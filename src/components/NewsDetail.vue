<template>
  <div>
    <div v-if="images.length === 0">没有找到相关图片</div>
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" alt="新闻图片" />
    </div>
    <img
      src="@/assets/image/newsdetail/back.png"
      alt="返回"
      @click="goBack"
      style="cursor: pointer; width: 10%; height: auto"
    />
  </div>
</template>

<script>
export default {
  computed: {
    images() {
      const id = this.$route.params.id; // 获取传递的新闻 ID
      const imageMap = {
        1: [require("@/assets/image/newsdetail/1.png")],
        2: [require("@/assets/image/newsdetail/2.png")],
        3: [require("@/assets/image/newsdetail/3.png")],
      };

      return imageMap[id] || []; // 返回对应 ID 的图片数组，默认为空数组
    },
  },
  methods: {
    goBack() {
      this.$router.push("/news"); // 返回到新闻列表页
      window.scrollTo(0, 0); // 滚动到页面顶部
    },
  },
};
</script>

<style scoped>
img {
  width: 100%; /* 自适应宽度 */
  height: auto; /* 保持纵横比 */
  margin-bottom: 10px; /* 添加间距 */
}
</style>