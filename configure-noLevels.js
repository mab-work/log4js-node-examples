// This example shows unexpected behaviour of log4js.configure
// When the configuration object does not have the levels property, configure wipes the levels for all loggers back to TRACE.
var log4js = require('log4js');
var loggerA = log4js.getLogger('A');
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

console.log('*** Setting logger to ERROR with setLevel');
loggerA.setLevel("ERROR");
messageCycle(loggerA);
checkCycle(loggerA);

console.log('*** Configuring log4js with a config containing no "levels"');
console.log('*** Does not behave as expected: resets logger levels to TRACE');
log4js.configure({});
messageCycle(loggerA);
checkCycle(loggerA);

