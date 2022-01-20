import React from 'react'
import { Link } from 'react-router-dom';

export const Dropdown = () => {
    return (
        <div>
            <Link to='/favorites' className='user-dropdown'>
                    Favorites
            </Link>
        </div>
    )
}
