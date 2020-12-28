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
    url: string
  }>,
  language: string
};

const PrevNext = (props:Props): React$Element<"div"> => {
  let match = useRouteMatch("/chapters/:lang/:chapter");
  const { chapter } = match && match.params ? match.params : { lang: 'en', chapter: 0 };

  const prev = !isNaN(chapter) ? parseInt(chapter) - 1 : null;
  const next = !isNaN(chapter) ? parseInt(chapter) + 1 : null;

  return (
    <div className="PrevNext">
      <PrevNextButton {...props} prev={true} chapter={prev} />
      <PrevNextButton {...props} prev={false} chapter={next} />
    </div>
  );
}

PrevNext.defaultProps = {
  chapters: ([]: Array<empty>),
  language: 'en'
}

export default PrevNext;
