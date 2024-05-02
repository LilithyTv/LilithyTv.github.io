document.addEventListener('DOMContentLoaded', function() {
    const movies = loadMovies();
    const searchInput = document.getElementById('movie-search');
    const container = document.getElementById('movie-grid');

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
                window.location.href = `movie-detail.html?${movieQuery}`;
            });
            container.appendChild(movieElement);
        });
    }

    function filterMovies(criteria) {
        const allMovies = document.querySelectorAll('.movie');
        allMovies.forEach(movie => {
            if (matchCriteria(movie, criteria)) {
                movie.classList.remove('hide');
                movie.style.display = 'block'; 
            } else {
                movie.classList.add('hide');
                setTimeout(() => {
                    movie.style.display = 'none'; 
                }, 500); 
            }
        });
    }

    function matchCriteria(movie, criteria) {
        return movie.textContent.toLowerCase().includes(criteria.toLowerCase());
    }

    function clearFilter() {
        const hiddenMovies = document.querySelectorAll('.movie.hide');
        hiddenMovies.forEach(movie => {
            movie.classList.remove('hide');
            movie.style.display = 'block';
        });
    }

    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
        displayMovies(filteredMovies);
    });

    displayMovies(movies); // Display all movies initially
});

document.addEventListener('DOMContentLoaded', function() {
    const movies = [
        { title: "Pulp Fiction", image: "../assets/images/gladiator2.jpg" },
        { title: "The Dark Knight", image: "../assets/images/gladiator2.jpg" },
        // Add more movies here
    ];

    const movieList = document.getElementById('movieList');

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieList.appendChild(movieItem);

        movieItem.addEventListener('click', () => {
            // Handle click, perhaps change main content or expand details
            console.log(`You clicked on ${movie.title}`);
        });
    });
});
