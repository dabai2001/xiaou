<template>
    <div>
        <div class="title">
            <span class="logo">小U</span>
            <input type="text" class="search" placeholder="搜索">
            <div  class="sort">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        
    }

</script>

<style scoped>

.title{
    display: flex;
    margin-top: 1px;
    background: coral;
    line-height:50px;
    color: #ffffff;
}

.logo,.sort{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.sort span{
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ffffff;
    margin:1px;
    border-radius:4px;
}
.search{
    margin: 0 40px;
    flex: 1;
    height: 30px;
    border-radius:23px;
    outline: none;
    text-indent: 5px;
    border: 0;
    margin-top: 9px;
    border: 0;
    border: 1px solid #cccccc;
}
</style>