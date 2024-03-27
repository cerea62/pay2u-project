import React from "react";
import { EDIT_IS_SIGNED } from "../../utils/constants";
import './Main.css'
import Banner from "../Banner/Banner";
import Subscriptions from "../Subscriptions/Subscriptions";
import Services from "../Services/Services";
import {store} from '../../store/store.jsx'


export default function Main() {
    function handleClick() {
        store.dispatch({
            type: EDIT_IS_SIGNED,
            playload: {
                isSigned: true,
            }
        })
    }

    return (
        <>
            <main className="main">
                <div className="main__up">
                    <h1 className="main__title">Подписки</h1>
                    <button className="main__button" onClick={handleClick}></button>
                </div>

                <Banner />
                <Subscriptions />
                <Services />
            </main>
        </>
    )
}