<!-- SEARCH.VUE  -->
<script>

import { store } from "../store.js"

export default{
  emits: ['search'],
  name: "searchBar",
  data() {
    return {
      store,
      
      
    }
  },
  methods: {
    search(){
      this.$emit('search', this.store.searchMovie)
    }
  },
}

</script>

<template>
    <input v-model="store.searchMovie" @keyup.enter="$emit('search')" type="text">
    <button @click="search">cerca</button>
    
</template>

<style scoped>

</style>
