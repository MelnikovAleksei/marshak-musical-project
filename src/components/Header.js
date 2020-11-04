import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <div className="header__menu-container">
        <div className="header__logo-container">
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
        </div>
        <div className="header__nav-container">
          <button
            className={props.menuIsOpen ?
              "header__menu-button-active"
              :
              "header__menu-button"
            }
            aria-label={props.config.menuButtonLabel}
            onClick={props.onMenuButtonClick}
          >
            {!props.menuIsOpen && props.config.menuButtonText}
          </button>
          <nav
            className="header__menu"
            aria-label={props.config.menuLabel}
          >
            <ul
              className={props.menuIsOpen ?
                "header__menu-list header__menu-list_opened"
                :
                "header__menu-list"
                }
            >
              {props.children}
            </ul>
          </nav>
        </div>
      </div>
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
    </header>
  )
}

export default Header;
