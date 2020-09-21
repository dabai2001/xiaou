<template>

    <div>
        <div class="top">
            <div class="title">我的</div>
            <div class="box1">
                <router-link to="/login">
                    <button>登入</button>
                </router-link>
                 <router-link to="/registered">
                    <button>注册</button>
                </router-link>
            </div>
            
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>
button{
    height: 40px;
    width: 100px;
    border-radius: 5px;
    background: rgb(238, 154, 94);
    outline: none;
    border: 0;
    color: #ffffff;
    font-size: 18px;
    margin: 50px 3px;
}
.box1{
    text-align: center;
}

.top{
    height: 50px;
    font-size: 20px;
    background: coral;
    color: #ffffff;
}

.title{
    
    line-height: 44px;
    text-align: left;
    text-indent: 5px;
}



</style>