import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
    }
    
    return (
        <>
            <header className='header'>
                <button className='header__back' onClick={handleClick}></button>
            </header>
        </>
    )
}