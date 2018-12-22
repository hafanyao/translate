<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translateForm @Translate="Translate_submit"></translateForm>
    <translateOutput v-text="translated_text"></translateOutput>
    <!-- <router-view/> -->
    <footer>
      作者：hafanYao
    </footer>
  </div>
</template>

<script>

  import TranslateForm from './components/TranslateForm'
  import TranslateOutput from './components/TranslateOutput'

  export default {
    name: 'App',
    data() {
      return {
        translated_text: 'With time and lives in exchange for survival'
      }
    },
    components: {
      TranslateForm,
      TranslateOutput
    },
    methods: {
      Translate_submit: function(language, text) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading...',
          // spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.6)',
          target: document.querySelector('.div1')
        });
        this.$Axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate', {
          params: {
            key: 'trnsl.1.1.20180625T012625Z.9520dbd21a3e9f76.2073d2c0023cd198704df8a75301a76e355e1f30',
            lang: language,
            text: text
          }
        })
        .then(res => {
          this.translated_text = res.data.text[0];
          loading.close()
        })
        .catch(error => {
          alert('请求失败：' + error.status);
          loading.close()
        })
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  footer{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 20px;
    color: #ddd;
    font-size: 12px;
  }
</style>
