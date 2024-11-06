<template>
  <div class="page-content">
    <div class="pad-content">
      <img
        :src="require('@/assets/image/qifamily/qifamily-pad.png')"
        class="d-block w-100"
        alt="Image 1"
      />
    </div>
    <div class="content-1">
      <div class="text-content-1">
        <h3>百年传承 非遗技艺</h3>
      </div>
      <div class="img-content-1">
        <img
          :src="require('@/assets/image/qifamily/content-1-1.png')"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
    </div>
    <div class="content-2">
      <div class="content-2-1">
        <h3>茶人守正 风范永传</h3>
      </div>
      <div class="content-2-2">
        <img
          :src="require('@/assets/image/qifamily/content-2-1.png')"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
      <div class="content-2-3">
        <div class="content-2-3-left">
          <div>
            <div class="text-content-2-3-left">
              <p>这里是左侧的文字内容。</p>
            </div>
            <div class="image-content-2-3-left">
              <img
                src="@/assets/image/qifamily/content-2-2left.png"
                alt="示例图"
              />
            </div>
          </div>
        </div>
        <div class="content-2-3-right">
          <div>
            <div class="image-content-2-3-right">
              <img
                src="@/assets/image/qifamily/content-2-2right.png"
                alt="示例图"
              />
            </div>
            <div class="text-content-2-3-right">
              <p>这里是右侧的文字内容。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-2-4">
        <img
          :src="require('@/assets/image/qifamily/content-3-1.png')"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
      <div class="content-2-5">
        <div class="text-content-2-5">
          <h3>文化遗产 技艺非凡</h3>
        </div>
        <div class="img-content-2-5">
          <img
            :src="require('@/assets/image/qifamily/content-3-2.png')"
            class="d-block w-100"
            alt="Image 1"
          />
        </div>
      </div>
      <div class="content-2-6">
        <div class="text-content-2-6">
          <h3>十大工艺</h3>
        </div>
        <div class="img-content-2-6">
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
      <div class="content-2-7"></div>
      <div class="text-content-2-7">
        <h3>十大技法</h3>
      </div>
      <div class="img-content-2-7">
        <div class="img-content-2-6">
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
          <div class="img-ten">
            <img
              :src="require('@/assets/image/qifamily/content-4-1.png')"
              class="d-block w-100"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "MyComponent",
  data() {
    return {
      // 在这里定义你的数据
    };
  },
  methods: {
    // 在这里定义你的方法
  },
  mounted() {
    // 在这里执行组件挂载后的代码
  },
};
</script>
  
  <style scoped>
.image-container {
  display: flex;
  flex-direction: column; /* 使图片竖向排列 */
  weight: 90vh; /* 让容器占满屏幕高度 */
}

.full-screen-image {
  flex: 1; /* 每张图片均分屏幕宽度 */
  object-fit: cover; /* 确保图片以适合方式填充 */
  height: 100%; /* 图片高度撑满视口高度 */
  width: 100%; /* 图片宽度撑满父容器的宽度 */
}
.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column; /* 垂直排列 */
}
.pad-content {
  width: 100%;
}
img {
  max-width: 100%; /* 图像宽度最大为 100% */
  height: auto; /* 自动调整高度以保持宽高比 */
}
.content-1 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  background-image: url("@/assets/image/qifamily/content-1-bg.png"); /* 设置背景图 */
  background-size: cover; /* 使背景图覆盖整个 div */
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat; /* 不重复背景图 */
  display: flex;
}
.text-content-1,
.img-content-1 {
  width: 45%;
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  padding: 10px; /* 内边距 */
  height: auto; /* 设置高度 */
  margin-left: 5%;
  margin-right: 5%;
  height: auto;
}

.content-2-3 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  display: flex;
}
.content-2-3-left,
.content-2-3-right {
  width: 50%; /* 各占 50% */
  padding: 5px; /* 可选：内边距 */
  box-sizing: border-box; /* 包括内边距和边框在内的总宽度 */
}
.text-content-2-3-left {
  height: 450px;
}
.text-content-2-3-right {
  height: 300px;
}
.text-content-2-3-left-2 {
  height: 450px;
}
.content-2-5 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  display: flex;
}
.text-content-2-5,
.img-content-2-5 {
  width: 45%;
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  padding: 10px; /* 内边距 */
  height: auto; /* 设置高度 */
  margin-left: 5%;
  margin-right: 5%;
  height: auto;
}
.img-content-2-6 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  display: flex;
}
.img-ten {
  width: 18%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
}
</style>
  