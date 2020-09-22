<template>
    <div id="box">
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="nav">
        <div><router-link to="/xiaou/index" tag="span">UU</router-link></div>
        <div><router-link  to="/xiaou/cart?name=andy"  tag="span">购物车</router-link></div>
        <div><router-link  to="/xiaou/my"  tag="span">我的</router-link></div>
      </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#box{
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content{
  flex:1;
}

html,body{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.nav{
  height: 60px;
  width: 100%;
  display: flex;
  background: cornflowerblue;
}

.nav div{
  flex: 1;
  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  font-size: 22px;
  color: #ffffff;
}

</style>