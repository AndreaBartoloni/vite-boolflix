//  store
import { reactive } from 'vue'
export const store = reactive ({
  
  
  movieList: [],
  seriesList: [],
  searchMovie: "",
  urlApi: 'https://api.themoviedb.org/3/search/movie'
  
});
