import React, { useState, useEffect, Component  } from 'react';
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
	const [searchValue, setSearchValue] = useState('spider');
  const [buttonPopup, setButtonPopup] = useState(false);
  const [count, setCount] = useState(2);
  const APIKEY = 'f235d7e2';	

	const getMovieRequest = async (searchValue) => {
    if (typeof serachValue === 'string' && searchValue.trim().length === 0) {
      const url = `http://www.omdbapi.com/?s=avengers&apikey=${APIKEY}`;
    }
    	const url = `http://www.omdbapi.com/?s=${searchValue}&page=${count}&apikey=${APIKEY}`;
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
  <div>  
      <title>My Page Title</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
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
          <a><SearchBar searchValue={searchValue} setSearchValue={setSearchValue} /></a>
          <a class='dropdown'><AccountCircleIcon /><ArrowDropDownIcon />
            <div class="dropdown-content">
              <p>Welcome User!</p>
              <p>Account Setting</p>
              <p>Dark mode</p>
              <p>Log Out</p>
            </div>
          </a>
        </nav>
      </div>
        <div className='row'>
          <MovieList movies={movies} />
        </div> 
        <button onClick={() => setCount(count++)}>Click to increment by 1</button>
        <button 
            onClick={() => setCount(count--)}
            disabled={count === 1}>
            Click to decrease by 1
        </button>
    </div>
  </div>
	);
};


export default App;


