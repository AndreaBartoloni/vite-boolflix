<!-- APP.VUE  -->

<script>
import card from './components/card.vue'
import axios from 'axios'
// import { apiKey } from "./apiKey.js"
import searchBar from './components/searchBar.vue'





export default{
  components: {
    searchBar,
    card
  },

  data() {
    return {
      apiKey
    }
  },
}
</script>

<template>
  <card/>
  <searchBar />
</template>

<style scoped>

</style>
