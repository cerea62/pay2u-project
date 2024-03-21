import React, { useState } from "react";
import './Main.css'
import Banner from "../Banner/Banner";
import Subscriptions from "../Subscriptions/Subscriptions";
import Services from "../Services/Services";


export default function Main() {
    const [isSigned, setIsSigned] = useState(true); //заглушка для пользователя с подписками и без

    return (
        <>
            <main className="main">
                <h1 className="main__title">Подписки</h1>
                <Banner 
                isSigned={isSigned}/>
                <Subscriptions 
                isSigned={isSigned}/>
                <Services />
            </main>
        </>
    )
}