import {keys} from "./keys.js";
import {toggleSidebar} from "./variables.js";

// gets movies from API and stores them in "movies" variable
const fetchMovies = async () => {
	try {
		let response = await fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=${keys.TMDB_KEY}`);
		return await response.json();
 	} catch (error){
		console.log(error);
	}
}
let movieData = await fetchMovies();
console.log(movieData);


const postMovieToDB = async (movie) => {
	try {
		await fetch('http://localhost:3000/movies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: movie.title,
				genre: movie.genre_id,
				description: movie.overview,
				posterPath: movie.poster_path
			})
		})
	} catch (error){
		console.log(error);
	}
}


// place movies onto page
const movies = movieData.results;
const renderMovies = async () => {
	movies.forEach((movie)=>{
		postMovieToDB(movie);
	});
}
await renderMovies();


// open and close left sidebar
toggleSidebar.addEventListener('click', function() {
	let sidebar = document.querySelector('section.sidebar');
	sidebar.classList.toggle('sidebar-closed');
});

// genre ids for movies
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37



