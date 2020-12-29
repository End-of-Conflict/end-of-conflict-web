/**
 * EoC PrevNext
 * @flow
 */
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PrevNextButton from '../prev-next-button/PrevNextButton';
import './PrevNext.css';

type Props = {
  chapters: Array<{
    title: string,
    slug: string
  }>,
  language: string
};

const PrevNext = (props:Props): React$Element<"aside"> => {
  const { chapters } = props;
  let match = useRouteMatch("/chapters/:lang/:chapter");
  const home = useRouteMatch("/");
  const isHome = home && home.isExact ? true : false;
  const { chapter } = match && match.params ? match.params : { lang: 'en', chapter: 'tldr' };
  let current = null;
  let prev = null;
  let next = null;

  for (let i=0; i< chapters.length; i++) {
    if (chapters[i].slug === chapter) {
      current = i;
    }
  }

  switch(true) {
    case(isHome):
    case(current === null):
      prev = null;
      next = 0;
      break;
    
    case(current === 0):
      prev = -1;
      next = 1;
      break;

    default:
      prev = parseInt(current) - 1;
      next = parseInt(current) + 1;
      // no op
  }

  return (
    <aside className="PrevNext">
      <PrevNextButton {...props} prev={true} chapter={prev} />
      <PrevNextButton {...props} prev={false} chapter={next} />
    </aside>
  );
}

PrevNext.defaultProps = {
  chapters: [{title: 'TLDR;', slug: 'tldr'}],
  language: 'en'
}

export default PrevNext;
