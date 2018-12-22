<template>
  <div id="translateForm">
    <form>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入要翻译的内容"
        v-model="text_to_translate">
      </el-input>
      <!-- <input type="text" placeholder="请输入要翻译的内容" v-model="text_to_translate"> -->
      <!-- <select v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="ko">Korean</option>
        <option value="ja">Janpenese</option>
      </select> -->
      <el-select v-model="language">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- <input type="submit" value="翻译"> -->
      <el-button type="primary" size="mini" @click="Form_submit">翻译</el-button>
    </form>
    <span v-for="item in login_arr" :key="item.login">{{item.login}},</span>
  </div>
</template>

<script>

  export default {
    name: 'translateForm',
    data() {
      return {
        language: 'en',
        text_to_translate: '用生命和时间换取生存',
        options: [
          {
            value: 'en',
            label: 'English'
          },
          {
            value: 'ru',
            label: 'Russian'
          },
          {
            value: 'ko',
            label: 'Korean'
          },
          {
            value: 'ja',
            label: 'Janpenese'
          }
        ],
        login_arr: []
      }
    },
    methods: {
      Form_submit() {
        if(!this.text_to_translate){
          this.$message({
            message: '请输入您要翻译的内容！',
            type: 'warning'
          });
          return false
        };
        this.$emit('Translate', this.language, this.text_to_translate)
        // alert(this.text_to_translate)
      }
    },
    created() {
      const VUE = this;
      // get请求
      // this.$Axios.get('getChengpindetails.php', {
      //   params: {
      //     count: 10
      //   }
      // })
      // .then(res => {
      //   console.log(res.status)
      // })
      // .catch(error => {
      //   console.log(error)
      // })

      // post请求
      // this.$Axios.post('getChengpindetails.php', {
      //   params: xxx
      // }, {
      //   headers: {
      //       'Content-type': 'application/json;charset=UTF-8'
      //   }
      // })
      // .then(res => {
      //   console.log(res.status)
      // })
      // .catch(error => {
      //   console.log(error)
      // })

      // fetch请求
      // fetch('/apis/test/testToken.php', {
      //   method: 'post',
      //   headers: {
      //     //传递内容（非必须）
      //     'Content-type': 'application/json',
      //     token: 'f4c902c9ae5a2a9d8f84868ad064e706'
      //   },
      //   body: JSON.stringify({username: 'henry', password: '12345'})
      // })
      // .then(res => {
      //   return res.json()
      // })
      // .then(data => {
      //   console.log(data)
      // })

      const AJAX = function (methods, url, success) {
        // XML请求
        // 创建XMLHttpRequest请求
        const xhr = new XMLHttpRequest();
        // console.log(xhr)

        // open(type, url/file, async);
        // 1. type: 请求方法（get/post）
        // 2. url: 请求地址（地址/文件）
        // 3. async: 是否异步请求（普遍异步）
        xhr.open(methods, url, true);

        // onprogress（loading/xhr.readyState为3）
        xhr.onprogress = function() {
          console.log('加载中...')
        }

        // 两种请求方法: onload / onreadystatechange
        // 1.onload:
        xhr.onload = function() {
          success(xhr.responseText)
        }
        // 2.onreadystatechange: 请求状态为2/3/4
        // xhr.onreadystatechange = function() {
          // readyState 状态码
          // 0: 请求未初始化
          // 1: 服务器已建立连接
          // 2: 请求已接收
          // 3: 请求处理中
          // 4: 请求已完成, 且响应已就绪
        //   if(parseInt(xhr.status) === 200 && parseInt(xhr.readyState) === 4){
        //     console.log(xhr.responseText)
        //   }else if(parseInt(xhr.status) === 404) {
        //     console.log('请求地址不存在！')
        //   }
        // }

        // 发送请求
        xhr.send()
      };
      AJAX('GET', 'https://api.github.com/users', function(res) {
         VUE.login_arr = JSON.parse(res).slice(0, 5)
      });



//   /* 封装ajax函数
//    * @param {string}opt.type http连接的方式，包括POST和GET两种方式
//    * @param {string}opt.url 发送请求的url
//    * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
//    * @param {object}opt.data 发送的参数，格式为对象类型
//    * @param {function}opt.success ajax发送并接收成功调用的回调函数
//    */
//      function ajax(opt) {
//         opt = opt || {};
//         opt.method = opt.method.toUpperCase() || 'POST';
//         opt.url = opt.url || '';
//         opt.async = opt.async || true;
//         opt.data = opt.data || null;
//         opt.success = opt.success || function () {};
//         var xmlHttp = null;
//         if (XMLHttpRequest) {
//             xmlHttp = new XMLHttpRequest();
//         }
//         else {
//             xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//         }var params = [];
//         for (var key in opt.data){
//             params.push(key + '=' + opt.data[key]);
//         }
//         var postData = params.join('&');
//         if (opt.method.toUpperCase() === 'POST') {
//             xmlHttp.open(opt.method, opt.url, opt.async);
//             xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
//             xmlHttp.send(postData);
//         }
//         else if (opt.method.toUpperCase() === 'GET') {
//             xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
//             xmlHttp.send(null);
//         }
//         xmlHttp.onreadystatechange = function () {
//             if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//                 opt.success(xmlHttp.responseText);
//             }
//         };
//      }

//      ajax({
//         method: 'POST',
//         url: 'test.php',
//         data: {
//            name1: 'value1',
//            name2: 'value2'
//         },
//         success: function (response) {
//            console.log(response)；
//         }
//      });

    }
  }

</script>

<style scoped>
  #app > div{
    margin: 20px;
  }
  .el-select{
    margin-top: 20px
  }
</style>


