//  store
import { reactive } from 'vue'
export const store = reactive ({
  
  
  movieList: [],
  searchMovie: "",
  urlApi: 'https://api.themoviedb.org/3/search/movie'
  
});
