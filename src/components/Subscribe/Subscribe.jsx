import React from 'react';
import { useSelector } from 'react-redux';
import './Subscribe.css'
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import SubscriptionsCards from '../SubscriptionsCards/SubscriptionsCards';
import subscriptions from "../../utils/subscriptions";

function Subscribe() {
    const isSigned = useSelector((state) => state.isSigned);
    return (
        <>
            <section className='subscripe'>
                <h2 className='subscripe__title'>Мои подписки</h2>
                <h3 className='subscripe__subtitle'>Подключенные</h3>
                {isSigned ?
                    (<ul className='subscripe__list'>
                        {subscriptions.map(item => (
                            <SubscriptionsCards
                                id={item.id}
                                cost={item.cost}
                                logo={item.logo}
                                period={item.period}
                                title={item.title}
                                duration={item.duration} />
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
                        path={'/'} />
                </div>
                <h3 className='subscripe__subtitle'>Неактивные</h3>
            </section>

        </>
    );
}

export default Subscribe;