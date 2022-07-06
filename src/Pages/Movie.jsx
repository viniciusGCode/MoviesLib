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
					</h3>
						<p>{formatCurrency(movie.budget)}</p>
				</div>
				<div className="info">
					<h3>
						<BsGraphUp/> Faturamento:
					</h3>
						<p>{formatCurrency(movie.revenue)}</p>
				</div>
				<div className="info">
					<h3>
						<BsHourglassSplit/> Duração:
					</h3>
						<p>{movie.runtime} minutos</p>
				</div>
				<div className="info">
					<h3 className='description'>
						<BsFillFileEarmarkTextFill/> Descrição:
					</h3>
						<p>{movie.overview}</p>
				</div>
				</>
				)
			}
		</div>
	)
}

export default Movie;