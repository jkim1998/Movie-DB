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
import MovieDetail from './Components/MovieDetail';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);

	const getMovieRequest = async (searchValue) => {
    if (typeof serachValue === 'string' && searchValue.trim().length === 0) {
      const url = `http://www.omdbapi.com/?s=avengers&apikey=f235d7e2`;
    }

		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f235d7e2`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
    console.log("search: " & searchValue);
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
            <a href="#">Watch List</a>
            <a href="#">Series</a>                  
            <a href="#">Trend</a>
            <a href="#">View History</a>
            <div classname='detail' onClick={() => setButtonPopup(true)}>test</div>
            <MovieDetail trigger={buttonPopup} setTrigger={setButtonPopup}> 
              <h3>mypopup</h3> 
            </MovieDetail>
        </nav>
        <nav id="right">
          <a1><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /></a1>
          {/* <a><button><SearchIcon /></button></a>  */}
          <a><SettingsIcon /></a>
          <a><AccountCircleIcon /><ArrowDropDownIcon /></a>  
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
