import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

const getParser = (pathTo) => {
  const parsers = {
    '.json': data => JSON.parse(data),
    '.yaml': data => yaml.safeLoad(data),
    '.yml': data => yaml.safeLoad(data),
    '.ini': data => ini.parse(data),
  };
  return parsers[path.extname(pathTo)];
};
export default getParser;
