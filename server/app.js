const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors()); 
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.json({ limit: '10mb' }));  // 设置为10MB
app.use(express.urlencoded({ limit: '10mb', extended: true }));  // 设置为10MB


// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'test_db',
    port : 3306
   
});

// 检查连接是否成功
connection.connect(err => {
    if (err) {
        console.error('数据库连接失败: ' + err.stack);
        return;
    }
    console.log('成功连接到数据库');
});


function searchProductByName(name, callback) {
    const query = 'SELECT * FROM teaprodcut WHERE name LIKE ?';
    const formattedQuery = query.replace('?', `'${name}'`); 
    console.log("Executing query:", formattedQuery);
    connection.query(formattedQuery)
    connection.query(query, [`%${name}%`], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      console.log("Query results:", results); // 打印查询结果
      callback(null, results);
    });
  }


  app.post('/api/uploadPicture', (req,res) => {
    const { name, address } = req.body;
    const query = 'INSERT INTO teapicture (name, picture64) VALUES (?, ?)';
    console.log("收到");
    let data = req.body;
    console.log(data);

    connection.query(query, [name, address[0]], (err, result) => {
        if (err) {
          console.error('插入失败:', err);
          return res.status(500).json({ message: '服务器错误', error: err });
        }
    
        console.log('数据插入成功:', result);
        return res.status(200).json({ message: '数据上传成功', result });
      });
  });

  app.get('/api/search', (req, res) => {
    const name = req.query.name;
    console.log("Received search name:", name); // 打印请求的查询名称
    searchProductByName(name, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      console.log("Sending response:", results); // 打印即将发送的响应
      res.json(results);
    });
  });

  app.get('/api/searchAll', (req, res) => {
    const query = 'select * from teaprodcut left join teapicture on teaprodcut.name = teapicture.name;'
    connection.query(query,  (err, result) => {
        if (err) {
          console.error('查询失败:', err);
          return res.status(500).json({ message: '服务器错误', error: err });
        }
    
        console.log('查询成功:', result);
        return res.status(200).json({ message: '数据上传成功', result });
      });
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

