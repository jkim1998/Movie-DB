import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import MovieData from './Data.json';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons//Settings';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  const url = `http://www.omdbapi.com/?s=star&apikey=f235d7e2`;

	const getMovieRequest = async (searchValue) => {
    // var search = document.getElementById("searchinput").value;
    // if (searchValue = "1") {
    //   const url = `http://www.omdbapi.com/?s=$starwars&apikey=f235d7e2`;
    // }
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f235d7e2`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    
		<div className='movie-app'>
      <div className='navbar'>
        <nav id="left">
            <a href="#"><LiveTvIcon /></a>
            <a href="#">Home</a>
            <a href="#">MyList</a>
            <a href="#">Series</a>                  
            <a href="#">Trend</a>
            <a href="#">View by Language</a>
        </nav>
        <nav id="right">
          <a1><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /></a1>
          
          <a><SettingsIcon /></a>
          <a1><AccountCircleIcon /><ArrowDropDownIcon /></a1>  
        </nav>
        
        
      </div>
      <h1>movies</h1>  
			<div className='row'>
				<MovieList movies={movies} />
			</div>
    </div>
	);
};

export default App;
