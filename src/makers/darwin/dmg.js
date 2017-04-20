import electronDMG from 'electron-installer-dmg';
import path from 'path';
import pify from 'pify';

import { ensureFile } from '../../util/ensure-output';

// electron-installer-dmg doesn't set its 'os' field even though it depends on
// appdmg, which is darwin-only
export const supportedPlatforms = ['darwin'];

export default async ({ dir, appName, forgeConfig }) => {
  const outPath = path.resolve(dir, '../make', `${appName}.dmg`);
  await ensureFile(outPath);
  const dmgConfig = Object.assign({
    overwrite: true,
  }, forgeConfig.electronInstallerDMG, {
    appPath: path.resolve(dir, `${appName}.app`),
    name: appName,
    out: path.dirname(outPath),
  });
  await pify(electronDMG)(dmgConfig);
  return [outPath];
};
