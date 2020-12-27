/**
 * Chapter
 * @flow
 */
import * as React from 'react';
import Header from '../header/Header';
import { useRouteMatch } from "react-router-dom";
import { DATA_DOMAIN, DATA_FILE } from '../../data/Data';

const Chapter = (props: {}): null | React$Element<React$FragmentType> => {
  let match = useRouteMatch("/chapters/:lang/:chapter");
  console.warn('Chapter', match);
  const { lang, chapter } = match.params ? match.params : { lang: 'en', chapter: 0};
  const [data, setData] = React.useState(0);
  const url = match ? `${DATA_DOMAIN}/${lang}/${chapter}/${DATA_FILE}` : null;

  if (!data && url) {
    fetch(url)
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

  if (!data) {
    return null;
  }

  console.warn(data, match);
  const { content } = data;
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
