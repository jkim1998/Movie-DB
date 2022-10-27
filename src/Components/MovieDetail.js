import { useState, useEffect } from 'react';
import React from 'react'
import './MovieDetail.css'
import MovieList from './MovieList';
import MyList from './MyList';
import { Movie } from '@material-ui/icons';

function MovieDetail(props, movieid) {
  const [movies, setMovies] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const getMovieDetail = async (movieid) => {
    const url = `http://www.omdbapi.com/?i=${movieid}&apikey=f235d7e2`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieDetail(movieid);
	}, [movieid]);
 
    
  return (props.trigger) ? (
    // {movieid.movies.map((movie, index) => (
    <div className='popup'>
        <div className='popup-inner'>
          <div className='top'>
            <div className='image-container'>
              {/* <img src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg" alt='movie' className='poster'></img> */}
               <img src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg" alt='movie' className='poster'></img>
              <button>Add to List</button>
              <button>Mark as "viewed"</button>
            </div>
            <div className='info'>
              <p> Title:  </p>
              <p> Year: <MyList /></p>
              <p> PG </p>
              <p> rating</p>
              <p> directed by</p>
              <p> actor</p>
              <p> summary</p>
              <p> genre </p> 
            </div>
          </div>
          <div className='bot'>
            <div className='summary'>
              <p>Summary: It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.</p>
            </div>    
          </div>
          <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
    </div>
    // ))}) : "";
    ) : "";
}

export default MovieDetail

