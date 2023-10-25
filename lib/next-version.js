export default () => {
  const pkgJson = require('../package.json');
  return pkgJson.dependencies.next;
}
