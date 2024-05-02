document.addEventListener('DOMContentLoaded', function() {
    const movies = loadMovies();
    const searchInput = document.getElementById('movie-search');

    function displayMovies(moviesToDisplay) {
        const container = document.getElementById('movie-grid');
        container.innerHTML = ''; // Clear existing movies
        moviesToDisplay.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.className = 'movie';
            movieElement.innerHTML = `
                <img src="${movie.image}" alt="Image of ${movie.title}" class="movie-image">
                <h2>${movie.title}</h2>
                <p>${movie.description.substring(0, 100)}...</p> <!-- Show partial description -->
            `;
            movieElement.addEventListener('click', () => {
                const movieQuery = `title=${encodeURIComponent(movie.title)}&duration=${encodeURIComponent(movie.duration)}&genre=${encodeURIComponent(movie.genre)}&description=${encodeURIComponent(movie.description)}&year=${encodeURIComponent(movie.year)}&video=${encodeURIComponent(movie.video)}`;
                window.location.href = `/html/movie-detail.html?${movieQuery}`;
            });
            container.appendChild(movieElement);
        });
    }

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText)
        || movie.description.toLowerCase().includes(searchText)
        || movie.genre.toLowerCase().includes(searchText)
        || movie.year.toLowerCase().includes(searchText)
    );
        displayMovies(filteredMovies);
    });

    displayMovies(movies); // Display all movies initially
});

