/**
 * EoC Nav
 * @flow
 */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavChapters from '../nav-chapters/NavChapters';
import './Nav.css';

type Props = {
  chapters: Array<{
    title: string,
    slug: string
  }>,
  language: string
};

const Nav = (props: Props): React$Element<"div"> => {
  const [open, setOpen] = useState(false);

  function toggleMainNav() {
    setOpen(!open);
  }

  return (
    <div className={`menu${open ? ' open' : ''}`}>
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <NavChapters {...props} toggleMainNav={toggleMainNav} />
        </ul>
      </nav>
      <div
        className="toggle"
        onClick={toggleMainNav}
        role="button"
        aria-controls="main-nav"
        aria-expanded={open}
        aria-label="Toggle main navigation"
        title="Toggle main navigation"
      >
        <FontAwesomeIcon icon={open ? 'times' : 'bars'} />
      </div>
    </div>
    
  );
}

Nav.defaultProps = {
  chapters: [{title: 'TLDR;', slug: 'tldr'}],
  language: 'en'
}

export default Nav;