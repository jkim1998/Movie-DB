import { useState, useEffect } from 'react';
import MovieData from './moviedata.json';
import React from 'react'
import './MovieDetail.css'
import MovieList from './MovieList';
import MyList from './MyList';
import { Movie } from '@material-ui/icons';
import Home from'./Home';

const MovieDetail = (props) => {
    const [movies, setMovies] = useState([]);
    const [omdbID, setOmdbID] = useState('');
    const APIKEY = 'f235d7e2';	

    const getMovieDetail = async (omdbID) => {
    const url = `http://www.omdbapi.com/?i=${omdbID}&apikey=${APIKEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieDetail(omdbID);
	}, [omdbID]);
 
    
  return (props.trigger) ? (
    // {.movieDetail.map((movieDetails, index) => (
    <div className='popup'>
        <div className='popup-inner'>
          <div className='top'>
            <div className='image-container'>
            <img src = {MovieData.Poster} alt = "movie poster" />
              <button>Add to List</button>
              <button>Mark as "viewed"</button>
            </div>
           
            <div className='info'>
              <h3 class = "movie-title">{MovieData.Title}</h3>
                <ul class = "movie-misc-info">
                    <li class = "year">Year: {MovieData.Year}</li>
                    <li class = "rated">Ratings: {MovieData.Rated}</li>
                    <li class = "released">Released: {MovieData.Released}</li>
                </ul>
                <p class = "genre"><b>Genre:</b> {MovieData.Genre}</p>
                <p class = "writer"><b>Writer:</b> {MovieData.Writer}</p>
                <p class = "actors"><b>Actors: </b>{MovieData.Actors}</p>
                <p class = "plot"><b>Plot:</b> {MovieData.Plot}</p>
                <p class = "language"><b>Language:</b> {MovieData.Language}</p>
                <p class = "awards"><b><i class = "fas fa-award"></i></b> {MovieData.Awards}</p>
            
            </div>
          </div>
          {/* <div className='bot'>
            <div className='summary'>
            </div>    
          </div> */}
          <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
    </div>
    // ))}) : "";
    ) : "";
}

export default MovieDetail

