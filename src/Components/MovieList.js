import { useState } from 'react';
import React from 'react';
import './MovieList.css';
import MovieDetail from './MovieDetail';


const MovieList = (searchinput) => {
	const [buttonPopup, setButtonPopup] = useState(false);
		return (
			<>
				{searchinput.movies.map((movie, index) => (
					<div className='image_container'>
						<div className='poster_container'>
							<div classname='detail' ></div>
							<img src={movie.Poster} alt='movie' className='poster'onClick={() => setButtonPopup(true)}></img>
							<MovieDetail trigger={buttonPopup} setTrigger={setButtonPopup} movieid={'tt0848228'}/>
							</div>
						<div className='title'>{movie.Title}</div>
					</div>
					
				))}
			</>
		);
	};


export default MovieList;