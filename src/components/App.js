import React, { useState } from "react";
import logo from '../images/logo-header.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm";




function App() {

  // const [isOpen, setOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
 

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }



  return (
    <div className="App">
      <Header
        logo={logo}
      />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
       <PopupWithForm
                title={'Редактировать профиль'}
                name={'edit'}
                children={<>
                    <div className="input">
                        <input type="text" placeholder="Имя" name="nameInput" className="input__text input__text_type_name"
                            minLength="2" maxLength="40" required />
                        <span className="popup__input-error nameInput-error"></span>
                        <input type="text" placeholder="О себе" name="jobInput" className="input__text input__text_type_job"
                            minLength="2" maxLength="200" required />
                        <span className="popup__input-error jobInput-error"></span>
                    </div>
                    <button className="popup__btn-save" type="submit"> Сохранить</button>
                </>}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}



            />
            <PopupWithForm
                title={'Новое место'}
                name={'add'}
                children={<>
                    <div className="input">
                        <input type="text" placeholder="Название" name="name" minLength="2" maxLength="30" required
                            className="input__text input__text_type_placename" />
                        <span className="popup__input-error name-error"></span>
                        <input type="url" placeholder="Ссылка на картинку" name="link" className="input__text input__text_type_link"
                            required />
                        <span className="popup__input-error link-error"></span>
                    </div>
                    <button className="popup__btn-save" type="submit"> Создать</button>
                </>}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />

            <PopupWithForm
                title={'Вы уверены'}
                name={'confirm'}
                children={<button className="popup__btn-save popup__btn-confirm" type="button" aria-label="согласие">Да</button>}
                isOpen={false}
                onClose={closeAllPopups}
            />


            <PopupWithForm
                title={'Обновить аватар'}
                name={'avatar'}
                children={
                <>
                <div className="input">
                            <input type="url" placeholder="Ссылка на картинку" name="avatar" className="input__text input__text_type_avatar"
                                required />
                            <span className="popup__input-error avatar-error"></span>
                        </div>
                        <button className="popup__btn-save" type="submit">Сохранить</button>
                </>}
                isOpen ={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />
      <Footer />
    </div>
  );
}

export default App;
