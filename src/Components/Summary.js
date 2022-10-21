import MovieList from "./MovieList";
import { useState } from 'react';
import React from 'react';
import './Summary.css';
import MovieDetail from './MovieDetail';

function Summary(props) {
    
    const Summary1 = (searchinput) => {
		return (
			<>
				{searchinput.movies.map((movie, index) => (
			
						<div className='title'>11{movie.Title}</div>
					
				))}
			</>
		);
	};

}
export default Summary;