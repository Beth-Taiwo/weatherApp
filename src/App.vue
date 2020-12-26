<template>
  <div id="app">
    <div class="img">
    </div>
    <div class="main-content">
      <search-bar/>
      
    </div>
    <div class="history-cards">
      <history/>
    </div>
    <footer-view/>
  </div>
</template>

<script>
import history from './components/history'
import footerView from './components/footer.vue'
import SearchBar from './components/searchBar.vue'
export default {
  name: 'App',
  components: {
    SearchBar,
    history,
    footerView
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}
.img{
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: url("./assets/OIP2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
}
.img::after{
  content: "";
  width: 100%;
  height: 100%;
  background: #504f4f;
  position: fixed;
  top: 0;
  mix-blend-mode: multiply;
  z-index: -1;
}


</style>
