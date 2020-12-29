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
    slug: string
  }>,
  language: string,
  prev: boolean,
};

const PrevNextButton = (props:Props): null | React$Element<"div"> => {
  let { chapter, chapters, language, prev } = props;

  switch (true) {
    case (chapter === null):
      return (
        <div className="PrevNextButton empty prev" />
      );

    case (chapter === -1):
      return (
      <Link to="/" className="PrevNextButton prev home">
        <FontAwesomeIcon icon="chevron-left" />
        Home
      </Link>
    );

    case (chapter !== null && !chapters[chapter]):
      return (
        <div className={`PrevNextButton empty ${prev ? 'prev' : 'next'}`} />
      );

    default:
      chapter = chapter === null ? 0 : chapter; // because Flow is not picking up case(0) above
      let { title, slug } = chapters[chapter];

      title = window.innerWidth < 768 && title.length > 13 ? `${title.substr(0, 13)}…` : title;
      return (
        <Link to={`/chapters/${language}/${slug}`} className={`PrevNextButton ${prev ? 'prev' : 'next'}`}>
          { prev ? <FontAwesomeIcon icon="chevron-left" /> : null }
          { title }
          { !prev ? <FontAwesomeIcon icon="chevron-right" /> : null }
        </Link>
      );
  }  
}

PrevNextButton.defaultProps = {
  chapter: null,
  chapters: [{title: 'TLDR;', slug: 'tldr'}],
  language: 'en',
  prev: true,
}

export default PrevNextButton;
