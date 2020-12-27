/**
 * EoC: Home
 * @flow
 */
import React from 'react';
import Header from '../header/Header';
import { useRouteMatch } from "react-router-dom";

const Home = (props: {}): null | React$Element<React$FragmentType> => {
  let match = useRouteMatch("/");
  if (!match.isExact) {
    return null;
  }

  return (
    <React.Fragment>
      <Header {...props} />
      <section className="Home">
        <p>Welcome to the End of Conflict</p>
      </section>
    </React.Fragment>
  );
}

export default Home;
