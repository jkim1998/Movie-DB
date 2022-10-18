import React from 'react';
import './SearchBar.css';
import SearchIcon from "@material-ui/icons/Search";
import getMovieRequest from '../App.js';

const SearchBar = (searchinput) => {
	return (
		<div className='search'>
			<SearchIcon style={{fill: "rgb(0, 0, 0)"}}/><input
				className='searchbar'
				value={searchinput.value}
				onChange={(event) => searchinput.setSearchValue(event.target.value)}
				placeholder='Search...'
			></input>
		</div>
	);
};

export default SearchBar