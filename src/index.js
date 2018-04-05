import fs from 'fs';
import _ from 'lodash';
import getParser from './parsers';

const getData = data => fs.readFileSync(data);
const gendiff = (before, after) => {
  const config1 = getParser(before)(getData(before));
  const config2 = getParser(after)(getData(after));
  const keys1 = Object.keys(config1);
  const keys2 = Object.keys(config2);
  const keys = _.union(keys1, keys2);
  const answer = keys.map((key) => {
    if (!_.has(config1, key)) {
      return `  + ${key}: ${config2[key]}`;
    }
    if (!_.has(config2, key)) {
      return `  - ${key}: ${config1[key]}`;
    }
    if (config1[key] !== config2[key]) {
      return [`  + ${key}: ${config2[key]}`, `  - ${key}: ${config1[key]}`];
    }
    return `    ${key}: ${config1[key]}`;
  });
  return `{\n${_.flatten(answer).join('\n')}\n}`;
};
export default gendiff;
