// This example shows an asymmetry between setLevel and isLevelEnabled:
// 1) setLevel("foo") works, but setLevel(log4js.levels.foo) silently does not (sets the level to TRACE).
// 2) isLevelEnabled("foo") works as does isLevelEnabled(log4js.levels.foo).
//
var log4js=require("log4js");
var exampleLogger = log4js.getLogger("example-1");
var strLevels= ['Trace','Debug','Info','Warn','Error','Fatal'];

// iterate through each of the log levels as strings,
// and log a message at that level
function messageCycle(logger) {
  strLevels.forEach( function(l) {
    logger[l.toLowerCase()]("++ "+l+" level log message");
  });
}

// iterate through each of the log levels as strings,
// and generate a console log if the logging level isEnabled
function checkCycle(logger) {
  strLevels.forEach( function(l) {
    if (logger.isLevelEnabled(log4js.levels.toLevel(l))) {
      console.log(l+" logging level enabled");
    }
  });
}

console.log('*** Setting logging level to "DEBUG" and then to "INFO" behaves as expected');
// Setting to DEBUG first so can be sure we're not picking up the default TRACE level
exampleLogger.setLevel("DEBUG");
exampleLogger.setLevel("INFO");
messageCycle(exampleLogger);
checkCycle(exampleLogger);

console.log('*** Setting logging level to "DEBUG" and then to log4js.levels.INFO behaves as if TRACE was set');
// Setting to DEBUG first so can be sure we're not picking up the default TRACE level
exampleLogger.setLevel("DEBUG");
exampleLogger.setLevel(log4js.levels.INFO);
messageCycle(exampleLogger);
checkCycle(exampleLogger);

