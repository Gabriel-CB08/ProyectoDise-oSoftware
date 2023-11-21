import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src="https://www.svgrepo.com/show/530571/conversation.svg" alt="" />
      <div className="primary-nav">
        <a href="https://compralotodo.netlify.app">Compralotodo    </a>
        <a href="https://compralotodo.netlify.app">Contactanos   </a>
        <a href="https://compralotodo.netlify.app">Historia   </a>
      </div>
    </header>
  );
};

export default Header;
