/**
 * EoC: Footer
 * @flow
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = (): React$Element<"footer"> => {
  return (
    <footer>
      <div className="inner">
        <div className="cc">
          <a rel="license noreferrer" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
            <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" />
          </a>
          <div className="by">
            {new Date().getFullYear()} Ajax Mac
          </div>
        </div>
        <ul>
          <li>
            <a href="https://github.com/End-of-Conflict" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;