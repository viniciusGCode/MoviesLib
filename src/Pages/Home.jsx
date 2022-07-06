import React from 'react';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import "./MoviesGrid.css"

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([]);

	const getPopularMovies = async (url) => {

		const res = await fetch(url);
		const data = await res.json();

		setPopularMovies(data.results);
		
	}

	useEffect(() => {

		const popularMoviesUrl = `${moviesUrl}popular${apiKey}&language=pt-BR`;

		getPopularMovies(popularMoviesUrl);

	}, []);


	return (
		<div className='Home'>
			<div className="container">
				<div className="title">
					<h2>Filmes mais Populares:</h2>
				</div>

				<div className="movies-container">
					{
						popularMovies.length > 0 && popularMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/> )
					}
				</div>
			</div>
		</div>
	)
}

export default Home;