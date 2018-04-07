import fs from 'fs';
import path from 'path';
import parse from './parsers';
import buildAst from './buildAst';
import render from './render';

const getParsedData = (pathTo) => {
  const data = fs.readFileSync(pathTo, 'utf-8');
  return parse(path.extname(pathTo))(data);
};
const gendiff = (before, after) => {
  const config1 = getParsedData(before);
  const config2 = getParsedData(after);
  return render(buildAst(config1, config2));
};
export default gendiff;
