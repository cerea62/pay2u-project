import React from 'react';
import './ButtonNavigation.css'
import { Link } from 'react-router-dom';

function ButtonNavigation({ path }) {
    return (
        <Link className="button-navigation" to={path}></Link>
    )
}

export default ButtonNavigation;