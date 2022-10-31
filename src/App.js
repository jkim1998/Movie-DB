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

const App = () => {
  document.title = 'Movie DB';
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('spider');
  const [buttonPopup, setButtonPopup] = useState(false);
  const [count, setCount] = useState(1);
  // const [count, setCount] = useState(() => countInitial());
  const [omdbID, setOmdbID] = useState('');
  const APIKEY = 'f235d7e2';	

	const getMovieRequest = async (searchValue) => {
   
    // count is not updating
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
  

  function countInitial() {
    return 1;
  }

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }


  return (
  <div>  
      <title>My Page Title</title>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
		<div className='movie-app'>
      <div className='navbar'>
            <Router>
             <NavBar />
              <Routes>
                {/* <Route exact path='/' element={<App />}>Home</Route> */}
                <Route exact path='/MyList' element={<MyList />}>MyList</Route>
                <Route exact path='/Viewed' element={<ViewHistory />} />
              </Routes>
            </Router>
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
        <button onClick={incrementCount}>Next</button>
        <p>{count}</p>
        <button onClick={decrementCount} disabled={count< 2}>Prev</button>
    </div>
  </div>
	);
};


export default App;