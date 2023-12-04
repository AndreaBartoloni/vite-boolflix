import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    query: encodeURI(this.quelDato),
    include_adult: 'false', 
    language: 'en-US', 
    page: '1'
},
  headers: {
    accept: 'application/json',
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });