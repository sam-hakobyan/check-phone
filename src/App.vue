<template>
  <div id="app" class="main__field">
    <Menu />
    <router-view/>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'


export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style>
  .main__field{
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
</style>
