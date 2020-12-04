import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = (props) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            Home
        </Link>
        <Link className='logo-container' to='/about'>
            About
        </Link>
    </div>
);


export default Header;
