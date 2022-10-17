import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const search = "avengers";
		const url = `http://www.omdbapi.com/?s=${search}&apikey=f235d7e2`;

		const response = await fetch(url);
		const responseJson = await response.json();
    
    console.log (responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
		<div className='movie-app'>
      <div className='navbar'>
        <nav id="left">
            <a href="#">Icon</a>
            <a href="#">Home</a>
            <a href="#">MyList</a>
            <a href="#">123</a>                  
            <a href="#">Resume</a>
            <a href="#">View by Language</a>
        </nav>
        <SearchBar placeholder="Search..."/>
        <nav id="right">
          <a href="#"><i class="fa fa-cog">test</i></a> 
          <a>2</a>
          <a>3</a>  
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
