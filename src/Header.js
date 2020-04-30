import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="nav-bar">
                <Link to='books' className="link">Books</Link>
                <Link to='favorites' className="link">Favorites</Link>
                <Link to='login' className="link">Log In</Link>
                <Link to='signup' className="link">Sign Up</Link>
            </nav>
            <h1>Book Finder</h1>
        </header>
    )
}

export default Header;