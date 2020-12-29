import {
  HEADING,
  H2,
  H3,
  H4,
  H5,
  H6,
  BOLD,
  BOOK_TITLE,
} from './Functions';

test('Constants', () => {
  expect(HEADING).toBeDefined();
  expect(H2).toBeDefined();
  expect(H3).toBeDefined();
  expect(H4).toBeDefined();
  expect(H5).toBeDefined();
  expect(H6).toBeDefined();
  expect(BOLD).toBeDefined();
  expect(BOOK_TITLE).toBeDefined();
});
