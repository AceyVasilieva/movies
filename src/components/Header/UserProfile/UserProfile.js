import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './UserProfile.css'; 
import { Dropdown } from './Dropdown';

const UserProfile = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = () => {
        setIsDropdownOpen(!isDropdownOpen)
    };
    
    return ( 
        <div className='user-profile'>
            <div  onClick={handleClick}>
                    My Account 
                    <FontAwesomeIcon className='user-profile-img' icon={faChevronDown} />
                    {isDropdownOpen && createPortal(<Dropdown />, document.getElementById('modal')) }
            </div>
        </div>
    )
};

export default UserProfile;