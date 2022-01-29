import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import UserProfile from './UserProfile/UserProfile';

import './Header.css'; 

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <FontAwesomeIcon className='logo-img' icon={faGlobe} />
                <div>Movies</div>
            </Link> 
            <UserProfile />
        </div>
    )
}

export default Header;