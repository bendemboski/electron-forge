'use strict';

var _bluebird = require('bluebird');

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

require('./util/terminate');

var _api = require('./api');

var _electronForgeMake = require('./electron-forge-make');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _bluebird.coroutine)(function* () {
  let dir = process.cwd();
  _commander2.default.version(require('../package.json').version).arguments('[cwd]').option('--auth-token', 'Authorization token for your publisher target (if required)').option('--tag', 'The tag to publish to on GitHub').option('--target [target[,target...]]', 'The comma-separated deployment targets, defaults to "github"').option('--dry-run', 'Triggers a publish dry run which saves state and doesn\'t upload anything').option('--from-dry-run', 'Attempts to publish artifacts from the last saved dry run').allowUnknownOption(true).action(function (cwd) {
    if (!cwd) return;
    if (_path2.default.isAbsolute(cwd) && _fsExtra2.default.existsSync(cwd)) {
      dir = cwd;
    } else if (_fsExtra2.default.existsSync(_path2.default.resolve(dir, cwd))) {
      dir = _path2.default.resolve(dir, cwd);
    }
  }).parse(process.argv);

  const publishOpts = {
    dir,
    interactive: true,
    authToken: _commander2.default.authToken,
    tag: _commander2.default.tag,
    dryRun: _commander2.default.dryRun,
    dryRunResume: _commander2.default.fromDryRun
  };
  if (_commander2.default.target) publishOpts.publishTargets = _commander2.default.target.split(',');

  publishOpts.makeOptions = (0, _electronForgeMake.getMakeOptions)();

  yield (0, _api.publish)(publishOpts);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZWN0cm9uLWZvcmdlLXB1Ymxpc2guanMiXSwibmFtZXMiOlsiZGlyIiwicHJvY2VzcyIsImN3ZCIsInByb2dyYW0iLCJ2ZXJzaW9uIiwicmVxdWlyZSIsImFyZ3VtZW50cyIsIm9wdGlvbiIsImFsbG93VW5rbm93bk9wdGlvbiIsImFjdGlvbiIsInBhdGgiLCJpc0Fic29sdXRlIiwiZnMiLCJleGlzdHNTeW5jIiwicmVzb2x2ZSIsInBhcnNlIiwiYXJndiIsInB1Ymxpc2hPcHRzIiwiaW50ZXJhY3RpdmUiLCJhdXRoVG9rZW4iLCJ0YWciLCJkcnlSdW4iLCJkcnlSdW5SZXN1bWUiLCJmcm9tRHJ5UnVuIiwidGFyZ2V0IiwicHVibGlzaFRhcmdldHMiLCJzcGxpdCIsIm1ha2VPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSx5QkFBQyxhQUFZO0FBQ1gsTUFBSUEsTUFBTUMsUUFBUUMsR0FBUixFQUFWO0FBQ0FDLHNCQUNHQyxPQURILENBQ1dDLFFBQVEsaUJBQVIsRUFBMkJELE9BRHRDLEVBRUdFLFNBRkgsQ0FFYSxPQUZiLEVBR0dDLE1BSEgsQ0FHVSxjQUhWLEVBRzBCLDZEQUgxQixFQUlHQSxNQUpILENBSVUsT0FKVixFQUltQixpQ0FKbkIsRUFLR0EsTUFMSCxDQUtVLCtCQUxWLEVBSzJDLDhEQUwzQyxFQU1HQSxNQU5ILENBTVUsV0FOVixFQU11QiwyRUFOdkIsRUFPR0EsTUFQSCxDQU9VLGdCQVBWLEVBTzRCLDJEQVA1QixFQVFHQyxrQkFSSCxDQVFzQixJQVJ0QixFQVNHQyxNQVRILENBU1UsVUFBQ1AsR0FBRCxFQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDVixRQUFJUSxlQUFLQyxVQUFMLENBQWdCVCxHQUFoQixLQUF3QlUsa0JBQUdDLFVBQUgsQ0FBY1gsR0FBZCxDQUE1QixFQUFnRDtBQUM5Q0YsWUFBTUUsR0FBTjtBQUNELEtBRkQsTUFFTyxJQUFJVSxrQkFBR0MsVUFBSCxDQUFjSCxlQUFLSSxPQUFMLENBQWFkLEdBQWIsRUFBa0JFLEdBQWxCLENBQWQsQ0FBSixFQUEyQztBQUNoREYsWUFBTVUsZUFBS0ksT0FBTCxDQUFhZCxHQUFiLEVBQWtCRSxHQUFsQixDQUFOO0FBQ0Q7QUFDRixHQWhCSCxFQWlCR2EsS0FqQkgsQ0FpQlNkLFFBQVFlLElBakJqQjs7QUFtQkEsUUFBTUMsY0FBYztBQUNsQmpCLE9BRGtCO0FBRWxCa0IsaUJBQWEsSUFGSztBQUdsQkMsZUFBV2hCLG9CQUFRZ0IsU0FIRDtBQUlsQkMsU0FBS2pCLG9CQUFRaUIsR0FKSztBQUtsQkMsWUFBUWxCLG9CQUFRa0IsTUFMRTtBQU1sQkMsa0JBQWNuQixvQkFBUW9CO0FBTkosR0FBcEI7QUFRQSxNQUFJcEIsb0JBQVFxQixNQUFaLEVBQW9CUCxZQUFZUSxjQUFaLEdBQTZCdEIsb0JBQVFxQixNQUFSLENBQWVFLEtBQWYsQ0FBcUIsR0FBckIsQ0FBN0I7O0FBRXBCVCxjQUFZVSxXQUFaLEdBQTBCLHdDQUExQjs7QUFFQSxRQUFNLGtCQUFRVixXQUFSLENBQU47QUFDRCxDQWxDRCIsImZpbGUiOiJlbGVjdHJvbi1mb3JnZS1wdWJsaXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHByb2dyYW0gZnJvbSAnY29tbWFuZGVyJztcblxuaW1wb3J0ICcuL3V0aWwvdGVybWluYXRlJztcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBnZXRNYWtlT3B0aW9ucyB9IGZyb20gJy4vZWxlY3Ryb24tZm9yZ2UtbWFrZSc7XG5cbihhc3luYyAoKSA9PiB7XG4gIGxldCBkaXIgPSBwcm9jZXNzLmN3ZCgpO1xuICBwcm9ncmFtXG4gICAgLnZlcnNpb24ocmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbilcbiAgICAuYXJndW1lbnRzKCdbY3dkXScpXG4gICAgLm9wdGlvbignLS1hdXRoLXRva2VuJywgJ0F1dGhvcml6YXRpb24gdG9rZW4gZm9yIHlvdXIgcHVibGlzaGVyIHRhcmdldCAoaWYgcmVxdWlyZWQpJylcbiAgICAub3B0aW9uKCctLXRhZycsICdUaGUgdGFnIHRvIHB1Ymxpc2ggdG8gb24gR2l0SHViJylcbiAgICAub3B0aW9uKCctLXRhcmdldCBbdGFyZ2V0Wyx0YXJnZXQuLi5dXScsICdUaGUgY29tbWEtc2VwYXJhdGVkIGRlcGxveW1lbnQgdGFyZ2V0cywgZGVmYXVsdHMgdG8gXCJnaXRodWJcIicpXG4gICAgLm9wdGlvbignLS1kcnktcnVuJywgJ1RyaWdnZXJzIGEgcHVibGlzaCBkcnkgcnVuIHdoaWNoIHNhdmVzIHN0YXRlIGFuZCBkb2VzblxcJ3QgdXBsb2FkIGFueXRoaW5nJylcbiAgICAub3B0aW9uKCctLWZyb20tZHJ5LXJ1bicsICdBdHRlbXB0cyB0byBwdWJsaXNoIGFydGlmYWN0cyBmcm9tIHRoZSBsYXN0IHNhdmVkIGRyeSBydW4nKVxuICAgIC5hbGxvd1Vua25vd25PcHRpb24odHJ1ZSlcbiAgICAuYWN0aW9uKChjd2QpID0+IHtcbiAgICAgIGlmICghY3dkKSByZXR1cm47XG4gICAgICBpZiAocGF0aC5pc0Fic29sdXRlKGN3ZCkgJiYgZnMuZXhpc3RzU3luYyhjd2QpKSB7XG4gICAgICAgIGRpciA9IGN3ZDtcbiAgICAgIH0gZWxzZSBpZiAoZnMuZXhpc3RzU3luYyhwYXRoLnJlc29sdmUoZGlyLCBjd2QpKSkge1xuICAgICAgICBkaXIgPSBwYXRoLnJlc29sdmUoZGlyLCBjd2QpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnBhcnNlKHByb2Nlc3MuYXJndik7XG5cbiAgY29uc3QgcHVibGlzaE9wdHMgPSB7XG4gICAgZGlyLFxuICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgIGF1dGhUb2tlbjogcHJvZ3JhbS5hdXRoVG9rZW4sXG4gICAgdGFnOiBwcm9ncmFtLnRhZyxcbiAgICBkcnlSdW46IHByb2dyYW0uZHJ5UnVuLFxuICAgIGRyeVJ1blJlc3VtZTogcHJvZ3JhbS5mcm9tRHJ5UnVuLFxuICB9O1xuICBpZiAocHJvZ3JhbS50YXJnZXQpIHB1Ymxpc2hPcHRzLnB1Ymxpc2hUYXJnZXRzID0gcHJvZ3JhbS50YXJnZXQuc3BsaXQoJywnKTtcblxuICBwdWJsaXNoT3B0cy5tYWtlT3B0aW9ucyA9IGdldE1ha2VPcHRpb25zKCk7XG5cbiAgYXdhaXQgcHVibGlzaChwdWJsaXNoT3B0cyk7XG59KSgpO1xuIl19