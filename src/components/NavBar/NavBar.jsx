import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
import {BsCameraReelsFill} from "react-icons/bs";
import { useState } from 'react';

import './NavBar.css';

const NavBar = () => {

	const [search, setSearch] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (!search) return;

		navigate(`/search?q=${search}`);
		setSearch("");
	}

	return (
		<nav className="navbar">
			<h2>
				<Link to="/"><BsCameraReelsFill/>0xMovies</Link>
			</h2>
			<form onSubmit={handleSubmit}>
				<input type="text" name="search" id='search' placeholder='Procure por filmes' onChange={(e) => setSearch(e.target.value)} value={search}/>
				<button type='submit'>
					<FaSearch/>
				</button>
			</form>
		</nav>
	)
}

export default NavBar