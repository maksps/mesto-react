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
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getAllCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err))
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser.userId);  // проверяем, есть ли уже лайк на этой карточке
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c)); // Отправляем запрос в API и получаем обновлённые данные карточки
    }).catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    }).catch((err) => console.log(err));
  }


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

  function handleUpdateUser(data) {
    api.editProfile({
      name: data.name,
      about: data.about
    }).then((item) => {
      setCurrentUser({
        userName: item.name,
        userDescription: item.about,
        userAvatar: item.avatar,
        userId: item._id
      });
      closeAllPopups()
    }).catch((err) => console.log(err))
  };

  function handleUpdateavatar(data) {
    api.changeAvatar(data).then((item) => {
      setCurrentUser({
        userName: item.name,
        userDescription: item.about,
        userAvatar: item.avatar,
        userId: item._id
      });
      closeAllPopups()
    }).catch((err) => console.log(err))
  };

  function handleAddPlaceSubmit(data) {
    api.addCard({
      name: data.name,
      link: data.link
    }).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    }).catch((err) => console.log(err))
  };

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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          title={'Вы уверены'}
          name={'confirm'}
          isOpen={false}
          onClose={closeAllPopups}
          textButton={'Да'} />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateavatar} />

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
