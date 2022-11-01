import React, { useEffect, useState, useContext } from "react";
import '../index.css';
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [cards, setCards] = useState([]); 
    const currentUser = useContext(CurrentUserContext);
    
    useEffect(() => { 
        api.getAllCards() 
            .then((data) => { 
                setCards(data); 
            }) 
            .catch((err) => console.log(err)) 
    }, []);

    function handleCardLike(card) {
       
        const isLiked = card.likes.some(i => i._id === currentUser.userId);  // проверяем, есть ли уже лайк на этой карточке
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); // Отправляем запрос в API и получаем обновлённые данные карточки
        });
    }


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
                        src={currentUser.userAvatar}
                        alt="Аватар" />
                </button>

                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.userName}</h1>
                    <button className="profile__edit-button profile__edit-btn-image" onClick={onEditProfile} type="button"
                        aria-label="Редактировать" ></button>
                </div>
                <p className="profile__job">{currentUser.userDescription}</p>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
                {
                   
                    cards.map((card) => (
                        <Card
                            card={card}
                            onCardClick={onCardClick}
                            key={card._id}
                            onCardLike={handleCardLike}
                        />
                        ))
                }
            </section>
        </main>
    )
}

export default Main;