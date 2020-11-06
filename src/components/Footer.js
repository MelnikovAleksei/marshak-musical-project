import React from 'react';

function Footer(props) {

  const currentYear = new Date().getFullYear()

  return(
    <footer className="footer">
      <p
        className="footer__paragraph"
      >
        {`© ${props.config.marketName}, ${currentYear}.`}
      </p>
      <p
        className="footer__paragraph">
      {props.config.paragraphText}
        <a
          href={props.config.linkUrl}
          target={props.config.targetIsBlank && '_blank'}
          rel="noopener"
          className="footer__link"
        >
          {props.config.linkText}
        </a>
      </p>
    </footer>
  )
}

export default Footer;
