import React, { useState, useEffect } from "react";
import logo from '../images/logo-header.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((info) => {
        setCurrentUser({
          userName: info.name,
          userDescription: info.about,
          userAvatar: info.avatar,
          userId: info._id
        });

      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name: name, link: link, isOpen: true })
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          logo={logo}
        />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />


        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} 
        />


        <PopupWithForm
          title={'Новое место'}
          name={'add'}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          textButton={'Создать'}>
          <div className="input">
            <input type="text" placeholder="Название" name="name" minLength="2" maxLength="30" required
              className="input__text input__text_type_placename" />
            <span className="popup__input-error name-error"></span>
            <input type="url" placeholder="Ссылка на картинку" name="link" className="input__text input__text_type_link"
              required />
            <span className="popup__input-error link-error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm
          title={'Вы уверены'}
          name={'confirm'}
          isOpen={false}
          onClose={closeAllPopups}
          textButton={'Да'} />

        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          textButton={'Сохранить'}>
          <div className="input">
            <input type="url" placeholder="Ссылка на картинку" name="avatar" className="input__text input__text_type_avatar"
              required />
            <span className="popup__input-error avatar-error"></span>
          </div>
        </PopupWithForm>

        <ImagePopup
          selectedCard={selectedCard}
          onClose={closeAllPopups}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
