/**
 * Main
 * @flow
 */
import React, { useState } from 'react';
import Home from '../home/Home';
import Chapter from '../chapter/Chapter';
import { BrowserRouter as Router } from 'react-router-dom';
import { DATA_URL } from '../../data/Data';

type Props = {};

const Main = (props: Props): React$Element<"div"> => {
  const [data, setData ] = useState(null);
  const [language] = useState('en');

  if (!data) {
    fetch(DATA_URL)
    .then(
      result => result.json()
    )
    .then (
      data => {
        setData(data);
      }
    )
    .catch(
      err => console.warn(err)
    );
  }

  console.warn(data);

  return (
    <div className="container">
      <Router>
        <Home />
        <Chapter {...data} language={language} />
      </Router>
    </div>
  );
}

export default Main;
