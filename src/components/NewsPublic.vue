<template>
  <div class="news-page">
  <!-- 新闻发布部分 -->
  <section class="news-section">
    <h2 class="section-title">新闻发布</h2>
    <div class="news-grid" :key="$route.fullPath"> <!-- 添加动态 key -->
      <div
        class="news-item"
        v-for="(news, index) in recentNews"
        :key="index"
        @click="goToDetail(news.id)"
        style="cursor: pointer;"
      >
        <img :src="news.image" alt="News Image" class="news-image" />
        <h3 class="news-title">{{ news.title }}</h3>
        <p class="news-content">{{ news.content }}</p>
      </div>
    </div>
  </section>

    <!-- 历史资讯部分 -->
    <section class="history-section">
      <h2 class="section-title">历史资讯</h2>
      <div class="history-list">
        <div class="history-item" v-for="(history, index) in historyNews" :key="index">
          <img :src="history.image" alt="History Image" class="history-image" />
          <div class="history-content">
            <p class="history-date">{{ history.date }}</p>
            <h3 class="history-title">{{ history.title }}</h3>
            <p class="history-description">{{ history.content }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 模拟数据
      recentNews: [
        { id: 1, 
          image: require('@/assets/image/news/content-new-1.png'),
          title: '杭州市副市长王宏一行在临溪南调研茶产业发展情况',
          content: '正是一年春茶季，又是一年茶事忙。2020年3月16日，副市长带队...',
        },
        { id: 2, 
          image: require('@/assets/image/news/content-new-2.png'),
          title: '杭州市副市长王宏一行在临溪南调研茶产业发展情况',
          content: '正是一年春茶季，又是一年茶事忙。2020年3月16日，副市长带队...',
        },
        { id: 3, 
          image: require('@/assets/image/news/content-new-3.png'),
          title: '杭州市副市长王宏一行在临溪南调研茶产业发展情况',
          content: '正是一年春茶季，又是一年茶事忙。2020年3月16日，副市长带队...',
        },
      ],
      historyNews: [
        { id: 1,
          image:require('@/assets/image/news/content-new-1.png'),
          date: '2020.03.16',
          title: '杭州市副市长王宏一行在临溪南调研茶产业发展情况',
          content: '正是一年春茶季，又是一年茶事忙。2020年3月16日，副市长带队...',
        },
        { id: 2,
          image: require('@/assets/image/news/content-new-1.png'),
          date: '2020.03.16',
          title: '杭州市副市长王宏一行在临溪南调研茶产业发展情况',
          content: '正是一年春茶季，又是一年茶事忙。2020年3月16日，副市长带队...',
        },
      ],
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'NewsDetail', params: { id } }); // 导航到详情页并传递 ID
    },
  },
};
</script>

<style scoped>
.news-page {
  padding: 40px 20px; /* 顶部留空，左右留白 */
  background-color: #f5f2ea;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: left; /* 标题靠左对齐 */
}

.news-section {
  max-width: 1500px; /* 缩小新闻发布部分宽度 */
  margin: 0 auto 40px; /* 水平居中，底部留间距 */
}

.news-grid {
  display: flex;
  gap: 16px;
}

.news-item {
  flex: 1;
  text-align: center;
}

.news-image {
  width: 100%;
  height: auto;
  margin-bottom: 12px;
}

.news-title {
  font-size: 16px; /* 调小标题字体 */
  font-weight: bold;
  margin-bottom: 8px;
}

.news-content {
  font-size: 14px;
  color: #666;
}

.history-section {
  max-width: 1500px; /* 限制历史资讯部分宽度 */
  margin: 0 auto; /* 水平居中 */
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history-item {
  display: flex;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.history-image {
  width: 150px;
  height: auto;
  margin-right: 16px;
}

.history-content {
  display: flex;
  flex-direction: column;
}

.history-date {
  font-size: 14px;
  color: #999;
  margin-bottom: 4px;
}

.history-title {
  font-size: 16px; /* 调小历史资讯标题字体 */
  font-weight: bold;
  margin-bottom: 8px;
}

.history-description {
  font-size: 14px;
  color: #666;
}
</style>


<!-- require('@/assets/image/news/content-new-1.png'), -->