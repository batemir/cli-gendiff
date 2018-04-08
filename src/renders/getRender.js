import objRender from './object';
import plainRender from './plain';

const renders = {
  object: objRender,
  plain: plainRender,
};
export default format => (data) => {
  const render = renders[format];
  if (!render) {
    throw new Error(`unkown format: ${format}`);
  }
  return render(data);
};
