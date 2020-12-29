/**
 * EoC: Home
 * @flow
 */
import React from 'react';
import { useRouteMatch } from "react-router-dom";
import './Home.css';

const Home = (props: {}): null | React$Element<React$FragmentType> => {
  let match = useRouteMatch("/");
  
  if (!match.isExact) {
    return null;
  }

  return (
    <main>
      <h1>The End of Conflict</h1>
      <section className="Home">
        <p>Welcome to the End of Conflict</p>
      </section>
    </main>
  );
}

export default Home;
