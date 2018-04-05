import path from 'path';
import yaml from 'js-yaml';

const getParser = (pathTo) => {
  const parsers = {
    '.json': data => JSON.parse(data),
    '.yaml': data => yaml.safeLoad(data),
    '.yml': data => yaml.safeLoad(data),
  };
  return parsers[path.extname(pathTo)];
};
export default getParser;
