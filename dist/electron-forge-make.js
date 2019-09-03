'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMakeOptions = undefined;

var _bluebird = require('bluebird');

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

require('./util/terminate');

var _api = require('./api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
const getMakeOptions = exports.getMakeOptions = () => {
  let dir = process.cwd();
  _commander2.default.version(require('../package.json').version).arguments('[cwd]').option('--skip-package', 'Assume the app is already packaged').option('-a, --arch [arch]', 'Target architecture').option('-p, --platform [platform]', 'Target build platform').option('--targets [targets]', 'Override your make targets for this run').allowUnknownOption(true).action(cwd => {
    if (!cwd) return;
    if (_path2.default.isAbsolute(cwd) && _fsExtra2.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fsExtra2.default.existsSync(_path2.default.resolve(dir, cwd))) {
      dir = _path2.default.resolve(dir, cwd);
    }
  }).parse(process.argv);

  const makeOpts = {
    dir,
    interactive: true,
    skipPackage: _commander2.default.skipPackage
  };
  if (_commander2.default.targets) makeOpts.overrideTargets = _commander2.default.targets.split(',');
  if (_commander2.default.arch) makeOpts.arch = _commander2.default.arch;
  if (_commander2.default.platform) makeOpts.platform = _commander2.default.platform;

  return makeOpts;
};

if (process.mainModule === module || global.__LINKED_FORGE__) {
  (0, _bluebird.coroutine)(function* () {
    const makeOpts = getMakeOptions();

    yield (0, _api.make)(makeOpts);
  })();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZWN0cm9uLWZvcmdlLW1ha2UuanMiXSwibmFtZXMiOlsiZ2V0TWFrZU9wdGlvbnMiLCJkaXIiLCJwcm9jZXNzIiwiY3dkIiwicHJvZ3JhbSIsInZlcnNpb24iLCJyZXF1aXJlIiwiYXJndW1lbnRzIiwib3B0aW9uIiwiYWxsb3dVbmtub3duT3B0aW9uIiwiYWN0aW9uIiwicGF0aCIsImlzQWJzb2x1dGUiLCJmcyIsImV4aXN0c1N5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJhcmd2IiwibWFrZU9wdHMiLCJpbnRlcmFjdGl2ZSIsInNraXBQYWNrYWdlIiwidGFyZ2V0cyIsIm92ZXJyaWRlVGFyZ2V0cyIsInNwbGl0IiwiYXJjaCIsInBsYXRmb3JtIiwibWFpbk1vZHVsZSIsIm1vZHVsZSIsImdsb2JhbCIsIl9fTElOS0VEX0ZPUkdFX18iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRUE7QUFDTyxNQUFNQSwwQ0FBaUIsTUFBTTtBQUNsQyxNQUFJQyxNQUFNQyxRQUFRQyxHQUFSLEVBQVY7QUFDQUMsc0JBQ0dDLE9BREgsQ0FDV0MsUUFBUSxpQkFBUixFQUEyQkQsT0FEdEMsRUFFR0UsU0FGSCxDQUVhLE9BRmIsRUFHR0MsTUFISCxDQUdVLGdCQUhWLEVBRzRCLG9DQUg1QixFQUlHQSxNQUpILENBSVUsbUJBSlYsRUFJK0IscUJBSi9CLEVBS0dBLE1BTEgsQ0FLVSwyQkFMVixFQUt1Qyx1QkFMdkMsRUFNR0EsTUFOSCxDQU1VLHFCQU5WLEVBTWlDLHlDQU5qQyxFQU9HQyxrQkFQSCxDQU9zQixJQVB0QixFQVFHQyxNQVJILENBUVdQLEdBQUQsSUFBUztBQUNmLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1YsUUFBSVEsZUFBS0MsVUFBTCxDQUFnQlQsR0FBaEIsS0FBd0JVLGtCQUFHQyxVQUFILENBQWNYLEdBQWQsQ0FBNUIsRUFBZ0Q7QUFDOUNGLFlBQU1FLEdBQU47QUFDRCxLQUZELE1BRU8sSUFBSVUsa0JBQUdDLFVBQUgsQ0FBY0gsZUFBS0ksT0FBTCxDQUFhZCxHQUFiLEVBQWtCRSxHQUFsQixDQUFkLENBQUosRUFBMkM7QUFDaERGLFlBQU1VLGVBQUtJLE9BQUwsQ0FBYWQsR0FBYixFQUFrQkUsR0FBbEIsQ0FBTjtBQUNEO0FBQ0YsR0FmSCxFQWdCR2EsS0FoQkgsQ0FnQlNkLFFBQVFlLElBaEJqQjs7QUFrQkEsUUFBTUMsV0FBVztBQUNmakIsT0FEZTtBQUVma0IsaUJBQWEsSUFGRTtBQUdmQyxpQkFBYWhCLG9CQUFRZ0I7QUFITixHQUFqQjtBQUtBLE1BQUloQixvQkFBUWlCLE9BQVosRUFBcUJILFNBQVNJLGVBQVQsR0FBMkJsQixvQkFBUWlCLE9BQVIsQ0FBZ0JFLEtBQWhCLENBQXNCLEdBQXRCLENBQTNCO0FBQ3JCLE1BQUluQixvQkFBUW9CLElBQVosRUFBa0JOLFNBQVNNLElBQVQsR0FBZ0JwQixvQkFBUW9CLElBQXhCO0FBQ2xCLE1BQUlwQixvQkFBUXFCLFFBQVosRUFBc0JQLFNBQVNPLFFBQVQsR0FBb0JyQixvQkFBUXFCLFFBQTVCOztBQUV0QixTQUFPUCxRQUFQO0FBQ0QsQ0E5Qk07O0FBZ0NQLElBQUloQixRQUFRd0IsVUFBUixLQUF1QkMsTUFBdkIsSUFBaUNDLE9BQU9DLGdCQUE1QyxFQUE4RDtBQUM1RCwyQkFBQyxhQUFZO0FBQ1gsVUFBTVgsV0FBV2xCLGdCQUFqQjs7QUFFQSxVQUFNLGVBQUtrQixRQUFMLENBQU47QUFDRCxHQUpEO0FBS0QiLCJmaWxlIjoiZWxlY3Ryb24tZm9yZ2UtbWFrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwcm9ncmFtIGZyb20gJ2NvbW1hbmRlcic7XG5cbmltcG9ydCAnLi91dGlsL3Rlcm1pbmF0ZSc7XG5pbXBvcnQgeyBtYWtlIH0gZnJvbSAnLi9hcGknO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGdldE1ha2VPcHRpb25zID0gKCkgPT4ge1xuICBsZXQgZGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgcHJvZ3JhbVxuICAgIC52ZXJzaW9uKHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb24pXG4gICAgLmFyZ3VtZW50cygnW2N3ZF0nKVxuICAgIC5vcHRpb24oJy0tc2tpcC1wYWNrYWdlJywgJ0Fzc3VtZSB0aGUgYXBwIGlzIGFscmVhZHkgcGFja2FnZWQnKVxuICAgIC5vcHRpb24oJy1hLCAtLWFyY2ggW2FyY2hdJywgJ1RhcmdldCBhcmNoaXRlY3R1cmUnKVxuICAgIC5vcHRpb24oJy1wLCAtLXBsYXRmb3JtIFtwbGF0Zm9ybV0nLCAnVGFyZ2V0IGJ1aWxkIHBsYXRmb3JtJylcbiAgICAub3B0aW9uKCctLXRhcmdldHMgW3RhcmdldHNdJywgJ092ZXJyaWRlIHlvdXIgbWFrZSB0YXJnZXRzIGZvciB0aGlzIHJ1bicpXG4gICAgLmFsbG93VW5rbm93bk9wdGlvbih0cnVlKVxuICAgIC5hY3Rpb24oKGN3ZCkgPT4ge1xuICAgICAgaWYgKCFjd2QpIHJldHVybjtcbiAgICAgIGlmIChwYXRoLmlzQWJzb2x1dGUoY3dkKSAmJiBmcy5leGlzdHNTeW5jKGN3ZCkpIHtcbiAgICAgICAgZGlyID0gY3dkO1xuICAgICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgucmVzb2x2ZShkaXIsIGN3ZCkpKSB7XG4gICAgICAgIGRpciA9IHBhdGgucmVzb2x2ZShkaXIsIGN3ZCk7XG4gICAgICB9XG4gICAgfSlcbiAgICAucGFyc2UocHJvY2Vzcy5hcmd2KTtcblxuICBjb25zdCBtYWtlT3B0cyA9IHtcbiAgICBkaXIsXG4gICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgc2tpcFBhY2thZ2U6IHByb2dyYW0uc2tpcFBhY2thZ2UsXG4gIH07XG4gIGlmIChwcm9ncmFtLnRhcmdldHMpIG1ha2VPcHRzLm92ZXJyaWRlVGFyZ2V0cyA9IHByb2dyYW0udGFyZ2V0cy5zcGxpdCgnLCcpO1xuICBpZiAocHJvZ3JhbS5hcmNoKSBtYWtlT3B0cy5hcmNoID0gcHJvZ3JhbS5hcmNoO1xuICBpZiAocHJvZ3JhbS5wbGF0Zm9ybSkgbWFrZU9wdHMucGxhdGZvcm0gPSBwcm9ncmFtLnBsYXRmb3JtO1xuXG4gIHJldHVybiBtYWtlT3B0cztcbn07XG5cbmlmIChwcm9jZXNzLm1haW5Nb2R1bGUgPT09IG1vZHVsZSB8fCBnbG9iYWwuX19MSU5LRURfRk9SR0VfXykge1xuICAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1ha2VPcHRzID0gZ2V0TWFrZU9wdGlvbnMoKTtcblxuICAgIGF3YWl0IG1ha2UobWFrZU9wdHMpO1xuICB9KSgpO1xufVxuIl19