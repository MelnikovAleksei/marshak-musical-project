import React from 'react';
import marshakLogo from '../images/logo/marshak-logo.png';
import turbinaLogo from '../images/logo/turbina-logo.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import headerConfig from '../utils/headerConfig';
import strimingsServices from '../utils/strimingsServices';
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
        {strimingsServices.map((striming) =>
          <li
            className="header__menu-item"
            key={striming.id}
          >
            <a
              className="header__menu-link"
              href={striming.url}
              target={striming.targetIsBlank && '_blank'}
              rel="noopener"
              lang={striming.lang}
            >
              {striming.title}
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
