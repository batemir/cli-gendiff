import fs from 'fs';
import gendiff from '../src';

describe('flat gendiff', () => {
  const beforeJson = '__tests__/__fixtures__/before.json';
  const afterJson = '__tests__/__fixtures__/after.json';
  const beforeYaml = '__tests__/__fixtures__/before.yml';
  const afterYaml = '__tests__/__fixtures__/after.yml';
  const beforeIni = '__tests__/__fixtures__/before.ini';
  const afterIni = '__tests__/__fixtures__/after.ini';
  const expected = fs.readFileSync('__tests__/__fixtures__/expected.txt', 'utf-8');
  test('flat json', () => {
    const result = gendiff(beforeJson, afterJson);
    expect(result).toEqual(expected);
  });
  test('flat yaml', () => {
    const result = gendiff(beforeYaml, afterYaml);
    expect(result).toEqual(expected);
  });
  test('flat ini', () => {
    const result = gendiff(beforeIni, afterIni);
    expect(result).toEqual(expected);
  });
});

describe('nested gendiff', () => {
  const beforeJson = '__tests__/__fixtures__/nested/before.json';
  const afterJson = '__tests__/__fixtures__/nested/after.json';
  const beforeYaml = '__tests__/__fixtures__/nested/before.yml';
  const afterYaml = '__tests__/__fixtures__/nested/after.yml';
  const beforeIni = '__tests__/__fixtures__/nested/before.ini';
  const afterIni = '__tests__/__fixtures__/nested/after.ini';
  const expected = fs.readFileSync('__tests__/__fixtures__/nested/expected.txt', 'utf-8');
  test('plain format', () => {
    const expectedPlain = fs.readFileSync('__tests__/__fixtures__/nested/plain.txt', 'utf-8');
    const result = gendiff(beforeJson, afterJson, 'plain');
    expect(result).toEqual(expectedPlain);
  });
  test('nested json', () => {
    const result = gendiff(beforeJson, afterJson);
    expect(result).toEqual(expected);
  });
  test('nested yaml', () => {
    const result = gendiff(beforeYaml, afterYaml);
    expect(result).toEqual(expected);
  });
  test('nested ini', () => {
    const result = gendiff(beforeIni, afterIni);
    expect(result).toEqual(expected);
  });
});
