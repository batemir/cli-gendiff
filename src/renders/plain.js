const render = (ast, parentName) => {
  const types = {
    added: (node) => {
      if (node.value instanceof Object) {
        return `Property '${parentName}${node.key}' was added with complex value`;
      }
      return `Property '${parentName}${node.key}' was added with value: '${node.value}'`;
    },
    removed: node => `Property '${parentName}${node.key}' was removed`,
    changed: (node) => {
      if (node.valueBefore instanceof Object || node.valueAfter instanceof Object) {
        return `Property '${parentName}${node.key}' was updated with complex value`;
      }
      return `Property '${parentName}${node.key}' was updated. From '${node.valueBefore}' to '${node.valueAfter}'`;
    },
    nested: node => (parentName === '' ? render(node.children, `${parentName}${node.key}.`) :
      render(node.children, `${parentName}${node.key}.`)),
  };
  const rendered = ast.filter(n => n.type !== 'unchanged').map(node => types[node.type](node)).join('\n');
  return rendered;
};
export default data => render(data, '');

