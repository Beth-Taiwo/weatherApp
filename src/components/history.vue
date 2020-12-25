<template>
    <div class="history-container" v-if="history">
        <p class="history-text">History</p>
        <div class="card-container"> 
            <div class="card" v-for="hist in history" :key="hist.id">
                <!-- <div v-for="hi in 7" :key="hi"> -->
                    <div>
                        <p><small>{{ hist.country }}</small></p>
                        <span><img :src="iconDisplay" alt="an icon here" /></span>
                        <h6 class="temp">{{ hist.temperature }}<span>&deg;C</span></h6>
                        <p class="desp"><small>{{ hist.description }}</small></p>
                    </div>
                    <p class="small-text"><small>checked at {{ hist.date }}</small></p>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['history','iconDisplay'],
    data(){
        return{
        }
    },
    
}
</script>
<style scoped>
.history-container{
  padding: 0 10%;
}
.history-text{
    margin-bottom: 4px;
}
.card-container{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-column-gap: 5px;
}
.card{
    border: 1px solid;
}
.card > div{
    padding: 3px 24px 6px 6px;
}
.small-text{
    border-top: 1px solid; 
    text-align: center;
    margin-top: 12px;
}
.small-text{
    font-size: 12px;
}
span img{
    width: 34px;
    height: 34px;
}
.temp{
    font-size: 20px;
}
</style>