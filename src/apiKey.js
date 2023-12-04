//  IMPORT.AXIOS 

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/search/movie',
  params: {
    query: "7a3513da966623deaaca3833b8ed2795",
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