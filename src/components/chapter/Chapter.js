/**
 * Chapter
 * @flow
 */
import React, { useState } from 'react';
import Header from '../header/Header';
import { useRouteMatch } from 'react-router-dom';
import { formatItem } from '../../functions/Functions';
import { DATA_DOMAIN, DATA_FILE } from '../../data/Data';
import './Chapter.css';

const Chapter = (props: {}): null | React$Element<React$FragmentType> => {
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(null);
  let match = useRouteMatch("/chapters/:lang/:chapter");
  const { lang, chapter } = match && match.params ? match.params : { lang: 'en', chapter: 0 };

  if (!match) {
    return null;
  }

  const url = `${DATA_DOMAIN}/${lang}/${chapter}/${DATA_FILE}`;

  if (current !== chapter) {
    fetch(url)
      .then(
        result => result.json()
      )
      .then (
        data => {
          setData(data);
          setCurrent(chapter);
          setError(false);
        }
      )
      .catch(
        err => {
          console.warn(err);
          setCurrent(chapter);
          setError(true);
        }
      );
  }

  switch(true) {
    case(!data):
      return null;

    case(error):
      return (
        <React.Fragment>
          <Header {...props} {...data}/>
          <main>
            <h1>Whoops - this chapter seems to be missing</h1>
            <section className={`Chapter ${match.url}`}>
              <p>This chapter seems to have popped out for a quick cup of tea, and is not available to be read.</p>
              <p>Sorry about that.</p>
            </section>
          </main>
        </React.Fragment>
      );

    default: {
      const { content, title } = data;

      return (
        <React.Fragment>
          <Header {...props} {...data}/>
          <main>
            <h1>{current === chapter  ? title : null}</h1>
            <section className={`Chapter ${match.url}`}>
              {
                current === chapter 
                  ? content.map((item, index) => {
                      return formatItem(item, index);
                    })
                  : null
              }
            </section>
          </main>
        </React.Fragment>
      );
    }
  }
}

export default Chapter;
