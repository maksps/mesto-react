import React from "react";
import '../index.css';

function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card.name, card.link);
      } 
    return (
        <div  className="element" key={card._id} >
            <img className="element__image" onClick={handleClick} src={card.link} alt={card.name} />
            <div className="element__figcaption">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className="element__like  element__like_unchecked" aria-label="Нравится"></button>
                    <span className="element__like-count">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" className="element__btn-delete " aria-label="Удалить"></button>
        </div>
    )
}

export default Card;