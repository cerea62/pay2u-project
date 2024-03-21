import React from "react";
import { useLocation } from "react-router-dom";
import './PlannedCosts';
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation";

export default function PlannedCosts() {
    const location = useLocation();
    const path = location.pathname;


    return (
        <div className="planned-costs">
            <div className="planned-costs__cost">
                <p className="planned-costs__text">Планируемы расходы в марте</p>
                <p className="planned-costs__amount">826&#8381;</p>
                {path !== '/calendar' ?
                    (<ButtonNavigation
                        path='calendar' />) : (null)}
            </div>
            <p className="planned-costs__cashback">168&#8381;кэшбека зачислится 23 марта </p>
        </div>
    )
}