<template>
  <div class="page-content">
    <div class="pad-content">
      <img
        :src="
          require('@/assets/image/longjinggongsource/longjinggongsource-pad.png')
        "
        class="d-block w-100"
        alt="Image 1"
      />
    </div>
    <div class="content-1">
      <div class="content-1-left">
        <div>
          <div class="text-content-1-left">
            <p>这里是左侧的文字内容。</p>
          </div>
          <div class="image-content-1-left">
            <img
              src="@/assets/image/longjinggongsource/content-1-2.png"
              alt="示例图"
            />
          </div>
          <div class="text-content-1-left-2">
            <p>这里是左侧的文字内容2222222。</p>
          </div>
        </div>
      </div>
      <div class="content-1-right">
        <div>
          <div class="image-content-1-right">
            <img
              src="@/assets/image/longjinggongsource/content-1-1.png"
              alt="示例图"
            />
          </div>
          <div class="text-content-1-right">
            <p>这里是右侧的文字内容。</p>
          </div>
          <div class="image-content-1-right">
            <img
              src="@/assets/image/longjinggongsource/content-1-3.png"
              alt="示例图"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="content-2">
      <div class="text-content-2-top">
        <h3>龙井双秀 各具特色</h3>
      </div>
      <div class="img-content-2">
        <div class="img-content-2-left">
          <h3>群体种茶树</h3>
          <div>
            <img
              src="@/assets/image/longjinggongsource/content-2-1.png"
              alt="示例图"
            />
          </div>
        </div>
        <div class="img-content-2-right">
          <h3>龙井 43 茶树</h3>
          <div>
            <img
              src="@/assets/image/longjinggongsource/content-2-1.png"
              alt="示例图"
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
.pad-content img {
  object-fit: cover; /* 图片自动填充裁剪 */
  margin-top: 0; /* 紧贴上方 */
}
.content-1 {
  width: 100%; /* 设置宽度 */
  height: auto; /* 设置高度 */
  background-image: url("@/assets/image/longjinggongsource/content-1-bg.png"); /* 设置背景图 */
  background-size: cover; /* 使背景图覆盖整个 div */
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat; /* 不重复背景图 */
  display: flex;
}
.content-1-left,
.content-1-right {
  width: 50%; /* 各占 50% */
  padding: 5px; /* 可选：内边距 */
  box-sizing: border-box; /* 包括内边距和边框在内的总宽度 */
}
.text-content-1-left {
  height: 450px;
}
.text-content-1-right {
  height: 500px;
}
.text-content-1-left-2 {
  height: 450px;
}

.content-2 {
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  width: 100%; /* 占满父容器宽度 */
  height: 1300px;
}
.text-content-2-top {
  width: 100%;
  text-align: left;
  padding: 5%;
  display: flex;
}
.img-content-2 {
  width: 100%;
  display: flex;
}

.img-content-2-left,
.img-content-2-right {
  width: 45%;
  flex: 1; /* 等比占据 */
  box-sizing: border-box; /* 包括内边距和边框 */
  padding: 10px; /* 内边距 */
  height: auto; /* 设置高度 */
  background-image: url("@/assets/image/longjinggongsource/content-2-bg.png"); /* 设置背景图 */
  background-size: cover; /* 使背景图覆盖整个 div */
  background-position: center; /* 背景图居中 */
  background-repeat: no-repeat; /* 不重复背景图 */
  margin-left: 5%;
  margin-right: 5%;
  height: auto;
}
</style>