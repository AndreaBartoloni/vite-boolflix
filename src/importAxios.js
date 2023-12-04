import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {include_adult: 'false', language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTM1MTNkYTk2NjYyM2RlYWFjYTM4MzNiOGVkMjc5NSIsInN1YiI6IjY1NmRkZWQzMDVhNTMzMDBhZDU2Y2Y3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R2BhiAfdojmFUGgmmDa9xoGraWsUcUc6Qidkfq-4t-U'
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