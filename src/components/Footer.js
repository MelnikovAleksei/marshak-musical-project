import React from 'react';

function Footer({config}) {

  const currentYear = new Date().getFullYear()

  return(
    <footer className="footer">
      <p
        className="footer__paragraph"
      >
        {`© ${config.marketName}, ${currentYear}.`}
      </p>
      <p
        className="footer__paragraph">
      {config.paragraphText}
        <a
          href={config.linkUrl}
          target={config.targetIsBlank && '_blank'}
          rel="noopener"
          className="footer__link"
        >
          {config.linkText}
        </a>
      </p>
    </footer>
  )
}

export default Footer;
