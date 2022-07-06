import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from "../components/MovieCard/MovieCard";

import "../components/MovieCard/MovieCard.css"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;



const Search = () => {

	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState([]);
	const query = searchParams.get("q");


	return (
		<div className='Search'>
			<div className="container">
				<div className="title">
					<h2>Resultados para:
						<span className='query-text'> {query}</span>
					</h2>
				</div>

				<div className="movies-container">

				</div>
			</div>
		</div>
	)
}

export default Search;