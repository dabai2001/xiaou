<template>
    <div class="box">
        <router-link to="/xiaou/my" tag="span"><h1>小U商城</h1></router-link>
        <input type="text" v-model="name" placeholder="请输入账号">
        <input type="text" v-model="pass" placeholder="请输入密码">
        <button @click="login()">登入</button>
         <router-link to="/registered">
            <button class="zc">去注册</button>
        </router-link>
    </div>
</template>

<script> 
    export default {
        data() {
            return {
                name:"",
                pass:""

            }
        },
        methods: {
            login(){
                //问题
                if(this.name == "andy" && this.pass=="123456"){
                    localStorage.setItem("uname",this.name)
                    console.log(localStorage.getItem("uname"))
                    this.$router.push("/xiaou/index")
                    console.log("已经登入了")
                }
            }
        },
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
    font-size: 18px;
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
.box .zc{
    height: 40px;
    width: 100px;
    border-radius: 5px;
    margin-top: 50px;
    outline: none;
    background: rgb(164, 165, 163) ;
    border: 0;
    color: #ffffff;
    font-size: 18px;
    background: #a8a7a7;

}
</style>