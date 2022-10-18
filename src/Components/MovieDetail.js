import React from 'react'
import './MovieDetail.css'


function MovieDetail(props) {
    
    
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
        </div>
    </div>
  ) : "";
}

export default MovieDetail