import React from 'react';
import './ButtonSubmit.css'
import { Link } from 'react-router-dom';

function ButtonSubmit({modificator, buttonTitle, path}) {
    const buttonClassName = 'button-submit button-submit_type_'+modificator;
    return (
        <Link className={buttonClassName} to={path}>{buttonTitle}</Link>
    );
}

export default ButtonSubmit;