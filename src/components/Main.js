import React, { useState } from "react";
import '../index.css';
import avatar from '../images/kusto-avatar.png';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {


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
                        src={avatar} alt="Аватар" />
                </button>


                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button profile__edit-btn-image" onClick={onEditProfile} type="button"
                        aria-label="Редактировать" ></button>
                </div>
                <p className="profile__job">Исследователь океана</p>
                <button className="profile__add-button" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
            </section>

           
        </main>
    )

}

export default Main;