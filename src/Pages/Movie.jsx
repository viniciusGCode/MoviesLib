import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
	BsGraphUp,
	BsWallet2,
	BsHourglassSplit,
	BsFillFileEarmarkTextFill
} from "react-icons/bs";

import "./Movie.css";
import MovieCard from '../components/MovieCard/MovieCard.jsx';


const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Movie = () => {
	const {id} = useParams();
	const [movie, setMovie] = useState(null);

	const getMovie = async (url) => {
		
		const res = await fetch(url);
		const data = await res.json();

		setMovie(data);
	}

	useEffect(() => {
		const movieUrl = `${moviesUrl}${id}${apiKey}&language=pt-BR`;

		getMovie(movieUrl);
	}, []);


	const formatCurrency = (n) => {
		return n.toLocaleString("en-US", {
			style: "currency",
			currency: "USD"
		})
	}

	return (
		<div className='movie-page'>
			{
				movie && (
				<>
				<MovieCard movie={movie} showLink={false}/>
				<p className="tagline">{movie.tagline}</p>
				<div className="info">
					<h3>
						<BsWallet2/> Orçamento:
						<p>{formatCurrency(movie.budget)}</p>
					</h3>
				</div>
				<div className="info">
					<h3>
						<BsGraphUp/> Faturamento:
						<p>{formatCurrency(movie.revenue)}</p>
					</h3>
				</div>
				<div className="info">
					<h3>
						<BsHourglassSplit/> Duração:
						<p>{movie.runtime} minutos</p>
					</h3>
				</div>
				<div className="info">
					<h3 className='description'>
						<BsFillFileEarmarkTextFill/> Descrição:
						<p>{movie.overview}</p>
					</h3>
				</div>
				</>
				)
			}
		</div>
	)
}

export default Movie;