import React from 'react';
import marshakLogo from '../images/logo/marshak-logo.png';
import turbinaLogo from '../images/logo/turbina-logo.png';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import headerConfig from '../utils/headerConfig';
import strimingsServices from '../utils/strimingsServices';
import '../index.css';

function App() {
  return (
    <div className="root">
      <Header
        config={headerConfig}
        marshakLogo={marshakLogo}
        turbinaLogo={turbinaLogo}
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
      <Footer />
    </div>
  );
}

export default App;
