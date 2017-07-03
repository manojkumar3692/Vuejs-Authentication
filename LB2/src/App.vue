<template>
  <div id="app">
    <app-header></app-header>
      <div class="defaultHeight">
    <router-view>
    
    </router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
   @import './assets/scss/main.scss';
   @import './assets/external-css/bootstrap.css';
@import './assets/external-css/bootstrap-vue.css';
</style>
