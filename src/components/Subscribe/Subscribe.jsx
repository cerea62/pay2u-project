import React from 'react';
import { useSelector } from 'react-redux';
import './Subscribe.css'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import SubscriptionsCards from '../SubscriptionsCards/SubscriptionsCards';
import subscriptions from "../../utils/subscriptions";
import inactiveCards from '../../utils/inactiveCards';
import InactiveSubscriptionsCard from '../InactiveSubscriptionsCard/InactiveSubscriptionsCard';
import SearchForm from '../SearchForm/SearchForm';

function Subscribe() {
    const isSigned = useSelector((state) => state.isSigned);
    return (
        <>
            <main className='subscripe'>
                <h1 className='subscripe__title'>Мои подписки</h1>
                {isSigned ? (
                    <SearchForm />
                ) : (null)
                }
                <h2 className='subscripe__subtitle'>Подключенные</h2>
                {isSigned ?
                    (<ul className='subscripe__list'>
                        {subscriptions.map(item => (
                            <li key={item.id} className='subscriptions__card subscriptions__card_type_big'>
                                <SubscriptionsCards
                                    id={item.id}
                                    cost={item.cost}
                                    logo={item.logo}
                                    period={item.period}
                                    title={item.title}
                                    duration={item.duration}
                                    cash={item.cash} />
                            </li>
                        ))}
                    </ul>) :
                    (<p className='subscripe__text'>У вас пока нет подписок.
                        Подключите подписку из каталога или перенесите существующую
                        чтобы получать кэшбек и управлять своими подписками.</p>)
                }


                <div className="subscripe__button">
                    <ButtonSubmit
                        modificator={'light'}
                        buttonTitle={'Найти мои подписки'}
                        path={'/'}
                    />
                    <ButtonSubmit
                        modificator={'color'}
                        buttonTitle={'Перейти в каталог'}
                        path={'/pay2u-project/subscription-catalog'} />
                </div>
                <h2 className='subscripe__subtitle'>Неактивные</h2>
                {isSigned ? (
                    <ul className='inactive-subscribe'>
                        {inactiveCards.map(item => (
                            <InactiveSubscriptionsCard
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                logo={item.logo}
                                cost={item.cost}
                            />
                        ))}
                    </ul>
                ) : (null)}
            </main>

        </>
    );
}

export default Subscribe;