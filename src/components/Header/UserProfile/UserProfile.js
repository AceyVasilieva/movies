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
            <span  onClick={handleClick}>
                <ul>
                    My Account 
                    <FontAwesomeIcon className='user-profile-img' icon={faChevronDown} />
                    {isDropdownOpen && createPortal(<Dropdown />, document.getElementById('modal'))}
                </ul>
            </span>
        </div>
    )
};

export default UserProfile;