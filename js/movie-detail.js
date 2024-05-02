document.addEventListener('DOMContentLoaded', () => {
    // Assuming you pass the movie details via URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const duration = urlParams.get('duration');
    const genre = urlParams.get('genre');
    const description = urlParams.get('description');
    const year = urlParams.get('year');
    const video = urlParams.get('video');

    // Setting the content
    document.getElementById('movieTitle').textContent = title;
    document.getElementById('movieDuration').textContent = duration;
    document.getElementById('movieGenre').textContent = genre;
    document.getElementById('movieDescription').textContent = description;
    document.getElementById('movieYear').textContent = year;
    document.getElementById('movieVideo').src = video;
});
