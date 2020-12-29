/**
 * EoC: Contents
 * @flow
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Contents.css';

type Props = {
  chapters: Array<{
    title: string,
    slug: string
  }>,
  language: string,
  title: string,
};

const Contents = (props: Props) => {
  const { chapters, language, title } = props;

  return (
    <main>
      <h1>{title}</h1>
      <section className="Contents">
        <ul>
          {
            chapters.map((item, index) => {
              const {slug, title} = item;

              if (slug === 'contents') {
                return null;
              }

              return (
                <li key={index}>
                  <Link to={`/chapters/${language}/${slug}`}>
                    {title}
                  </Link>
                </li>
                )
            })
          }
        </ul>
      </section>
    </main>
  );
}

Contents.defaultProps = {
  chapters: [{title: 'TLDR;', slug: 'tldr'}],
  language: 'en',
  title: 'Contents'
};

export default Contents;