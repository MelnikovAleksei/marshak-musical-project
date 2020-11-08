import React from 'react';
import marshakLogo from '../images/logo/marshak-logo.png';
import turbinaLogo from '../images/logo/turbina-logo.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import headerConfig from '../utils/headerConfig';
import streamingsServices from '../utils/streamingsServices';
import footerConfig from '../utils/footerConfig';
import '../index.css';

function App() {

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function handleMenuButtonClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <div className="root">
      <Header
        config={headerConfig}
        marshakLogo={marshakLogo}
        turbinaLogo={turbinaLogo}
        onMenuButtonClick={handleMenuButtonClick}
        menuIsOpen={menuIsOpen}
      >
        {streamingsServices.map((streaming) =>
          <li
            className="header__menu-item"
            key={streaming.id}
          >
            <a
              className="header__menu-link"
              href={streaming.url}
              target={streaming.targetIsBlank && '_blank'}
              rel="noopener"
              lang={streaming.lang}
            >
              {streaming.title}
            </a>
          </li>
        )}
      </Header>
      <Main />
      <Footer
        config={footerConfig}
      />
    </div>
  );
}

export default App;
