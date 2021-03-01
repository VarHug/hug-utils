import append from '../index';

test('append', () => {
  expect(append('tests', ['write', 'more'])).toEqual([
    'write',
    'more',
    'tests'
  ]);
  expect(append('tests', [])).toEqual(['tests']);
  expect(append(['tests'])(['write', 'more'])).toEqual([
    'write',
    'more',
    ['tests']
  ]);
});
