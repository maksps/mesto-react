import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditAvatarPopup({ isOpen, onClose }) {
   

    return (
        <PopupWithForm
        title={'Обновить аватар'}
        name={'avatar'}
        isOpen={isOpen}
        onClose={onClose}
        textButton={'Сохранить'}>
        <div className="input">
          <input type="url" placeholder="Ссылка на картинку" name="avatar" className="input__text input__text_type_avatar"
            required />
          <span className="popup__input-error avatar-error"></span>
        </div>
      </PopupWithForm>
    )
}

export default EditAvatarPopup;