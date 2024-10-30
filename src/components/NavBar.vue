<template>
  <nav class="navbar navbar-expand-lg navbar-light" :style="navbarStyle">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" @click.prevent="customFunction">
        <img :src="require('@/assets/brand.png')" alt="Brand" class="brand-img">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown-hover">
      <router-link to="/home" class="nav-link">贡牌西湖龙井</router-link>
      <div class="dropdown-content">
      <router-link to="/page1"><img :src="require('@/assets/lunbo1.jpg')" alt="Image 1">
      <h4>国礼贡牌</h4>
                <p>三百年戚家传承</p>
              </router-link>
              <router-link to="/maps"><img :src="require('@/assets/lunbo1.jpg')" alt="Image 2">
                <h4>龙井贡源</h4>
                <p>三百年戚家传承</p>
              </router-link>
              <router-link to="/history"><img :src="require('@/assets/lunbo2.jpg')" alt="Image 3">
                <h4>戚家传承</h4>
                <p>三百年戚家传承</p>
              </router-link>
              <router-link to="/page4"><img :src="require('@/assets/lunbo3.jpg')" alt="Image 4"></router-link>
            </div>
          </li>
      <li><router-link to="/product" class="nav-link">产品中心</router-link></li>
      <li><router-link to="/join" class="nav-link">招商加盟</router-link></li>
      <li><router-link to="/media" class="nav-link">媒体聚焦</router-link></li>
      <li><router-link to="/museum" class="nav-link">杭州西湖龙井博物馆</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      brandImage: require('@/assets/logo.png'),
      navbarStyle: {
        backgroundColor: '#214815',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '999'
      },
      navItems: [
        { label: '贡牌西湖龙井', page: 'gongpai' },
        { label: '产品中心', page: 'product' },
        { label: '招商加盟', page: 'join' },
        { label: '媒体聚焦', page: 'media' },
        { label: '杭州西湖龙井博物馆', page: 'museum' }
      ],
      activePage: '' // 当前激活的页面
    };
  },
  methods: {
    loadPage(page) {
      this.activePage = page;
      this.$emit('pageChange', page);
    },
    getNavLinkStyle(page) {
      return {
        fontSize: '18px',
        color: '#E9D48D',
        fontWeight: this.activePage === page ? 'bold' : 'normal'
      };
    }
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 30px;
  color: #E9D48D;
}
.navbar-brand img {
  pointer-events: none;
  height: 80px;
}
/* 链接样式 */
.nav-link {
  color: #FFD700 !important; /* 链接颜色 */
  font-size: 18px;
  margin-right: 30px; /* 链接间距 */
  text-decoration: none !important;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #FFFAF0 !important; /* 悬停时颜色 */
}

/* 悬停效果的下拉内容 */
.dropdown-hover {
  position: relative;
}
.dropdown-hover .dropdown-content {
  display: none;
  position: fixed; /* 改为固定定位 */
  bottom: 67%; /* 距离屏幕底部一定距离 */
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  gap: 20px;
  justify-content: center;
  z-index: 1000; /* 确保在其他内容之上 */
}
/* .dropdown-hover .dropdown-content {
  display: none;
  position: absolute;
  transform: translateX(-50%);
  top: 100%;
  left: 10%; 

  width: 80vw; 
  
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.3); 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
  justify-content: center;
} */
.dropdown-hover:hover .dropdown-content {
  display: flex;
}

/* 下拉图片样式 */
.dropdown-content img {
  width: 500px;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
  margin-bottom: 10px;

}
.dropdown-content img:hover {
  transform: scale(1.1); /* 图片悬停放大效果 */
}

.dropdown-content a {
  color: inherit;
  text-decoration: none;
}
body {
  padding-top: 100px; /* 预留给固定导航栏的空间，避免遮挡内容 */
}
</style>


