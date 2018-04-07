import _ from 'lodash';

const render = (ast, offset) => {
  const buildObjStr = (node) => {
    if (node instanceof Object) {
      const keys = Object.keys(node);
      const str = keys.map(element => `${' '.repeat(offset + 6)}${element}: ${node[element]}`).join('\n');
      return `{\n${str}\n${' '.repeat(offset + 2)}}`;
    }
    return node;
  };
  const types = {
    added: node => `${' '.repeat(offset)}+ ${node.key}: ${buildObjStr(node.value)}`,
    removed: node => `${' '.repeat(offset)}- ${node.key}: ${buildObjStr(node.value)}`,
    changed: node => [`${' '.repeat(offset)}- ${node.key}: ${buildObjStr(node.valueBefore)}`,
      `${' '.repeat(offset)}+ ${node.key}: ${buildObjStr(node.valueAfter)}`].join('\n'),
    unchanged: node => `${' '.repeat(offset + 2)}${node.key}: ${buildObjStr(node.value)}`,
    nested: node => `${' '.repeat(offset + 2)}${node.key}: {\n${render(node.children, offset + 4)}\n${' '.repeat(offset + 2)}}`,
  };
  const rendered = ast.map(node => types[node.type](node)).join('\n');
  return rendered;
};
export default data => `{\n${render(data, 2)}\n}`;
