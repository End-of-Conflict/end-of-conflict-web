/**
 * Chapter
 * @flow
 */
import * as React from 'react';
import Header from '../header/Header';
import { useRouteMatch } from 'react-router-dom';
import { DATA_DOMAIN, DATA_FILE } from '../../data/Data';
import './Chapter.css';

const Chapter = (props: {}): null | React$Element<React$FragmentType> => {
  let match = useRouteMatch("/chapters/:lang/:chapter");
  const { lang, chapter } = match && match.params ? match.params : { lang: 'en', chapter: 0 };
  const [data, setData] = React.useState(0);
  const [current, setCurrent] = React.useState(null);

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
        console.warn(data)
        setData(data);
        setCurrent(chapter)
      }
    )
    .catch(
      err => console.warn(err)
    );
  }

  if (!data) {
    return null;
  }

  const { content } = data;
  console.warn('Chapter renders');

  return (
    <React.Fragment>
      <Header {...props} {...data} />
      <section className={`Chapter ${match.url}`}>
        {content.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </section>
    </React.Fragment>
  );
}

export default Chapter;
