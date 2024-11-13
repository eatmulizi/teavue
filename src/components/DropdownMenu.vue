<template>
    <li class="nav-item">
      <a href="#" @click.prevent="toggleDropdown" class="nav-link">
        {{ title }}
      </a>
      <div class="dropdown-content" :class="{ show: showDropdown }">
        <div class="dropdown-items">
          <router-link
            v-for="item in dropdownData"
            :key="item.link"
            :to="item.link"
            @click.native="hideDropdown"
            class="dropdown-item"
          >
            <img :src="item.image" alt="Image" />
            <h3 class="navh3">{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </router-link>
        </div>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      dropdownData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        showDropdown: false // 控制下拉显示状态
      };
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown; // 切换显示状态
      },
      hideDropdown() {
        this.showDropdown = false; // 隐藏下拉框
      },
      handleClickOutside(event) {
        const dropdown = this.$el.querySelector('.dropdown-content');
        const toggleButton = this.$el.querySelector('.nav-link');
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