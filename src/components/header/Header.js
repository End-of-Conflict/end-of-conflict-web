/**
 * Header
 * @flow
 */
import React from 'react';
import { useRouteMatch, Link } from "react-router-dom";
import Nav from '../nav/Nav';
import './Header.css';

type Props = {
  title: string,
};

const Header = (props: Props): React$Element<React$FragmentType> => {
  const { title } = props;
  const match = useRouteMatch("/chapters/en/:chapter");
  const home = useRouteMatch("/");
  const isHome = home && home.isExact ? true : false;
  document.title = match && match.params ? `End of Conflict | Chapter ${match.params.chapter}: ${title}` : title;

  return (
    <React.Fragment>
      <header>
        <Link to="/" className="book-title">The End of Conflict</Link>
        <Nav {...props} />
      </header>
      {!isHome ? <h1>{title}</h1> : null}
    </React.Fragment>
  );
}

Header.defaultProps = {
  title: 'The end of conflict',
};

export default Header;
