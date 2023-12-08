<!-- CARD.VUE  -->
<script>

export default{

  name: "card", // assegnamo un nome al componente
  props: {
      info: Object
  },
  data() {
    return {
      searchFlags: ["cn", "de", "en", "fi", "fr", "it", "jp", "kr", "no", "pt"],
      showOverlay: false // booleano che imposta a false che cambierà nel momento in cui il mouse entra nel componente
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
  <div class="container-card">
    <div class="overlay" @mouseover="showOverlay = true" @mouseleave="showOverlay = false"> <!-- @mouseover="showOverlay = true": Questo è un evento che si attiva quando il cursore del mouse entra nell'area del componente mentre @mouseleave="showOverlay = false" quando esce da  -->
      <img :src="`https://image.tmdb.org/t/p/w342/${this.info.poster_path}`" class="image-movies-serie" />
      <div v-if="showOverlay" class="description-overlay">
        
        <p><span><strong>Descrizione:</strong></span> {{ info.overview }}</p>
        <div class="container-voto">
          <span><strong> Voto: </strong></span> <img v-for="star in starVote()" :key="star" class="star" src="/src/img/star-solid.svg">
        </div>
        <div v-if="searchFlags.includes(info.original_language)" class="container-language">
          <span>Lingua: </span><img :src="getFlagImagePath(info.original_language)" class="bandiera">
        </div>
        <div v-else class="container-language"><span><strong>Lingua: </strong></span>{{ info.original_language }}</div>
        
      </div>
    </div>
    <!-- Rimuovo la parte della descrizione fuori dall'overlay -->
    <p>{{ info.title }}</p>
    
    
  </div>
</template>

<style scoped>
h1{
  color: white;
}

h1 {
  color: white;
}

.star {
  filter: invert(1);
  display: flex;
  margin-left: 5px;
}

.container-card {
  width: calc(100% / 5 - 10px);
  margin: 0px 5px 0px 5px;
}

.overlay {
  position: relative;
  width: 100%;
  height: 75%;
}

.image-movies-serie {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.description-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  
}

.overlay:hover .description-overlay {
  opacity: 1;
  overflow:auto;
}
.description-overlay > p{
  font-size: 11px;
  text-align: start;
  padding: 10px 15px 0px 15px;
}

.container-voto{
  display: flex;
  padding: 5px 15px 0px 15px;
}
span{
  font-size: 13px;
  text-align: start;
}

.container-language{
  text-align: start;
  padding: 10px 15px 0px 15px;
}
.bandiera{
  width: 20px;
  vertical-align: middle;
}
</style>