import { Movie } from '@material-ui/icons';
import React from 'react'
import './MovieDetail.css'
import MovieList from './MovieList';

function MovieDetail(props) {
    
    
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='info'>
                <div className='image-container'>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"></img>
                </div>
                <div className='summary'>
                    <h1> Title: {Movie.Title} </h1>
                    <h2> Year: </h2>
                
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