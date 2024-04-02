import React from "react";
import './Main.css'
import Banner from "../Banner/Banner";
import Subscriptions from "../Subscriptions/Subscriptions";
import Services from "../Services/Services";



export default function Main() {

    return (
        <>
            <main className="main">
                <h1 className="main__title">Подписки</h1>
                <Banner />
                <Subscriptions />
                <Services />
            </main>
        </>
    )
}