/* eslint-disable */
<template>
  <div v-if="product">
    <div class="product-container">
      <div class="product-wrapper">
        <!-- 左侧产品图片 -->
        <div
          class="product-image"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
          @wheel="onImageWheel"
          :style="{ transform: 'translateY(' + imageOffset + 'px)' }"
        >
          <img :src="require('@/assets/产品1.png')" alt="Product Image" />
          <img :src="require('@/assets/产品2.png')" alt="Product Image" />
          <img :src="require('@/assets/产品3.png')" alt="Product Image" />
        </div>

        <!-- 右侧产品信息 -->
        <div
          class="product-info"
          :style="{ transform: 'translateY(' + contentOffset + 'px)' }"
        >
          <h1 class="product-title">狮峰龙井系列 · 精品</h1>
          <div class="product-specs-price">
            <p class="product-specs">规格: 礼盒 50g 5g*10</p>
            <p class="product-price">¥ 18000</p>
          </div>

          <!-- 产品描述 -->
          <p class="product-description-title">
            天下名茶数龙井，龙井上品在狮峰。
          </p>
          <p class="product-description">西湖龙井茶位列中国名茶之首，</p>
          <p class="product-description">
            西湖龙井茶素有“狮、龙、云、虎、梅”五大字号，
          </p>
          <p class="product-description">
            以狮峰龙井上品，且以“明前茶”为上乘珍品，外交国礼。
          </p>
          <p>&nbsp;</p>

          <!-- 分隔线 -->
          <div class="separator-line"></div>

          <div class="tab-container">
            <!-- 选项卡标题 -->
            <div class="tab-header">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                :class="{ active: activeTab === index }"
                @click="activeTab = index"
              >
                {{ tab }}
              </button>
            </div>

            <!-- 选项卡内容 -->
            <div class="tab-content">
              <div v-if="activeTab === 0" class="tab-pane"></div>
              <div v-else-if="activeTab === 1" class="tab-pane">
                <div class="info-row">
                  <div class="info-item">
                    <p>品名:<strong>西湖龙井</strong></p>
                  </div>
                  <div class="info-item">
                    <p>产地:<strong>绿茶</strong></p>
                  </div>
                  <div class="info-item">
                    <p>等级:<strong>明前A级</strong></p>
                  </div>
                </div>
                <div class="info-row">
                  <div class="info-item">
                    <p>净重:<strong>50g</strong></p>
                  </div>
                  <div class="info-item">
                    <p>包装:<strong>盒装</strong></p>
                  </div>
                  <div class="info-item">
                    <p>保质期:<strong>365天</strong></p>
                  </div>
                </div>
              </div>
              <div v-else class="tab-pane">
                <p>包装材质: <strong>木质</strong></p>
                <p>内罐材质: <strong>铁罐</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="show-more">探索更多</span>

    <div class="image-row">
      <div v-for="(imgSrc, index) in images" :key="index" class="image-item">
        <img
          :src="require(`@/assets/${imgSrc}`)"
          alt="Image"
          class="button-image"
        />
        <div class="image-caption">
          <p class="caption-bold">狮峰龙井系列·精品</p>
          <p class="caption-normal">礼盒 50g(5g*10) {{ index + 1 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
    
    <script>
/*     import axios from 'axios'; */

export default {
  data() {
    return {
      name: "",
      activeTab: 1,
      tabs: ["产品说明", "产品信息", "注意事项"],
      products: [],
      product: {}, // 用于存储产品数据
      imageOffset: 0, // 新增: 用于控制左侧图片的滚动位置
      infoContent: 0, // 新增: 用于控制右侧文字的滚动位置
      wholePageScroll: false,
      images: ["产品1.png", "产品2.png", "产品3.png"],

      contentOffset: 0,
      maxImageOffset: 0, // 图片滚动的最大偏移量
      minImageOffset: -2600,
    };
  },
  mounted() {
    // 在组件初始化时调用 API
  },

  methods: {
    onMouseEnter() {
      this.isImageHover = true;
    },

    // 鼠标离开左侧图片区域
    onMouseLeave() {
      this.isImageHover = false;
    },

    // 处理图片滚动
    onImageWheel(event) {
      if (this.isImageHover) {
        // 仅当鼠标悬停在左侧区域时滚动图片
        const delta = -event.deltaY;
        this.imageOffset += delta;
        if (this.imageOffset > this.maxImageOffset) {
          this.imageOffset = this.maxImageOffset;
        }
        if (this.imageOffset < this.minImageOffset) {
          this.imageOffset = this.minImageOffset;
        }
        event.preventDefault(); // 阻止默认滚动行为
      }
    },

    // 处理右侧内容滚动
    onContentWheel(event) {
      if (!this.isImageHover) {
        const delta = event.deltaY;
        this.contentOffset += delta;
      }
    },
  },
};
</script>
    
    <style scoped>
.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f6f6f6;
  width: 100vw; /* 撑满屏幕宽度 */
}

.product-wrapper {
  display: flex;
  width: 100%; /* 使内容横向填充满 */
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  gap: 50px; /* 左右内容的间距 */
}

.product-image {
  width: 50%; /* 左侧图片占一半宽度 */
  height: 1000px;
}

.product-image img {
  width: 100%;
  height: auto;
}

.product-info {
  width: 50%; /* 右侧信息占一半宽度 */
  padding: 20px;
}

.product-title {
  font-size: 40px;
  color: #000;
  font-weight: bold;
  /* margin-bottom: 10px; */
  text-align: left;
  margin-top: 200px;
}
.product-specs-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
}

