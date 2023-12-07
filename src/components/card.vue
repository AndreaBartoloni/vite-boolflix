<!-- CARD.VUE  -->
<script>

export default{

  name: "card", // assegnamo un nome al componente
  props: {
      info: Object
  },
  data() {
    return {
      searchFlags: ["cn", "de", "en", "fi", "fr", "it", "jp", "kr", "no", "pt"]
    }
  },
  methods: {
    getFlagImagePath(language) { 
      return (`src/img/${language}.png`); // Restituisce una stringa che rappresenta il percorso dell'immagine della bandiera basato sul valore della lingua fornito come argomento.
    },
    starVote() { 
      return Math.ceil(this.info.vote_average / 2 );
    },
  },
}

</script>

<template>
  <div>
    <img :src="`https://image.tmdb.org/t/p/w342/${this.info.poster_path}`"> <!-- passiamo la url statica e gli cambiamo solo il valore finale prendendolo dall'array dell'API -->
    <p>{{ info.title }}</p>
    <p>{{ starVote() }}</p>
    <div v-if="searchFlags.includes(info.original_language)">
      <img :src="getFlagImagePath(info.original_language)">  <!-- per determinare dinamicamente il percorso dell'immagine della bandiera in base al valore della lingua -->
    </div>
    <div v-else>{{ info.original_language }}</div>
    <div>
      <img v-for="(star, index) in starVote" :key="index" :src="require('@/img/star-solid.svg')">
    </div>
   
 
  </div>
  
</template>

<style scoped>
h1{
  color: white;
}
</style>