import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import UserProfile from './UserProfile/UserProfile';

import './Header.css'; 

const Header = () => {
    return (
        <div className='header'>
            <div>
                <Link to='/' className='logo'><FontAwesomeIcon className='logoimg' icon={faGlobe} />  Movies </Link>
            </div>
            <div>
                <UserProfile />
            </div>
        </div>
    )
}

export default Header;