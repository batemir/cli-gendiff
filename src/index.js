import fs from 'fs';
import _ from 'lodash';

const gendiff = (before, after) => {
  const config1 = JSON.parse(fs.readFileSync(before, 'utf-8'));
  const config2 = JSON.parse(fs.readFileSync(after, 'utf-8'));
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
      return `  + ${key}: ${config2[key]}\n  - ${key}: ${config1[key]}`;
    }
    return `    ${key}: ${config1[key]}`;
  }).join('\n');
  return `{\n${answer}\n}`;
};
export default gendiff;
