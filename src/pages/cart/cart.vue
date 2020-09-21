<template>

    <div>
        <div class="top">
            <span class="last">1</span>
            <div class="title">购物车</div>
            <div class="sort">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.query)
        },
       
    }
</script>

<style scoped>

.top{
    height: 50px;
    display: flex;
    font-size: 20px;
    background: coral;
    color: #ffffff;
}
.title{
    flex: 1;
    line-height: 44px;
    text-align: center;
}
.last,.sort{
    width: 50px;
    height: 40px;
}
.last{
   text-align: center;
   line-height: 40px;
}
.sort span{
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ffffff;
    margin:2px;
    border-radius:4px;
    margin-top: 18px;
    
}

</style>