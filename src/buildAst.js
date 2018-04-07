import _ from 'lodash';

const buildAst = (config1, config2) => {
  const keys1 = Object.keys(config1);
  const keys2 = Object.keys(config2);
  const keys = _.union(keys1, keys2);
  const ast = keys.map((key) => {
    if (config1[key] instanceof Object && config2[key] instanceof Object) {
      return { key, type: 'nested', children: buildAst(config1[key], config2[key]) };
    }
    if (!_.has(config1, key)) {
      return { key, type: 'added', value: config2[key] };
    }
    if (!_.has(config2, key)) {
      return { key, type: 'removed', value: config1[key] };
    }
    if (config1[key] !== config2[key]) {
      return {
        key, type: 'changed', valueBefore: config1[key], valueAfter: config2[key],
      };
    }
    return { key, type: 'unchanged', value: config1[key] };
  });
  return ast;
};
export default buildAst;
