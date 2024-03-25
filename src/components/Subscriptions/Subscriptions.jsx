import React from "react";
import './Subscriptions.css'
import ButtonNavigation from "../ButtonNavigation/ButtonNavigation";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import subscriptions from "../../utils/subscriptions";
import SubscriptionsCards from "../SubscriptionsCards/SubscriptionsCards";

const responsive = {
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 2
    }
};

export default function Subscriptions({ isSigned }) {

    return (
        <>
            <section className="subscriptions">
                <div className="subscription__nav">
                    <h2 className="subscriptions__title">Мои подписки</h2>
                    <ButtonNavigation
                    path={'subscribe'} />
                </div>
                {isSigned ? (
                    <Carousel responsive={responsive}
                        swipeable={true}>
                        {subscriptions.map(item => (
                            <SubscriptionsCards props={item} />
                        ))}
                    </Carousel>
                ) : (
                    <div>
                        <p className="subscriptions__proposal">Подключите подписку
                            из каталога или перенесите существующую чтобы получать кэшбек
                            и управлять своими подписками</p>
                        <div className="subscriptions__none">
                            <ButtonSubmit
                                modificator={'light'}
                                buttonTitle={'Искать мои подписки'}
                                path={'/'}
                            />
                            <ButtonSubmit
                                modificator={'color'}
                                buttonTitle={'Перейти в каталог'}
                                path={'/'} />
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}