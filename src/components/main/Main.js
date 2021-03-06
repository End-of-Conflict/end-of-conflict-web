/**
 * Main
 * @flow
 */
import React, { useState } from 'react';
import Header from '../header/Header';
import Home from '../home/Home';
import Chapter from '../chapter/Chapter';
import PrevNext from '../prev-next/PrevNext';
import Footer from '../footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { DATA_URL } from '../../data/Data';
import './Main.css';

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

  return (
    <Router>
      <Header {...data} language={language} />
      <Home {...data} language={language} />
      <Chapter {...data} language={language} />
      <PrevNext {...data} language={language} />
      <Footer />
    </Router>
  );
}

export default Main;
