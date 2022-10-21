import { Movie } from '@material-ui/icons';
import React from 'react'
import './MovieDetail.css'

function MovieDetail(props) {
    
    
  return (props.trigger) ? (
    
    <div className='popup'>
        <div className='popup-inner'>
            <div className='info'>
                <div className='image-container'>
                    
                {/* <img src={movie.Poster} alt='movie' className='poster'></img> */}
                </div>
                <div className='summary'>
                    <p> Title: {Movie.Title} </p>
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

// change