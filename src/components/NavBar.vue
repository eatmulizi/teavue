<template>
  <nav class="navbar navbar-expand-lg navbar-light" :style="navbarStyle">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" @click.prevent="customFunction">
        <img
          :src="require('@/assets/brand.png')"
          alt="Brand"
          class="brand-img"
        />
      </router-link>
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
            <div class="dropdown-content" v-if="showDropdown">
              <router-link to="/page1" @click.native="hideDropdown">
                <div>
                  <img :src="require('@/assets/lunbo1.jpg')" alt="Image 1" />
                  <h4>国礼贡牌</h4>
                  <p>三百年戚家传承</p>
                </div>
              </router-link>
              <router-link to="/maps" @click.native="hideDropdown">
                <div>
                  <img :src="require('@/assets/lunbo1.jpg')" alt="Image 2" />
                  <h4>龙井贡源</h4>
                  <p>三百年戚家传承</p>
                </div>
              </router-link>
              <router-link to="/history" @click.native="hideDropdown">
                <div>
                  <img :src="require('@/assets/lunbo2.jpg')" alt="Image 3" />
                  <h4>戚家传承</h4>
                  <p>三百年戚家传承</p>
                </div>
              </router-link>
              <router-link to="/page4" @click.native="hideDropdown">
                <div>
                  <img :src="require('@/assets/lunbo3.jpg')" alt="Image 4" />
                </div>
              </router-link>
            </div>
          </li>
          <li>
            <router-link to="/product" class="nav-link" @click="hideDropdown">产品中心</router-link>
          </li>
          <li>
            <router-link to="/join" class="nav-link" @click="hideDropdown">招商加盟</router-link>
          </li>
          <li>
            <router-link to="/media" class="nav-link" @click="hideDropdown">媒体聚焦</router-link>
          </li>
          <li>
            <router-link to="/museum" class="nav-link" @click="hideDropdown">杭州西湖龙井博物馆</router-link>
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
      },
      showDropdown: false, // 控制下拉显示状态
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
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside); // 监听点击事件
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
  height: 80px;
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
  height: 500px; /* 固定高度 */
  padding: 20px; /* 内边距 */
  border-radius: 8px; /* 圆角 */
  background-color: rgba(255, 255, 255, 0.9); /* 背景颜色 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  z-index: 1000; /* 确保在其他内容之上 */
  overflow: auto; /* 如果内容超过高度，添加滚动条 */
  
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-between; /* 空间均匀分配 */
}

/* 每个链接的样式 */
.dropdown-content a {
  flex: 1; /* 每个链接占据相同的宽度 */
  text-align: center; /* 文本居中 */
  margin: 0 10px; /* 每个链接之间的间距 */
}

/* 下拉图片样式 */
.dropdown-content img {
  width: 100%; /* 设置为100%以便自适应父容器的宽度 */
  height: auto; /* 高度自适应，保持比例 */
  object-fit: cover; /* 保持图片比例 */
  margin-bottom: 10px; /* 图片与其他内容的间距 */
}

/* 下拉文本样式 */
.dropdown-content h4,
.dropdown-content p {
  color: #333; /* 文本颜色 */
  margin: 5px 0; /* 上下间距 */
}

body {
  padding-top: 100px; /* 预留给固定导航栏的空间，避免遮挡内容 */
}
</style>