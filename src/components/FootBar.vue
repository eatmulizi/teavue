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
            <div class="image-container" v-else-if="item.images">
              <img
                v-for="(image, index) in item.images"
                :key="index"
                :src="image.image"
                :alt="image.alt"
                @click.stop="openModal(image)"
                style="cursor: pointer; width: 25%; height: auto; margin-right: 10px;"
              />
            </div>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h2>立即购买</h2>
        <ul class="buy-links">
          <img
            class="buy-jd"
            src="@/assets/image/public/jingdong.png"
            alt="JD"
          />
          <img src="@/assets/image/public/tianmao.png" alt="Tmall" />
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

    <ModalBox
      :isVisible="isModalVisible"
      :qrCode="modalData.qrCode"
      @close="closeModal"
    />
  </div>
</template>

<script>
import ModalBox from "./ModalBox.vue";

export default {
  components: {
    ModalBox,
  },
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
              images: [ // 确保使用 images 数组
                {
                  image: require("@/assets/image/public/wechat.png"), // 确保路径正确
                  alt: "微信二维码",
                  qrCode: require("@/assets/image/public/wechatQR.png"),
                },
                {
                  image: require("@/assets/image/public/douyin.png"), // 确保路径正确
                  alt: "抖音二维码",
                  qrCode: require("@/assets/image/public/dyQR.png"),
                },
              ]
            },
          ],
        },
      ],
      companyLogo: require("@/assets/image/public/logo-bottom.png"),
      footline: require("@/assets/image/public/bottom-line.png"),
      footlogo: require("@/assets/image/public/logo_group_bottom.png"),
      isModalVisible: false,
      modalData: {
        qrCode: "",
      },
    };
  },
  methods: {
    openModal(item) {
      this.modalData.qrCode = item.qrCode;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
.image-container {
  display: flex; /* 使用 Flexbox 使图像横向排列 */
  align-items: center; /* 垂直居中对齐 */
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
  width: 100%;
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
  font-size: 18px;
  width: auto;
}

.footer-section ul li:hover {
  color: #1e3815;
}

.footer-logo {
  margin-left: 10%; /* 使用 margin 进行位置调整 */
  display: block; /* 确保块级元素 */
  overflow: visible; /* 确保不遮盖 */
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
.buy-jd {
  width: 50%;
  float: left;
  margin-left: -20%;
}
</style>
