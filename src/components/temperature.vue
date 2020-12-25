<template>
    <div v-if="temperature" class="temp">
        <!-- <span><i class='bx bxs-star-half'></i></span> -->
        <!-- <h1>28</h1> -->
        <span>{{ icon }}</span>
        <h1>{{ temperature}}</h1>
        <span>&deg;C</span>
    </div>
</template>
<script>
export default {
    props: ['temperature', 'icon']
}
</script>
<style scoped>
.temp{
    display: flex;
    justify-content: center;
}
.temp h1, i{
    font-size: 72px;
}

</style>