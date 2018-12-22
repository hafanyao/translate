<template>
  <div id="translateOutput" v-if="translated_text!=''">
    <h2>{{translated_text}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'translateOutput',
    props: [
      'translated_text'
    ]
  }
</script>

<style scoped>
  #translateOutput{
    margin: 40px 10px 0;
    padding: 50px 0;
    background-color: #f1f6f7;
    border-radius: 5px
  }
</style>
