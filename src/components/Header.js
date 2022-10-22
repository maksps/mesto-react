import React from "react";
import '../index.css';

function Header({ logo }) {
    return (
        <header className="header">
            <img className="header__logo"
                src={logo}
                alt="логотип" />
        </header>
    )

}

export default Header;