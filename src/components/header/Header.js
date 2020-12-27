/**
 * Header
 * @flow
 */
import React from 'react';
import { useRouteMatch } from "react-router-dom";
import Nav from '../nav/Nav';
import './Header.css';

type Props = {
  title: string,
};

const Header = (props: Props): React$Element<"header"> => {
  let match = useRouteMatch("/chapters/en/:chapter");
  const { title } = props;
  const heading = !match || match.url === '/' ? title : `EoC: ${title}`;
  document.title =  !match || match.url === '/' ? title : `End of Conflict | Chapter ${match.params.chapter}: ${title}`;

  return (
    <header>
      <h1>{heading}</h1>
      <Nav {...props} />
    </header>
  );
}

Header.defaultProps = {
  title: 'The end of conflict',
};

export default Header;
