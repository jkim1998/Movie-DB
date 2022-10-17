import React from 'react';
import './MovieList.css';

const MovieList = (searchinput) => {
	return (
		<>
			{searchinput.movies.map((movie, index) => (
				<div className='image_container'>
					<img src={movie.Poster} alt='movie'></img>
					
				</div>
			))}
		</>
	);
};

export default MovieList;