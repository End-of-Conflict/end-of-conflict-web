/**
 * Header
 * @flow
 */
import React from 'react';
import { useRouteMatch, Link } from "react-router-dom";
import Nav from '../nav/Nav';
import './Header.css';

type Props = {
  title: string
};

const Header = (props: Props): React$Element<"div"> => {
  return (
    <div className="header">
      <header>
        <Link to="/" className="book-title">The End of Conflict</Link>
        <Nav {...props} />
      </header>
    </div>
  );
}

Header.defaultProps = {
  title: 'The end of conflict',
};

export default Header;
