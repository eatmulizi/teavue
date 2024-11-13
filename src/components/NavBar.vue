<template>
  <nav class="navbar navbar-expand-lg navbar-light" :style="navbarStyle">
    <div class="container-fluid">
      <div id="logo_group">
        <router-link
          class="navbar-brand"
          to="/"
          @click.prevent="customFunction"
        >
          <img
            :src="require('@/assets/image/public/logo_group.png')"
            alt="Brand"
          />
        </router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <DropdownMenu title="贡牌西湖龙井" :dropdownData="GongPaidropdownData"/>
          </li>
          <li class="nav-item">
            <DropdownMenu title="产品中心" :dropdownData="ProductdropdownData"/>
          </li>
          <li>
            <router-link to="/join" class="nav-link" @click="hideDropdown"
              >招商加盟</router-link
            >
          </li>
          <li class="nav-item">
            <DropdownMenu title="媒体聚焦" :dropdownData="MediadropdownData"/>
          </li>
          <li>
            <img
            :src="require('@/assets/image/public/shoppingcart-ico.png')"
            alt="Brand"
          />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import DropdownMenu from './DropdownMenu.vue'; // 引入下拉框组件

export default {
  components: {
    DropdownMenu
  },
  data() {
    return {
      navbarStyle: {
        backgroundColor: "#214815",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "999",
        height: "100px"
      },
      GongPaidropdownData: [
        { name: '中国贡牌', link: '/chinagongbrand', image: require('@/assets/image/public/菜单栏1.png'), description: '匠心铸茶 经典传承' },
        { name: '龙井贡源', link: '/maps', image: require('@/assets/image/public/菜单栏2.png'), description: '西湖之域 龙井正宗' },
        { name: '戚家传承', link: '/QiJia', image: require('@/assets/image/public/菜单栏3.png'), description: '百年传承 非遗技艺' },
        { name: '国礼贡牌', link: '/nationalgift', image: require('@/assets/image/public/菜单栏4.png'), description: '国礼尊荣 盛誉八方' }
      ],
      ProductdropdownData: [
        { name: '狮峰龙井系列', link: '/', image: require('@/assets/image/public/菜单1.png'), description: '狮峰茶韵 至臻之选' },
        { name: '西湖龙井系列', link: '/', image: require('@/assets/image/public/菜单2.png'), description: '西湖之域 龙井正宗' },
        { name: '龙井茶系列', link: '/', image: require('@/assets/image/public/菜单3.png'), description: '龙井好茶 经典之味' },
        { name: '其他茗茶', link: '/', image: require('@/assets/image/public/菜单4.png'), description: '茶韵多元 特色之魅' }
      ],
      MediadropdownData: [
        { name: '', link: '', image: require('@/assets/image/public/null.png'), description: '' },
        { name: '新闻发布', link: '', image: require('@/assets/image/public/新闻菜单1.png'), description: '品牌动态 媒体聚焦' },
        { name: '社交媒体', link: '', image: require('@/assets/image/public/新闻菜单2.png'), description: '联系我们' },
        { name: '', link: '', image: require('@/assets/image/public/null.png'), description: '' }
      ],
    };
  },
  methods: {
    hideDropdown() {
      // 处理隐藏逻辑
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Heavy", sans-serif;
  font-weight: 900; /* 使用 Heavy 字体 */
  font-size: 25px;
}
h2 {
  font-family: "Bold", sans-serif;
  font-weight: 700; /* 使用 Bold 字体 */
  font-size: 25px;
}
h3 {
  font-family: "Medium", sans-serif;
  font-weight: 600; /* 使用 Medium 字体 */
  font-size: 20px;
  color: #214815;
}
p {
  letter-spacing: 0.08em;
  line-height: 1.8;
  font-family: "Light";
}
.navbar-brand {
  font-size: 30px;
  color: #e9d48d;
}
.navbar-brand img {
  pointer-events: none;
  height: 50px;
}
.navh3 {
  margin-top: 3%;
}
#logo_group {
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
}

/* 链接样式 */
.nav-link { 
  color: #fffaf0 !important; /* 链接颜色 */
  font-size: 18px;
  margin-right: 30px; /* 链接间距 */
  text-decoration: none !important;
  transition: color 0.3s;
}
.nav-link:hover {
  color:#ffd700 !important; /* 悬停时颜色 */
}

/* 下拉内容样式 */
.dropdown-content {
  position: absolute; /* 使用绝对定位 */
  top: 100%; /* 距离导航项底部 */
  left: 0; /* 从左侧开始 */
  width: 100%; /* 设置为100%以适应父元素 */
  max-height: 0; /* 初始状态下的最大高度为0 */
  padding: 0; /* 内边距 */
  background-color: rgb(255, 255, 255); /* 背景颜色 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  z-index: 1000; /* 确保在其他内容之上 */
  overflow: hidden; /* 隐藏溢出内容 */
  transition: max-height 0.3s ease-in-out; /* 添加动画效果 */
}

/* 当下拉内容显示时 */
.dropdown-content.show {
  max-height: 600px; /* 设置为一个合理的高度 */
}

/* 下拉项样式 */
.dropdown-items {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 均匀分布 */
  padding: 10px; /* 内边距 */
}

.dropdown-item {
  flex: 1; /* 每个链接占据相同的宽度 */
  text-align: center; /* 文本居中 */
  margin: 25px 25px; /* 每个链接之间的间距 */
}

.dropdown-content img {
  width: 100%; /* 设置为100%以便自适应父容器的宽度 */
  height: auto; /* 高度自适应，保持比例 */
  object-fit: cover; /* 保持图片比例 */
  margin-bottom: 5px; /* 图片与文本的间距 */
}

/* 下拉文本样式 */
.dropdown-content h4,
.dropdown-content p {
  color: #333; /* 文本颜色 */
  margin: 5px 0; /* 上下间距 */
}
img {
  max-width: 100%; /* 图像宽度最大为 100% */
  height: auto; /* 自动调整高度以保持宽高比 */
}
body {
  padding-top: 100px; /* 预留给固定导航栏的空间，避免遮挡内容 */
}
</style>