/**
 * EoC NavChapters
 * @flow
 */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavChapters.css';

type Props = {
  chapters: Array<{
    title: string,
    slug: string
  }>,
  language: string,
  toggleMainNav: () => *,
};

const NavChapters = (props: Props): null | React$Element<"li"> => {
  const { chapters, language, toggleMainNav } = props;
  const [open, setOpen] = useState(false);

  function toggleChapters() {
    setOpen(!open);
  }

  if (chapters.length === 0) {
    return null;
  }

  return (
    <li className={`NavChapters${open ? ' open' : ''}`}>
      <div
        className="toggle-chapters"
        onClick={toggleChapters}
        role="button"
        aria-controls="main-nav"
        aria-expanded={open}
      >
        Chapters
        <FontAwesomeIcon icon={`chevron-${open ? 'up' : 'down'}`} />
      </div>
      <ul>
        {
          chapters
            ? chapters.map((item, index) => {
                const {slug, title} = item;
                return (
                  <li key={index} onClick={toggleMainNav}>
                    <NavLink to={`/chapters/${language}/${slug}`}>
                      {title}
                    </NavLink>
                  </li>
                  )
              })
            : null
        }
      </ul>
    </li>
  );
}

NavChapters.defaultProps = {
  chapters: [{title: 'TLDR;', slug: 'tldr'}],
  language: 'en',
  toggleMainNav: (): null => null,
}

export default NavChapters;
