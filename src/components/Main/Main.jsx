import React from "react";
import { useState } from "react";
import './Main.css'
import Banner from "../Banner/Banner";
import Subscriptions from "../Subscriptions/Subscriptions";
import Services from "../Services/Services";


export default function Main() {
    const [isSigned, setIsSigned] = useState(false); //заглушка для пользователя с подписками и без
    function handleClick() {
        setIsSigned(true);
    }
    console.log(isSigned);
    return (
        <>
            <main className="main">
                <div className="main__up">
                    <h1 className="main__title">Подписки</h1>
                    <button className="main__button" onClick={handleClick}></button>
                </div>

                <Banner 
                isSigned={isSigned} />
                <Subscriptions
                isSigned={isSigned} />
                <Services />
            </main>
        </>
    )
}