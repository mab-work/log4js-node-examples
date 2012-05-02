# log4js-node-examples

Examples of using log4js-node which highlight some issues

* `setLevel` asymmetry: `setLevel("foo")` works, but `setLevel(log4js.levels.foo)` silently does not (sets the level to TRACE). BUT both `isLevelEnabled("foo")` and `isLevelEnabled(log4js.levels.foo)` work. Example in `setLevelAsymmetry.js`.
* `configure` inconsistency: `log4js.configure({})` sets all loggers' levels to TRACE even if previously set by `setLevel`, `log4js.configure({levels:{}})` preserves levels previously set by `setLevel`. Examples in `configure-noLevels.js`, `configure-emptyLevels.js` and `configure-partialLevels.js`
