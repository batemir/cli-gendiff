import fs from 'fs';
import gendiff from '../src';

const beforeJson = '__tests__/__fixtures__/before.json';
const afterJson = '__tests__/__fixtures__/after.json';
const expected = fs.readFileSync('__tests__/__fixtures__/expected.txt', 'utf-8');
test('gendiff flat json', () => {
  const result = gendiff(beforeJson, afterJson);
  expect(result).toEqual(expected);
});
