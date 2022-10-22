import React from "react";
import '../index.css';

function PopupWithForm({title, name, children}) {
    return ( 
        <div className= {`popup popup_${name}`}>
        <div className="popup__container popup__container_edit">
            <h3 className="popup__title">{title}</h3>
            <form className="popup__form" name={name} noValidate autoComplete="off">
             {children}
            </form>
            <button className="popup__btn-exit" type="button" aria-label="выход"></button>
        </div>
    </div>
    )

}

export default PopupWithForm;