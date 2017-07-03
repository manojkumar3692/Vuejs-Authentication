<template>
<div class="hello">
  <h1>{{msg}}</h1>
  <h2>this page doesnt require login or role based verification</h2>
  <p>Use /login to get started , username : admin , password :admin</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  .hello {
    padding:2rem 2rem;
    h1 {
      color:purple;
    }
    h2 {
      margin:2rem 0;
      color:darkgreen;
    }
    p {
      color:darkblue;
    }
  }
</style>