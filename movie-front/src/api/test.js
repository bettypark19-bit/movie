const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDdmNzQwZjM3ZDkxMGIxNzA1NzMyYTkwYjZkNWI5NCIsIm5iZiI6MTc3MzcwNzgxMC43NjEsInN1YiI6IjY5YjhhMjIyMzQxZTdkNDA1MDk1ZmZlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.201sLkravKLnd4BmjO9BsHMmj19DtZljdR4qcO0c8hw'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));