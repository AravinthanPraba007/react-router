import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>React- Router</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/signup">
                <li>SignUp</li>
                </Link>
               <Link style={navStyle} to="/login">
               <li>Login</li>
               </Link>
            </ul>
        </nav>
    );
}

export default Nav;
