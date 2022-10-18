import { useState } from 'react';
import React from 'react';
import './MovieList.css';
import MovieDetail from './MovieDetail';



const MovieList = (searchinput) => {
	const [buttonPopup, setButtonPopup] = useState(false);		
		return (
			<>
				{searchinput.movies.map((movie, index) => (
					<div className='image_container' onClick={() => setButtonPopup(true)}>
						<img src={movie.Poster} alt='movie' className='poster'onClick={() => setButtonPopup(true)}></img>
						<div className='title'>{movie.Title}</div>
						<MovieDetail trigger={buttonPopup} setTrigger={setButtonPopup} />
					</div>
				))}
			</>
		);
	};


export default MovieList;