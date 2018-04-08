import fs from 'fs';
import path from 'path';
import parse from './parsers';
import buildAst from './buildAst';
import render from './renders/getRender';

const getParsedData = (pathTo) => {
  const data = fs.readFileSync(pathTo, 'utf-8');
  return parse(path.extname(pathTo))(data);
};
const gendiff = (before, after, format = 'object') => {
  const config1 = getParsedData(before);
  const config2 = getParsedData(after);
  const parsed = buildAst(config1, config2);
  return render(format)(parsed);
};
export default gendiff;
