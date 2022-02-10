/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


import UserProfile from './UserProfile/UserProfile';

import './Header.css'; 

const Header = (props) => {

    const navigate = useNavigate();

    const goToHomePage = () => {
        props.setPage(1);
        navigate('/')
    }

    return (
        <div className='header'>
            <div className='logo' onClick={goToHomePage}>
                <FontAwesomeIcon className='logo-img' icon={faGlobe} />
                <div>Movies</div>
            </div> 
            <UserProfile />
        </div>
    )
}

export default Header;