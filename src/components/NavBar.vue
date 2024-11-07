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
            <a href="#" @click.prevent="toggleDropdown" class="nav-link">
              贡牌西湖龙井
            </a>
            <div class="dropdown-content" :class="{ show: showDropdown }">
              <div class="dropdown-items">
                <router-link
                  to="/nationalgift"
                  @click.native="hideDropdown"
                  class="dropdown-item"
                >
                  <img :src="require('@/assets/image/public/chinatea-null.png')" alt="Image 1" />
                  <h4>中国贡牌</h4>
                  <p>匠心铸茶 经典传承</p>
                </router-link>
                <router-link
                  to="/maps"
                  @click.native="hideDropdown"
                  class="dropdown-item"
                >
                  <img :src="require('@/assets/image/public/chinatea-null.png')" alt="Image 2" />
                  <h4>龙井贡源</h4>
                  <p>西湖之域 龙井正宗</p>
                </router-link>
                <router-link
                  to="/QiJia"
                  @click.native="hideDropdown"
                  class="dropdown-item"
                >
                  <img :src="require('@/assets/image/public/chinatea-null.png')" alt="Image 3" />
                  <h4>戚家传承</h4>
                  <p>百年传承 非遗技艺</p>
                </router-link>
                <router-link
                  to="/page4"
                  @click.native="hideDropdown"
                  class="dropdown-item"
                >
                  <img :src="require('@/assets/image/public/chinatea-null.png')" alt="Image 4" />
                  <h4>国礼贡牌</h4>
                  <p>国礼尊荣  盛誉八方</p>
                </router-link>
              </div>
            </div>
          </li>
          <li>
            <router-link to="/product" class="nav-link" @click="hideDropdown"
              >产品中心</router-link
            >
          </li>
          <li>
            <router-link to="/join" class="nav-link" @click="hideDropdown"
              >招商加盟</router-link
            >
          </li>
          <li>
            <router-link to="/media" class="nav-link" @click="hideDropdown"
              >媒体聚焦</router-link
            >
          </li>
          <li>
            <router-link to="/museum" class="nav-link" @click="hideDropdown"
              >杭州西湖龙井博物馆</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarStyle: {
        backgroundColor: "#214815",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "999",
        height:"100px"
      },
      showDropdown: false, // 控制下拉显示状态
      dropdownData: [] // 用于存储下拉数据
    };
  },
  methods: {
    customFunction() {
      // 自定义函数逻辑
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown; // 切换显示状态
    },
    hideDropdown() {
      this.showDropdown = false; // 隐藏下拉框
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector('.dropdown-content');
      const toggleButton = this.$el.querySelector('.nav-link'); // 获取下拉按钮
      if (this.showDropdown && !dropdown.contains(event.target) && !toggleButton.contains(event.target)) {
        this.hideDropdown(); // 点击外部区域收起下拉框
      }
    },
    loadDropdownData() {
      // 这里可以进行异步请求数据
      // 例如，使用 fetch 或 axios 请求数据
      this.dropdownData = [
        { name: '内容 1', link: '/chinagongbrand' },
        { name: '内容 2', link: '/maps' },
        { name: '内容 3', link: '/QiJia' },
        { name: '内容 4', link: '/page4' }
      ];
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside); // 监听点击事件
    this.loadDropdownData(); // 组件加载时预加载数据
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside); // 清理监听
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 30px;
  color: #e9d48d;
}
.navbar-brand img {
  pointer-events: none;
  height: 50px;
}
#logo_group{
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
}

/* 链接样式 */
.nav-link {
  color: #ffd700 !important; /* 链接颜色 */
  font-size: 18px;
  margin-right: 30px; /* 链接间距 */
  text-decoration: none !important;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #fffaf0 !important; /* 悬停时颜色 */
}

/* 下拉内容样式 */
.dropdown-content {
  position: absolute; /* 使用绝对定位 */
  top: 100%; /* 距离导航项底部 */
  left: 0; /* 从左侧开始 */
  width: 100%; /* 设置为100%以适应父元素 */
  max-height: 0; /* 初始状态下的最大高度为0 */
  padding: 0; /* 内边距 */
  border-radius: 8px; /* 圆角 */
  background-color: rgba(255, 255, 255, 0.9); /* 背景颜色 */
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
  margin: 0 10px; /* 每个链接之间的间距 */
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