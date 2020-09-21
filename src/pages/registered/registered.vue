<template>
    <div class="box">
        <router-link to="/xiaou/my" tag="span"><h1>小U商城</h1></router-link>
        <input type="text" placeholder="请输入电话号码">
        <input type="text" placeholder="请输入密码">
        <input type="text" placeholder="确认密码">
        <button>注册</button>
         <router-link to="/login">
            <button class="dr">去登入</button>
        </router-link>

    </div>
</template>

<script> 
    export default {
        
    }
</script>

<style scoped>
h1{
    color: coral;
}
.box{
    width: 80%;
    margin: auto;
    margin-top: 100px;
    text-align: center;
}
input{
    height: 35px;
    width: 100%;
    border-radius: 17px;
    outline: none;
    margin: 2px;
    border: 1px solid #cccccc;
    text-indent: 5px;
}
button{
    height: 40px;
    width: 100px;
    border-radius: 5px;
    margin-top: 50px;
    background: rgb(238, 154, 94);
    outline: none;
    border: 0;
    color: #ffffff;
    font-size: 18px;
}
.dr{
      height: 40px;
    width: 100px;
    border-radius: 5px;
    margin-top: 50px;
   background: #a8a7a7;
    outline: none;
    border: 0;
    color: #ffffff;
    font-size: 18px;
}
</style>