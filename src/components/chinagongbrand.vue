<template>
    <div class="container">
      <header>
        <h1></h1>
      </header>
      <main>
        <section>
          <h2>主要内容</h2>
          <p>这是一个示例段落，展示如何在 Vue 单文件组件中编写内容。</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 我的公司</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
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
    }
  };
  </script>
  
  <style scoped>
  /* 在这里定义你的样式 */
  .container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  header {
    background-color: #f8f9fa;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  main {
    margin: 20px 0;
  }
  
  footer {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
  }
  </style>