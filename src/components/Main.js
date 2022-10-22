import React from "react";
import '../index.css';
import avatar from '../images/kusto-avatar.png';

function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_avatar').classList.add('popup_opened');
    }
    function handleEditProfileClick() {
        document.querySelector('.popup_edit').classList.add('popup_opened');
    }
    function handleAddPlaceClick() {
        document.querySelector('.popup_add').classList.add('popup_opened');
    }

    return (
        <main className="main">
            <section className="profile">
                <button
                    className="profile__avatar-button"
                    onClick = {handleEditAvatarClick}
                    type="button"
                    aria-label="редактировать аватар">
                    <img
                        className="profile__avatar-img"
                        src={avatar} alt="Аватар" />
                </button>


                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button profile__edit-btn-image" onClick = {handleEditProfileClick} type="button"
                        aria-label="Редактировать" ></button>
                </div>
                <p className="profile__job">Исследователь океана</p>
                <button className="profile__add-button" onClick = {handleAddPlaceClick} type="button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
            </section>


            <div className="popup popup_edit">
                <div className="popup__container popup__container_edit">
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <form className="popup__form" name="profileEdit" noValidate autoComplete="off">
                        <div className="input">
                            <input type="text" placeholder="Имя" name="nameInput" className="input__text input__text_type_name"
                                minLength="2" maxLength="40" required />
                            <span className="popup__input-error nameInput-error"></span>
                            <input type="text" placeholder="О себе" name="jobInput" className="input__text input__text_type_job"
                                minLength="2" maxLength="200" required />
                            <span className="popup__input-error jobInput-error"></span>
                        </div>
                        <button className="popup__btn-save" type="submit"> Сохранить</button>
                    </form>
                    <button className="popup__btn-exit" type="button" aria-label="выход"></button>
                </div>
            </div>

            <div className="popup popup_add">
                <div className="popup__container popup__container_add">
                    <h3 className="popup__title">Новое место</h3>
                    <form className="popup__form formElementAdd" name="placeAdd" noValidate autoComplete="off">
                        <div className="input">
                            <input type="text" placeholder="Название" name="name" minLength="2" maxLength="30" required
                                className="input__text input__text_type_placename" />
                            <span className="popup__input-error name-error"></span>
                            <input type="url" placeholder="Ссылка на картинку" name="link" className="input__text input__text_type_link"
                                required />
                            <span className="popup__input-error link-error"></span>
                        </div>
                        <button className="popup__btn-save" type="submit"> Создать</button>
                    </form>
                    <button className="popup__btn-exit" type="button" aria-label="выход"></button>
                </div>
            </div>

            

            <div className="popup popup_confirm">
                <div className="popup__container popup__container_confirm">
                    <h3 className="popup__title">Вы уверены</h3>
                    <button className="popup__btn-save popup__btn-confirm" type="button" aria-label="согласие">Да</button>
                    <button className="popup__btn-exit" type="button" aria-label="выход"></button>
                </div>
            </div>

            <div className="popup popup_avatar">
                <div className="popup__container popup__container_avatar">
                    <h3 className="popup__title">Обновить аватар</h3>
                    <form className="popup__form" name="avatarChange" noValidate autoComplete="off">
                        <div className="input">
                            <input type="url" placeholder="Ссылка на картинку" name="avatar" className="input__text input__text_type_avatar"
                                required />
                            <span className="popup__input-error avatar-error"></span>
                        </div>
                        <button className="popup__btn-save" type="submit">Сохранить</button>
                    </form>
                    <button className="popup__btn-exit" type="button" aria-label="выход"></button>
                </div>
            </div>
        </main>
    )

}

export default Main;