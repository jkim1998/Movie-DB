import React, { useState, useEffect } from 'react';
import MovieData from './moviedata.json';

const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

const Home = () => {	
    
	const [details, setDetails] = useState('');
	const [searchValue, setSearchValue] = useState('tt1259998');
    // const details = `http://www.omdbapi.com/?i=tt1259998&apikey=f235d7e2`;
    const getMovieRequest = async (searchValue) => {
                // console.log(movie.dataset.id);
                // searchList.classList.add('hide-search-list');
                // movieSearchBox.value = "";
                const result = await fetch(`http://www.omdbapi.com/?i=${searchValue}&apikey=f235d7e2`);
                const movieDetails = await result.json();
                // console.log(movieDetails);
                // displayMovieDetails(movieDetails);
            };
    
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
    
    return (
        <div>
            <div class = "movie-poster">
                <img src = {MovieData.Poster} alt = "movie poster" />
            </div>
            <button>Add to List</button>
              <button>Mark as "viewed"</button>
            <div class = "movie-info">
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
        
    )
};

export default Home;
