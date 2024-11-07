<template>
  <!-- @wheel.prevent="onScroll"  要滚轮特效就在 vif 后面加上这个 -->
  
  <div v-if="product">
    <div class="product-container"  >
      <div class="product-wrapper">
        <!-- 左侧产品图片 -->
        <div class="product-image" :style="{ transform: 'translateY(' + imageOffset + 'px)' }">
          <img :src="require('@/assets/lunbo1.jpg')" alt="Product Image">
          <img :src="require('@/assets/lunbo2.jpg')" alt="Product Image">
          <img :src="require('@/assets/lunbo3.jpg')" alt="Product Image">
        </div>
  
        <!-- 右侧产品信息 -->
        <div class="product-info" :style="{ transform: 'translateY(' + contentOffset + 'px)' }">
          <h1 class="product-title">狮峰龙井系列 · 精品</h1>
          <div class="product-specs-price">
            <p class="product-specs">规格: 礼盒 50g 5g*10</p>
            <p class="product-price">¥ 18000</p>
          </div>
  
          <!-- 产品描述 -->
          <p class="product-description-title">天下名茶数龙井，龙井上品在狮峰。</p>
          <p class="product-description">
            西湖龙井茶位列中国名茶之首，
          </p>
          <p class="product-description">
           西湖龙井茶素有“狮、龙、云、虎、梅”五大字号，
          </p>
          <p class="product-description">
            以狮峰龙井上品，且以“明前茶”为上乘珍品，外交国礼。
          </p>
  
          <!-- 购买链接 -->
          <div class="purchase-links">
            <button class="purchase-button tmall">前往天猫购买</button>
            <button class="purchase-button jd">前往京东购买</button>
          </div>
  
          <!-- 分隔线 -->
          <div class="separator-line"></div>


          <div class="tab-container">
    <!-- 选项卡标题 -->
    <div class="tab-header">
      <button 
        v-for="(tab, index) in tabs" 
        :key="index" 
        :class="{ active: activeTab === index }" 
        @click="activeTab = index">
        {{ tab }}
      </button>
    </div>

    <!-- 选项卡内容 -->
    <div class="tab-content">
      <div v-if="activeTab === 0" class="tab-pane">
        
      </div>
      <div v-else-if="activeTab === 1" class="tab-pane">
        <p><strong>品名:</strong> {{product.name}}</p>
        <p><strong>产地:</strong> 绿茶</p>
        <p><strong>等级:</strong> 明前A级</p>
        <p><strong>净重:</strong> 绿茶</p>
        <p><strong>包装:</strong> 西湖龙井</p>
        <p><strong>保质期:</strong> 绿茶</p>
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

    <div class="image-row">
        <img v-for="(imgSrc, index) in images" :key="index" :src="require(`@/assets/${imgSrc}`)" alt="Image" class="button-image" />
      </div>


    <div class="button-container" >
      <button class="show-more">
        探索更多
      </button>
  </div>
  </div>
  </template>

  
  <script>
  import axios from 'axios';
  export default {
    props:['name'],
    
    data() {
    return {
      name: '',
      activeTab: 1,
      tabs: ['产品说明', '产品信息', '注意事项'],
      products : [],
      product: {}, // 用于存储产品数据
      imageOffset: 0, // 新增: 用于控制左侧图片的滚动位置
      infoOffset: 0, // 新增: 用于控制右侧文字的滚动位置
      wholePageScroll: false,
      images: ["产品1.png", "产品2.png", "产品3.png"], 
    };
  },
  mounted() {
    // 在组件初始化时调用 API
    this.imageOffset = 0;
    this.infoOffset = 0;
    this.name = this.$route.params.name;
    console.log(this.name);
   
     this.fetchProductData(this.name);

    console.log(this.product);
    window.addEventListener("scroll", this.onScroll);
    
  },
  methods: {
    async fetchProductData(name) {
      try {
        const response = await axios.get(`http://localhost:3000/api/search`, {
          params: { name }
        });
        this.products = response.data; // 保存收到的数据
        this.product = this.products[0]

        console.log(this.products); // 打印收到的数据
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    },
// 滚轮版本1
    // onScroll(event) {
    //   if (this.scrolling) return; // 防止重复滚动
    //   this.scrolling = true;

    //   const delta = event.deltaY; // 获取滚动的方向和速度
      

    //   //delta 的值代表什么
      
    //   // 确保图片滚动到一定程度后再滚动右侧文字
    //   if (this.imageOffset <= -1000) { // 这里的200可以根据需要调整
    //     this.infoOffset -= delta; // 更新右侧文字的滚动位置
         
    //   }if(this.imageOffset >= -1000 && delta >0 ){
    //     this.imageOffset -= delta; // 更新左侧图片的滚动位置
    //   }
    //   if (this.infoOffset<= -200) {

    //   }
    //   if(this.imageOffset >=0){
    //     this.imageOffset = 0
    //   }
    //   if(this.infoOffset>=0 &&this.imageOffset <0 && delta >0){
    //     this.infoOffset = 0
    //   }

      
    //   console.log(this.imageOffset,this.infoOffset)
      
    //   // 允许滚动的延迟
    //   setTimeout(() => {
    //     this.scrolling = false;
    //   }, 20); // 200毫秒后允许再次滚动
    // }
    // 滚轮版本2
    onScroll() {
      const scrollY = window.scrollY;
      if (scrollY >= 2000) {
        // 超过1000px后，整体滚动
        this.wholePageScroll = true;
        this.imageOffset = scrollY;
        this.contentOffset = scrollY;
      } else {
        // 在1000px以下时，恢复左侧先滚动效果
        this.wholePageScroll = false;
        this.imageOffset = scrollY *0.1;  // 左侧滚动更慢
         this.contentOffset = scrollY;
      }
    }
  ,
  
  }

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
  border-bottom: 3px solid #3da53d;
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

th, td {
   
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
table, th, td {
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


.show-more {

padding: 24px 36px;
font-size: 20px;
background-color: white;
color: black;
border: 1px solid black;
border-radius: 4px;
cursor: pointer;
max-width: 200px;
}
.button-container {
display: flex;
justify-content: center;
margin-top: 30px;
/* margin-left: 300px; */
}
.show-more:hover {
background-color: #f2f2f2;
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
  </style>
  