<!-- APP.VUE  -->

<script>
import card from './components/card.vue'
import axios from 'axios'
import { store } from "./store.js"
import searchBar from './components/searchBar.vue'
import navBar from './components/navBar.vue'






export default{
  components: {
    searchBar,
    card,
    navBar
  },

  data() {
    return {
      store
    }
  },
  mounted() {
    this.listaFilm();
  },
  methods: {
    listaFilm(){
      let opzioniRichiesta = {
        method: 'GET',
        url: this.store.urlApi,
        params: {
          query: this.store.searchMovie,
          include_adult: 'false', 
          language: 'en-US', 
          page: '1',
          api_key: "7a3513da966623deaaca3833b8ed2795"
        },
        headers: {
          accept: 'application/json',
        },

      }
      axios.request(opzioniRichiesta).then(response => {
        this.store.movieList = response.data.results;
        console.log(response.data.results)
      })

      let richiestaSerie = {
        method: 'GET',
        url: this.store.urlSerie,
        params: {
          query: this.store.searchMovie,
          include_adult: 'false', 
          language: 'en-US', 
          page: '1',
          api_key: "7a3513da966623deaaca3833b8ed2795"
        },
        headers: {
          accept: 'application/json',
        },

      }
      axios.request(richiestaSerie).then(response => {
        this.store.seriesList = response.data.results;
        console.log(response.data.results)
      })
    }
  },
}
</script>

<template>
  <navBar/>
  <h1>Film</h1>
  <div class="container-big">
    <card v-for="(movie, index) in store.movieList" :key="index" :info="movie"/>
  </div>
  
  <h1>serie</h1>
  <div class="container-big">
    <card v-for="(serie, index) in store.seriesList" :key="index" :info="serie"/>
  </div>
  
  <searchBar @search="listaFilm"/>
</template>

<style scoped>

.container-big{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
