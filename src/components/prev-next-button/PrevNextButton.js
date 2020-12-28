/**
 * EoC PrevNextButton
 * @flow
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PrevNextButton.css';

type Props = {
  chapter: number | null,
  chapters: Array<{
    title: string,
    url: string
  }>,
  language: string,
  prev: boolean,
};

const PrevNextButton = (props:Props): null | React$Element<"div"> => {
  const { chapter, chapters, language, prev } = props;

  if (chapter === null || !chapters[chapter]) {
    return (
      <div className={`PrevNextButton empty ${prev ? 'prev' : 'next'}`} />
    );
  }

  return (
    <Link to={`/chapters/${language}/${chapter}`} className={`PrevNextButton ${prev ? 'prev' : 'next'}`}>
      { prev ? <FontAwesomeIcon icon="chevron-left" /> : null }
      { chapters[chapter].title }
      { !prev ? <FontAwesomeIcon icon="chevron-right" /> : null }
    </Link>
  );
}

PrevNextButton.defaultProps = {
  chapter: null,
  chapters: ([]: Array<empty>),
  language: 'en',
  prev: true,
}

export default PrevNextButton;
