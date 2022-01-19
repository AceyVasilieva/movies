import React from 'react'
import { Link } from 'react-router-dom';

export const Dropdown = () => {
    return (
        <li className='user-dropdown'>
            <Link to='/favorites'>
                    Favorites
            </Link>
        </li>
    )
}
