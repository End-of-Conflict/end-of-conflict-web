/**
 * Functions
 * @flow
 */
export const HEADING = new RegExp(/^#{2,6}\s(.*)/gi);
export const H2 = new RegExp(/^##\s(.*)/gi);
export const H3 = new RegExp(/^###\s(.*)/gi);
export const H4 = new RegExp(/^####\s(.*)/gi);
export const H5 = new RegExp(/^#####\s(.*)/gi);
export const H6 = new RegExp(/^######\s(.*)/gi);
export const BOLD = new RegExp(/\*\*(.*)\*\*/gi);
export const BOOK_TITLE = new RegExp(/(The End of Conflict)/gi);

/**
 * regexp replace content
 */
export function format(content: string) {
  const formatted = content
    .replace(HEADING, '$1')
    .replace(BOOK_TITLE, '<strong>$1</strong>')
    .replace(BOLD, '<strong>$1</strong>');
  return formatted;
}

/**
 * Format content
 */
export function formatItem(item: string, index: number) {
  const html = {__html: format(item)};

  switch(true) {
    case(H2.test(item)):
      return <h2 key={index} dangerouslySetInnerHTML={html} />

    case(H3.test(item)):
      return <h3 key={index} dangerouslySetInnerHTML={html} />

    case(H4.test(item)):
      return <h4 key={index} dangerouslySetInnerHTML={html} />

    case(H5.test(item)):
      return <h5 key={index} dangerouslySetInnerHTML={html} />

    case(H6.test(item)):
      return <h5 key={index} dangerouslySetInnerHTML={html} />

    default:
      return <p key={index} dangerouslySetInnerHTML={html} />
  }
}