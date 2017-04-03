export function checkSupportedPlatforms(pkg) {
  const osList = require(`${pkg}/package.json`).os || ['darwin', 'linux', 'win32'];

  return osList.filter(os => !os.startsWith('!'));
}

export default checkSupportedPlatforms;
