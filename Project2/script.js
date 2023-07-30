const API_KEY = 'a88c0572';
const searchForm = document.getElementById('searchForm');
const movieDetailsDiv = document.getElementById('movies');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('searchMovie').value.trim();
  if (!searchTerm) {
    return;
  }

  const apiUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        const movies = data.Search;
        const movieCards = movies.map(createMovieCard).join('');
        movieDetailsDiv.innerHTML = movieCards;
      } else {
        movieDetailsDiv.innerHTML = '<p>No movies found. Try another search term.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      movieDetailsDiv.innerHTML = '<p>Oops! Something went wrong.</p>';
    });
});

function createMovieCard(movie) {
  return `
    <div class="movieCard">
    <img src="${movie.Poster}" alt="${movie.Title} Poster">
    <h2>${movie.Title}</h2>
      <p>Year: ${movie.Year}</p>
      <button> watch now </button>
     
    </div>
  `;
}
