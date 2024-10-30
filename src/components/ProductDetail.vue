<template>
    <div class="product-container">
      <div class="product-wrapper">
        <!-- 左侧产品图片 -->
        <div class="product-image">
          <img :src="require('@/assets/lunbo1.jpg')" alt="Product Image">
        </div>
  
        <!-- 右侧产品信息 -->
        <div class="product-info">
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
  
          <!-- 产品信息表格 -->
          <table>
            <tr>
              <th>产品说明</th>
              <th>产品信息</th>
              <th>注意事项</th>
            </tr>
            <tr>
              <td>
                <p>品类: <strong>西湖龙井</strong></p>
                <p>茶种: <strong>绿茶</strong></p>
                <p>保质期: <strong>365天</strong></p>
                <p>净含量: <strong>50g</strong></p>
              </td>
              <td>
                <p>茶叶等级: <strong>明前特级</strong></p>
                <p>种植产区: <strong>狮峰山</strong></p>
                <p>采摘时间: <strong>明前</strong></p>
                <p>制作工艺: <strong>炒青绿茶</strong></p>
              </td>
              <td>
                <p>包装材质: <strong>木质</strong></p>
                <p>内罐材质: <strong>铁罐</strong></p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </template>

  
  <script>
  export default {
    name: 'ProductDisplay',
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
  </style>
  