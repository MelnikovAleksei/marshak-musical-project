import React from 'react';
import marshakLogo from '../images/logo/marshak-logo.png';
import turbinaLogo from '../images/logo/turbina-logo.png';
import Header from './Header';
import Footer from './Footer';
import headerConfig from '../utils/headerConfig';
import '../index.css';

function App() {

  const strimingsServicesList = headerConfig.strimingsServices;

  return (
    <div className="root">
      <Header
        config={headerConfig}
        marshakLogo={marshakLogo}
        turbinaLogo={turbinaLogo}
      >
        {strimingsServicesList.map((striming, index) =>
          <li
            className="header__menu-item"
            key={index}
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
      <Footer />
    </div>
  );
}

export default App;
