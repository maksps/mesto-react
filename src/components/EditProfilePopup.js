import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'edit'}
            isOpen={isOpen}
            onClose={onClose}
            textButton={'Сохранить'}>
            <div className="input">
                <input type="text" placeholder="Имя" name="nameInput" className="input__text input__text_type_name"
                    minLength="2" maxLength="40" required />
                <span className="popup__input-error nameInput-error"></span>
                <input type="text" placeholder="О себе" name="jobInput" className="input__text input__text_type_job"
                    minLength="2" maxLength="200" required />
                <span className="popup__input-error jobInput-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;