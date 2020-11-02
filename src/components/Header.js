import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <a
        className="header__logo-link"
        href={props.config.logoLink}
        target={props.config.targetIsBlank && '_blank'}
        rel="noopener"
      >
        <img
          className="header__logo-marshak"
          alt={props.config.marshakAltLogoText}
          src={props.marshakLogo}
        />
      </a>
      <h1
        className="header__title"
        aria-label={props.config.titleText}
      >
        <img
          className="header__logo-turbina"
          alt={props.config.turbinaAltLogoText}
          src={props.turbinaLogo}
        />
      </h1>
      <div className="header__menu-section">
        <button
          className="header__menu-button"
          aria-label={props.config.menuButtonLabel}
        >
          {props.config.menuButtonText}
        </button>
        <nav
          className="header__menu"
          aria-label={props.config.menuLabel}
        >
          <ul className="header__menu-list">
            {props.children}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
