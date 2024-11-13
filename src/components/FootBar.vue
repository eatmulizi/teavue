<template>
  <div class="footer-container">
    <div class="footer-top">
      <img :src="footline" alt="footline" />
    </div>
    <div class="footer-content">
      <div
        class="footer-section"
        v-for="section in sections"
        :key="section.title"
      >
        <h2>{{ section.title }}</h2>
        <ul>
          <li
            v-for="item in section.items"
            :key="typeof item === 'string' ? item : item.alt"
          >
            <span v-if="typeof item === 'string'">{{ item }}</span>
            <img v-else :src="item.image" :alt="item.alt" />
            <!-- 渲染图像 -->
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>立即购买</h2>
        <ul class="buy-links">
          <!-- <li><img src="@/assets/jd.png" alt="JD"></li>
          <li><img src="@/assets/tmall.png" alt="Tmall"></li> -->
        </ul>
      </div>
      <div class="footer-logo">
        <img :src="companyLogo" alt="Longjing Tea Logo" />
      </div>
    </div>

    <div class="footer-bottom">
      <img :src="footline" alt="Longjing Tea Logo" />
    </div>
    <div class="footer-bottom-logo">
      <img :src="footlogo" alt="Longjing Tea Logo" />
    </div>
    <div class="beian">
      <p>贡牌西湖龙井茶官方网站 © ️版权所有 浙ICP备20003001号-1</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "贡牌西湖龙井",
          items: ["中国贡牌", "龙井贡源", "戚家传承", "国礼贡牌"],
        },
        {
          title: "产品中心",
          items: ["狮峰龙井系列", "西湖龙井系列", "龙井茶系列", "其他茗茶"],
        },
        {
          title: "招商加盟",
          items: ["加盟政策", "门店地图"],
        },
        {
          title: "媒体聚焦",
          items: ["新闻发布", "媒体报道", "社交媒体"],
        },
        {
          title: "联系我们",
          items: [
            "商务合作",
            "加入我们",
            {
              image: require("@/assets/image/public/wechat.png"),
              alt: "微信二维码",
            },
            {
              image: require("@/assets/image/public/douyin.png"),
              alt: "抖音二维码",
            }, // 添加图片对象
          ],
        },
      ],
      companyLogo: require("@/assets/image/public/logo-bottom.png"),
      footline: require("@/assets/image/public/bottom-line.png"),
      footlogo: require("@/assets/image/public/logo_group_bottom.png"),
    };
  },
};
</script>

<style scoped>
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
.footer-container {
  overflow: hidden;
  margin-top: 3%;
  margin-left: 6.5%;
  margin-right: 6.5%;
  margin-bottom: 5%;
  text-align: center;
  flex-direction: column; /* 垂直排列 */
}

.footer-content {
  margin-left: -2%;
  display: flex;
  justify-content: space-between; /* 水平分布 */
  padding-top: 5%;
  padding-bottom: 5%;
  width: 70%;
}
.footer-top {
  width: 100%;
}
/* 改的是列间距 */
.footer-section {
  text-align: left;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  flex: 1;
  padding-left: 3%;
}

.footer-section:last-child {
  border-right: none;
}

.footer-section h3 {
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 5%;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  color: #214815;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 18px;
}

.footer-section ul li:hover {
  color: #1e3815;
}

.footer-logo {
  overflow: auto;
  position: absolute;
  padding-left: 75%;
}

.footer-bottom {
  width: 100%;
  overflow: hidden;
  margin-bottom: 1%;
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
.footer-bottom-logo {
  margin-top: 2%;
  float: left;
}
.beian {
  margin-top: 2%;
  float: left;
  display: block; /* 确保是块级元素 */
  width: 100%; /* 占据整个宽度 */
}
</style>
