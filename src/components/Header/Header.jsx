import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { store } from '../../store/store.jsx'
import { EDIT_IS_SIGNED } from "../../utils/constants";

export default function Header() {
    const isSigned = useSelector((state) => state.isSigned);
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
    }

    function handleActiveClick() {
        store.dispatch({
            type: EDIT_IS_SIGNED,
            playload: {
                isSigned: true,
            }
        })
    }

    function handleDisactiveClick() {
        store.dispatch({
            type: EDIT_IS_SIGNED,
            playload: {
                isSigned: false,
            }
        })
    }

    return (
        <>
            <header className='header'>
                <button className='header__back' onClick={handleClick}></button>
                {!isSigned ? (
                    <button className="button" onClick={handleActiveClick}>Есть активные подписки</button>
                ) : (
                    <button className="button" onClick={handleDisactiveClick}>Нет активных подписок</button>
                )}
            </header>
        </>
    )
}