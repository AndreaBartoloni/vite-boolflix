<!-- APP.VUE  -->

<script>
import card from './components/card.vue'
import axios from 'axios'
import { store } from "./store.js"
import searchBar from './components/searchBar.vue'





export default{
  components: {
    searchBar,
    card
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
  <h1>Film</h1>
  <card v-for="(movie, index) in store.movieList" :key="index" :info="movie"/>
  <h1>serie</h1>
  <card v-for="(serie, index) in store.seriesList" :key="index" :info="serie"/>
  <searchBar @search="listaFilm"/>
</template>

<style scoped>

</style>
