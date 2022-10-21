import { useState } from 'react';
import React from 'react'
import './MovieDetail.css'
import MovieList from './MovieList';
import Summary from './Summary';
import { Movie } from '@material-ui/icons';

function MovieDetail(props) {
    
    
  return (props.trigger) ? (
    
    <div className='popup'>
        <div className='popup-inner'>
            <div className='info'>
                <div className='image-container'>
                    
                {/* <img src={movie.Poster} alt='movie' className='poster'></img> */}
                </div>
                <div className='summary'>
                    {/* <Detail /> */}
                    <p> Title: <Summary /> </p>
                    <p> Year: </p>
                    <p> PG </p>
                    <p> rating</p>
                    <p> directed by</p>
                    <p> actor</p>
                    <p> summary</p>
                    <p> awards </p> 
                    <p> trailer </p>
                    <p> genre </p>
                
                </div>
                
            </div>
            <button>Add to List</button>
                <button>Mark as "viewed"</button>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
    </div>
  ) : "";
}

export default MovieDetail

