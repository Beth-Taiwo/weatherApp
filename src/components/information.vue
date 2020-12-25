<template>
    <div class="container">
        <p class="location">{{ location }}</p>
        <div v-if="temperature" class="text">
            <img :src="iconDisplay" alt="an icon here">
            <h1 class="temp">{{ temperature }}</h1>
            <span>&deg;c</span>
        </div>
        <p>{{ desp }}</p>
        <h6 v-if="updatedTime" class="time">Updated as of {{ updatedTime }}</h6>
        <div v-if="feels" class="text">
            <p><small>Feels like {{ feels }}&deg;c</small></p>
            <p><small>Wind {{ wind }}km/h</small></p>
            <p><small>Visibility {{ visibility }} km</small></p>
        </div>

    </div>
</template>
<script>
export default {
   props: ["location","temperature", "desp", "feels","wind","visibility", "updatedTime","iconDisplay"] 
}
</script>
<style scoped>
.container{
    text-align: center;
}
.text{
    display: flex;
    justify-content: center;
    align-items: center;
}
.text p{
    margin: 10px 8px;
}
.text span{
    align-items: start;
}
.temp{
    font-size: 72px;
}
</style>