
document.addEventListener('DOMContentLoaded', function() {
    const movies = loadMovies();
    const searchInput = document.getElementById('movie-search');
    const container = document.getElementById('movie-grid');
        
    function displayMovies(filteredMovies) {
        container.innerHTML = ''; // Clear existing movies
        filteredMovies.forEach(movie => {
            const movieHtml = `
                <div class="movie">
                    <img src="${movie.image}" alt="Image of ${movie.title}" class="movie-image">
                    <h2>${movie.title}</h2>
                    <p><strong>Duration:</strong> ${movie.duration}</p>
                    <p><strong>Genre:</strong> ${movie.genre}</p>
                    <p><strong>Description:</strong> ${movie.description}</p>
                    <p><strong>Year of Release:</strong> ${movie.year}</p>
                </div>
            `;
            container.innerHTML += movieHtml;  // Append the movie HTML to the container
        });
    }
        
    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
        displayMovies(filteredMovies);
    });
        
    displayMovies(movies); // Display all movies initially
});

