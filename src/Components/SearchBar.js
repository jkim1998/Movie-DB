import React from 'react';
import './SearchBar.css';
import SearchIcon from "@material-ui/icons/Search";
import getMovieRequest from '../App.js';

// function SearchBar({placeholder, data}) {
//   return (
//     <div className='search'>
//         <div className='searchinputs'>
//           <SearchIcon /><input type="text" placeholder={placeholder} data={"data"} />
//           <div className='dataresults'>
              
//            </div>
//         </div>
//     </div>
//   )
// }
const SearchBar = (searchinput) => {
	return (
		<div className='search'>
			<SearchIcon /><input
				className='searchbar'
				value={searchinput.value}
				onChange={(event) => searchinput.setSearchValue(event.target.value)}
				placeholder='Search...'
			></input>
		</div>
	);
};

export default SearchBar