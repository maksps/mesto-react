import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
        console.log(e.target.value);
    };

    function handleChangeDescription(e) {
        setDescription(e.target.value);
        console.log(e.target.value);
    };



    return (
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'edit'}
            isOpen={isOpen}
            onClose={onClose}
            textButton={'Сохранить'}>
            <div className="input">
                <input type="text" value={name} onChange={handleChangeName} placeholder="Имя" name="nameInput" className="input__text input__text_type_name"
                    minLength="2" maxLength="40" required />
                <span className="popup__input-error nameInput-error"></span>
                <input type="text" value={description} onChange={handleChangeDescription} placeholder="О себе" name="jobInput" className="input__text input__text_type_job"
                    minLength="2" maxLength="200" required />
                <span className="popup__input-error jobInput-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;