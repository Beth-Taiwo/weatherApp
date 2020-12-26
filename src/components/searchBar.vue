<template>
    <div>
        <div class="search-container">
            <div class="search-bar">
                <input type="text" placeholder="search here..." v-model="input" autofocus>
                <span @click="search"><i class='bx bx-search-alt'></i></span>
            </div>
            
        </div>
        <information :location="location" :temperature="temp" :desp="description" :feels="feels" :wind="wind" :visibility="visibility" :updatedTime="date" :iconDisplay="imgLink"/>

        <history :history="history"/>  
    </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import History from './history.vue'
import Information from './information.vue'
export default {
  components: { 
      History,
      Information 
    },
    
    data(){
        return {
            input: "",
            countryName: "",
            country: "",
            location: "",
            weather: "",
            icon: "",
            description: "",
            temp: null,
            feels: null,
            wind: null,
            visibility: null,
            date: null,
            history: []
        }
    },
    methods:{
        search(){
            console.log(this.input)
            axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q : this.input,
                    units: 'metric',
                    appid: '0067c2b5caded038a5aedcd193cc16a2'
                }
                })
                .then((res) => {
                console.log(res.data);
                this.country = res.data.sys.country;
                this.countryName = res.data.name;
                this.location = `${this.countryName}, ${this.country}`
                this.temp = res.data.main.temp;
                this.weather = res.data.weather;
                this.description = res.data.weather[0].description;
                this.icon = res.data.weather[0].icon;
                this.feels = res.data.main.feels_like;
                this.wind = res.data.wind.speed;
                this.visibility = res.data.visibility;
                this.date = moment(new Date()).format('LT');

                //history
                let historyDetail = {
                    id: new Date().getTime(),
                    country: this.location,
                    temperature: this.temp,
                    description: this.description,
                    date: this.date,
                    icon: this.imgLink,
                }
                this.history.push(historyDetail);
                console.log(this.history)

                })
                .catch(error => console.log(error))
        }
    },
    computed: {
        imgLink(){
            const imgURL = "http://openweathermap.org/img/wn/";
            return imgURL + this.icon + "@2x.png";
        }
    }
}
</script>
<style scoped>
.search-container{
    padding: 70px 359px 0px;
}
.search-bar{
    border: 1px solid #fff;
    display: flex;
    margin-bottom: 32px;

}
.search-bar input{
    padding: 8px;
    flex-grow: 1;
    outline: none;
    border: none;
    background: transparent;
    font-weight: bold;
}
.search-bar span{
    background: #fff;
    padding: 8px;
}
.search-bar span:hover{
    cursor: pointer;
}
span i{
    text-align: center;
    font-size: 18px;
    color: #000;
}


</style>