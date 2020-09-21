<template>

  <div id="app">
        <router-view>
        </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html ,body,#app{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
.router-link-active{
  color: red;
}

</style>
