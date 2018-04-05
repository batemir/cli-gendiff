import fs from 'fs';
import gendiff from '../src';

describe('flat gendiff', () => {
  const beforeJson = '__tests__/__fixtures__/before.json';
  const afterJson = '__tests__/__fixtures__/after.json';
  const beforeYaml = '__tests__/__fixtures__/before.yml';
  const afterYaml = '__tests__/__fixtures__/after.yml';
  const expected = fs.readFileSync('__tests__/__fixtures__/expected.txt', 'utf-8');
  test('flat json', () => {
    const result = gendiff(beforeJson, afterJson);
    expect(result).toEqual(expected);
  });
  test('flat yaml', () => {
    const result = gendiff(beforeYaml, afterYaml);
    expect(result).toEqual(expected);
  });
});

