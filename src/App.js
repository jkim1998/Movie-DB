import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';
import ViewHistory from './Components/ViewHistory';
import SearchBar from './Components/SearchBar';
import MyList from './Components/MyList.js';
import MovieData from './Data.json';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons//Settings';
import MovieDetail from './Components/MovieDetail';
import { keepTheme } from './Components/Theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Header} from './Components/Header';
// import { Route, Routes } from "react-router-dom";

const App = () => {
  document.title = 'Movie DB';
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('avengers');
  const [buttonPopup, setButtonPopup] = useState(false);
  const [movieid, setMovieId] = useState('tt0848228');	

	const getMovieRequest = async (searchValue) => {
    if (typeof serachValue === 'string' && searchValue.trim().length === 0) {
      const url = `http://www.omdbapi.com/?s=avengers&apikey=f235d7e2`;
    }
    // const url = `https://api.themoviedb.org/3/movie/550?api_key=e5a60f35d7919e32ad95ee1d02bf9391`;
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f235d7e2`;
    // const url = `http://www.omdbapi.com/?i=tt0848228&apikey=f235d7e2`;

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
  <div>  
    <head>
      <title>My Page Title</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
    </head>
		<div className='movie-app'>
      <div className='navbar'>
        {/* <nav id="left"> */}
            {/* <button href="#"><LiveTvIcon /></button> */}
            {/* <button onClick={() => getMovieRequest('star wars')}>Home</button> */}
            <Router>
             <NavBar />
              <Routes>
                {/* <Route exact path='/' element={<App />}>Home</Route> */}
                <Route exact path='/MyList' element={<MyList />}>MyList</Route>
                <Route exact path='/Viewed' element={<ViewHistory />} />
              </Routes>
            </Router>
            {/* <button href="#">Trend</button> */}
            {/* <button href="#">View History</button> */}
        {/* </nav> */}
        <nav id="right">
          <a1><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /></a1>
          <a1 class='dropdown'><AccountCircleIcon /><ArrowDropDownIcon />
            <div class="dropdown-content">
              <p>Welcome User!</p>
              <p>Account Setting</p>
              <p>Dark mode</p>
              <p>Log Out</p>
            </div>
          </a1>
        </nav>
      </div>
        <div className='row'>
          <MovieList movies={movies} />
        </div> 
    </div>
  </div>
	);
};


export default App;


