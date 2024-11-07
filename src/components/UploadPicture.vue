/* eslint-disable */

<template>
    <div class="content">
      <div class="form">
        <el-form ref="form" :model="Form" label-width="80px">
        
  
          <el-form-item>
            <el-upload action="/api/users/addProduct" list-type="picture-card" :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove" :before-upload="beforeProductUpload">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
         
       
  
        <el-form-item label="品牌">
          <el-input v-model="updateForm.name"></el-input>
        </el-form-item>

  
  
        
        <el-form-item>
          <el-button type="primary" @click="Submit">立即创建</el-button>

        </el-form-item>
  
    </el-form>
  
  
  
      </div>
      <!-- 图片展示区域 -->
      <div>
      <div v-for="(imageSrc, index) in this.imageSrc" :key="index" class="image-container">
        <img :src="imageSrc" alt="Base64 Image"/>
      </div>
    </div>
  
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  import { Message } from 'element-ui';
  import { v4 as uuidv4 } from 'uuid';
  
  
  export default {
    data() {
      return {
        Form: {
          name: '',
          imageurl: [],
  
  
  
  
        },
        // 上传表单
        updateForm: {
          name:'',
          address :[]
  
  
  
  
  
        },
        // 搜索表单
    
  
        searchdata: '',
        imageSrc: [],
        dialogImageUrl: '',
        dialogVisible: false,
        tags: [],
        inputVisible: false,
        inputValue: ''
      };
  
    },
    methods: {
      handleRemove(file, fileList) {
        //移除图片
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        //图片预览
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      beforeProductUpload(file) {
        var _this = this
        console.log(_this.updateForm.address)
        return new Promise(function () {
          var reader = new FileReader()
          reader.readAsDataURL(file)// 这里是最关键的一步，转换成base64
          reader.onload = function (event) {
            _this.updateForm.address.push(event.target.result) //定义参数获取图片路径
          }
          console.log(_this.updateForm.address)
        })
  
      },
      Submit(){
        console.log("提交成功")
        console.log(this.updateForm)
        const response = axios.post('http://localhost:3000/api/uploadPicture', this.updateForm)

      },
    }
  
  
  }
  </script>
  
  
  <style>
  /* 指定图片展示的大小 */
  .image-container img {
    width: 200px; 
    height: 200px; 
    object-fit: cover; /* 保持图片比例 */
  }
  </style>
  