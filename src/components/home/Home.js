/**
 * EoC: Home
 * @flow
 */
import React from 'react';
import Header from '../header/Header';
import { useRouteMatch } from "react-router-dom";
import './Home.css';

const Home = (props: {}): null | React$Element<React$FragmentType> => {
  let match = useRouteMatch("/");
  
  if (!match.isExact) {
    return null;
  }

  return (
    <React.Fragment>
      <main>
        <Header {...props} />
        <h1>The End of Conflict</h1>
        <section className="Home">
          <p>Welcome to the End of Conflict</p>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
