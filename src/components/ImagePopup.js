import React from "react";
import '../index.css';

function ImagePopup() {
    return ( 
        <div className="popup popup_place">
                <div className="popup__container popup__container_place">
                    <figure className="popup__figure">
                        <img className="popup__image" src="#" alt="#" />
                        <figcaption className="popup__figcaption"></figcaption>
                    </figure>
                    <button className="popup__btn-exit" type="button" aria-label="выход"></button>
                </div>
            </div>
    )

}

export default ImagePopup;