.product-specs {
  font-size: 30px;
  color: #555;
  margin-bottom: 10px;
  font-weight: normal;
  text-align: left;
}

.product-price {
  font-size: 50px;
  color: #214815;
  font-weight: bold;
  text-align: right;
  margin-bottom: 10px;

  padding-bottom: 10px;
}

.separator-line {
  border-bottom: 1px solid;
  margin-top: 10px;
  margin-bottom: 20px;
}

.product-description-title {
  font-size: 20px;
  color: #000;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
}

.product-description {
  font-size: 20px;
  color: #666;
  line-height: 1.6;
  /* margin-bottom: 5px; */
  text-align: left;
}

.purchase-links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.purchase-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.purchase-button.tmall {
  background-color: #3da53d;
}

.purchase-button.jd {
  background-color: #4a4a4a;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  text-align: left;
  border: none;
}

th {
  font-weight: normal;
  background-color: transparent;
}

/* 表头下的细绿色线 */
tr:first-child th {
  border-bottom: 1px solid #3da53d;
}

/* 去除表格线 */
table,
th,
td {
  border: none;
}

td p {
  margin: 10px 0; /* 这里设置行间距 */
  line-height: 1.8; /* 让行间距更明显 */
  font-size: 20px;
}

p {
  margin: 0;
  line-height: 1.5;
}

strong {
  font-weight: bold;
}

.tab-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.tab-header {
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #ccc;
}
.tab-header button {
  flex: 1;
  padding: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;
}
.tab-header button.active {
  font-weight: bold;
  color: #42b983;
  border-bottom: 3px solid #42b983;
}
.tab-content {
  padding: 20px;
}
.tab-pane {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.image-row {
  display: flex;
  gap: 40px; /* 图片间距 */
  margin-bottom: 20px; /* 图片和文字间距 */
  justify-content: center;
}

.button-image {
  width: 400px;
  height: 400px;
  object-fit: cover;
}
/* 可能没啥用 */
.product-info {
  transition: transform 0.01s ease; /* 平滑过渡 */
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; /* 行间距 */
}

.info-item {
  flex: 1; /* 每个 item 占据相等的宽度 */
  margin: 0 10px; /* 每个 item 之间的间距 */
}

.info-item p {
  margin: 0; /* 去除默认的段落外边距 */
  font-size: 16px;
}
.caption-bold {
  font-weight: bold;
  font-size: 18px;
  color: #000;
}

.show-more {
  font-size: 35px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}
</style>
    