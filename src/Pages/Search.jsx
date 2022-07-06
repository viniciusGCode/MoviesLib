import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from "../components/MovieCard/MovieCard";

import "../components/MovieCard/MovieCard.css"




const Search = () => {
	const searchURL = import.meta.env.VITE_SEARCH;
	const apiKey = import.meta.env.VITE_API_KEY;

	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState([]);
	const query = searchParams.get("q");



	const getSearchedMovies = async (url) => {

		const res = await fetch(url);
		const data = await res.json();

		setMovies(data.results);
		
	}

	useEffect(() => {

		const searchedMoviesUrl = `${searchURL}${apiKey}&query=${query}&language=pt-BR`;

		getSearchedMovies(searchedMoviesUrl);

	}, [query]);


	return (
		<div className='Search'>
			<div className="container">
				<div className="title">
					<h2>Resultados para:
						<span className='query-text'> {query}</span>
					</h2>
				</div>

				<div className="movies-container">
					{
						movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} key={movie.id}/> )
					}
				</div>
			</div>
		</div>
	)
}

export default Search;