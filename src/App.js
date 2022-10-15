import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=avengers&apikey=f235d7e2`;

		const response = await fetch(url);
		const responseJson = await response.json();
    
    console.log (responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
		<div className='container-fluid movie-app'>
      <h1>movies</h1>
			<div className='row'>        
				<MovieList movies={movies} />
			</div>
    </div>
	);
};

export default App;
