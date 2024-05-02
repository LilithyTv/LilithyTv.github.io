// data/movies.js
function loadMovies() {
    return [
        {
            title: "The Godfather",
            duration: "175 min",
            genre: "Crime, Drama",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            year: "1972",
            image: "../assets/images/godfather.jpg",
            video: "https://www.youtube.com/embed/UaVTIH8mujA"
        },
        {
            title: "Pulp Fiction",
            duration: "154 min",
            genre: "Crime, Drama",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            year: "1994",
            image: "../assets/images/pulpfiction.jpg",
            video: "https://www.youtube.com/embed/s7EdQ4FqbhY"
        },
        {
            title: "Inception",
            duration: "148 min",
            genre: "Action, Adventure, Sci-Fi",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
            year: "2010",
            image: "../assets/images/inception.jpg" ,
            video: "https://www.youtube.com/embed/YoHD9XEInc0"
        },
        {
            title: "The Matrix",
            duration: "136 min",
            genre: "Action, Sci-Fi",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            year: "1999",
            image: "../assets/images/thematrix.jpg" ,
            video: "https://www.youtube.com/embed/m8e-FF8MsqU"
        },
        {
            title: "Interstellar",
            duration: "169 min",
            genre: "Adventure, Drama, Sci-Fi",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            year: "2014",
            image: "../assets/images/interstellar.jpg" ,
            video: "https://www.youtube.com/embed/2LqzF5WauAw"
        },
        {
            title: "The Shawshank Redemption",
            duration: "142 min",
            genre: "Drama",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            year: "1994",
            image: "../assets/images/shawshank.jpg" ,
            video: "https://www.youtube.com/embed/PLl99DlL6b4"
        },
        {
            title: "Gladiator",
            duration: "155 min",
            genre: "Action, Drama, Adventure",
            description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
            year: "2000",
            image: "../assets/images/gladiator.jpg" ,
            video: "https://www.youtube.com/embed/P5ieIbInFpg"
        },
        {
            title: "Jurassic Park",
            duration: "127 min",
            genre: "Action, Adventure, Sci-Fi",
            description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
            year: "1993",
            image: "../assets/images/jurassicpark.jpg" ,
            video: "https://www.youtube.com/embed/dLDkNge_AhE"
        },
        {
            title: "The Dark Knight",
            duration: "152 min",
            genre: "Action, Crime, Drama",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            year: "2008",
            image: "../assets/images/thedarkknight.jpg" ,
            video: "https://www.youtube.com/embed/_PZpmTj1Q8Q"
        },
        {
            title: "Fight Club",
            duration: "139 min",
            genre: "Drama",
            description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
            year: "1999",
            image: "../assets/images/fightclub.jpg" ,
            video: "https://www.youtube.com/embed/BdJKm16Co6M"
        },

        {
            title: "The Godfather 2",
            duration: "175 min",
            genre: "Crime, Drama",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            year: "1972",
            image: "../assets/images/godfather2.jpg",
            video: "https://www.youtube.com/embed/9O1Iy9od7-A"
        },
        {
            title: "The Matrix Reloaded",
            duration: "136 min",
            genre: "Action, Sci-Fi",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            year: "2003",
            image: "../assets/images/thematrix2.jpg" ,
            video: "https://www.youtube.com/embed/kYzz0FSgpSU"
        },
        {
            title: "Gladiator 2",
            duration: "155 min",
            genre: "Action, Drama, Adventure",
            description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
            year: "2024",
            image: "../assets/images/gladiator2.jpg" ,
            video: "https://www.youtube.com/embed/3_LbFzJiETc"
        },
        {
            title: "The lost World: Jurassic Park",
            duration: "127 min",
            genre: "Action, Adventure, Sci-Fi",
            description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
            year: "1997",
            image: "../assets/images/jurassicpark2.jpg" ,
            video: "https://www.youtube.com/embed/RxrvaneULkE"
        },
        {
            title: "The Dark Knight Rises",
            duration: "152 min",
            genre: "Action, Crime, Drama",
            description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
            year: "2012",
            image: "../assets/images/thedarkknight2.jpg" ,
            video: "https://www.youtube.com/embed/g8evyE9TuYk"
        },
        {
            title: "The Godfather 3",
            duration: "175 min",
            genre: "Crime, Drama",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            year: "1990",
            image: "../assets/images/godfather3.jpg",
            video: "https://www.youtube.com/embed/UUkG37KSWf0"
        },
        {
            title: "The Matrix Revolutions",
            duration: "136 min",
            genre: "Action, Sci-Fi",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            year: "2003",
            image: "../assets/images/thematrix3.jpg" ,
            video: "https://www.youtube.com/embed/hMbexEPAOQI"
        },
        {
            title: "Jurassic Park 3",
            duration: "127 min",
            genre: "Action, Adventure, Sci-Fi",
            description: "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
            year: "2001",
            image: "../assets/images/jurassicpark3.jpg" ,
            video: "https://www.youtube.com/embed/gjIaV6CU0wA"
        }
    ];
}
