import React from 'react';
import './NavBar.css';
// import App from '../App';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons//Settings';

export const NavBar = () => {
    return (
        <div className='tes1t'>
            {/* <p>asdf</p> */}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='test'>
                    <LiveTvIcon className="svg_icons"/>
                </div>
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className='test'>
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/Movie" style={{ textDecoration: 'none' }}>
                <div className='test'>
                    <p>View List</p>
                </div>
            </Link>
            <Link to="/Viewed" style={{ textDecoration: 'none' }}>
                <div className='test'>
                    <p>View History</p>
                </div>
            </Link>
        </div>
    )
}

export default NavBar;