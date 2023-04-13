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

const renderMovies = () => {
	const movies = movieData.results;
	movies.forEach((movie)=>{
	})
}
renderMovies();

// open and close left sidebar
toggleSidebar.addEventListener('click', function() {
	let sidebar = document.querySelector('section.sidebar');
	sidebar.classList.toggle('sidebar-closed');
});



