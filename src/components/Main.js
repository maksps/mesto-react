import React, { useState } from "react";
import '../index.css';
import avatar from '../images/kusto-avatar.png';
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    React.useEffect(() => {
        api.updateUserInfo()
            .then((info) => {
                setUserName(info.name);
                setUserDescription(info.about);
                setUserAvatar(info.avatar);
            })
            .catch((err) => console.log(err))
    }, []);

    React.useEffect(() => {
        api.getAllCards()
            .then((data) => {
                setCards(data);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <button
                    className="profile__avatar-button"
                    onClick={onEditAvatar}
                    type="button"
                    aria-label="редактировать аватар">
                    <img
                        className="profile__avatar-img"
                        src={userAvatar}
                        alt="Аватар" />
                </button>

                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button profile__edit-btn-image" onClick={onEditProfile} type="button"
                        aria-label="Редактировать" ></button>
                </div>
                <p className="profile__job">{userDescription}</p>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
                {
                    cards.map((card) => (
                        <Card
                            card={card}
                            onCardClick = {onCardClick}
                        />))
                }
            </section>
        </main>
    )
}

export default Main;