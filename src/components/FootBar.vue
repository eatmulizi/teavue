<template>
  <div class="footer-container">
    <div class="footer-content">
      <div
        class="footer-section"
        v-for="section in sections"
        :key="section.title"
      >
        <h3>{{ section.title }}</h3>
        <ul>
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>立即购买</h3>
        <ul class="buy-links">
          <!-- <li><img src="@/assets/jd.png" alt="JD"></li>
          <li><img src="@/assets/tmall.png" alt="Tmall"></li> -->
        </ul>
      </div>
      <div class="footer-logo">
      <img :src="companyLogo" alt="Longjing Tea Logo"/>
    </div>
    </div>

    <div class="footer-bottom">
      <img :src="footline" alt="Longjing Tea Logo"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: '贡牌西湖龙井',
          items: ['中国贡牌', '龙井贡源', '戚家传承', '国礼贡牌']
        },
        {
          title: '产品中心',
          items: ['狮峰龙井系列', '西湖龙井系列', '龙井茶系列', '其他茗茶']
        },
        {
          title: '招商加盟',
          items: ['加盟政策', '门店地图']
        },
        {
          title: '媒体聚焦',
          items: ['新闻发布', '媒体报道', '社交媒体']
        },
        {
          title: '联系我们',
          items: ['商务合作', '加入我们']
        }
      ],
      companyLogo: require('@/assets/companylog.png'),
      footline: require('@/assets/bottomline.png')
    };
  }
}
</script>

<style scoped>
.footer-container {
  padding: 20px 0;
  text-align: center;
  width: 66.6%;
  margin-left: 50px;
}

.footer-content {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 20px;
}
/* 改的是列间距 */
.footer-section {
  text-align: left;
  border-right: 1px solid rgba(0, 0, 0, 0.5);;
  padding-right: 100px;
  margin-right: 30px;
}

.footer-section:last-child {
  border-right: none;
}

.footer-section h3 {
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 40px;
}

.footer-section ul {
  list-style: none;
  padding: 0;

}

.footer-section ul li {
  color: #214815;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 24px;
}

.footer-section ul li:hover {
  color: #1e3815;
}

.footer-logo {
  position: absolute;
  margin-top: -40px;
  right: 450px; /* 设置为右侧对齐 */
  width: 50px; /* 调整图片大小 */
  height:40px;
}

.footer-bottom {
  height: 10px;
}

.buy-links {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.buy-links img {
  max-width: 80px;
  cursor: pointer;
}

.buy-links img:hover {
  opacity: 0.8;
}
</style>
