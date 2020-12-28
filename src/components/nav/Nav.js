/**
 * EoC Nav
 * @flow
 */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.css';

type Props = {
  chapters: Array<{
    title: string,
    url: string
  }>,
  language: string
};

const Nav = (props: Props): React$Element<"div"> => {
  const { chapters, language } = props;
  const [open, setOpen] = useState(false);

  function openNav() {
    setOpen(!open);
  }

  return (
    <div className={`menu${open ? ' open' : ''}`}>
      <nav id="main-nav">
        <NavLink to="/">
          Home
        </NavLink>
        {
          chapters
            ? chapters.map((item, index) => {
                const { title, url } = item;
                return <NavLink to={`/chapters/${language}${url}`} key={index}>{title}</NavLink>
              })
            : null
        }
      </nav>
      <div
        className="toggle"
        onClick={openNav}
        role="button"
        aria-controls="main-nav"
        aria-expanded={open}
      >
        <FontAwesomeIcon icon={open ? 'times' : 'bars'} />
      </div>
    </div>
    
  );
}

Nav.defaultProps = {
  chapters: [{title: 'TLDR;', url: '/0'}],
  language: 'en'
}

export default Nav;
