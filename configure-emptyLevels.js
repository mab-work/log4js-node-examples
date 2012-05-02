// This example shows expected behaviour of log4js.configure
// Contrast with configure-noLevels.js
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


console.log('*** Configuring log4js with a config containing empty "levels');
console.log('*** Behaves as expected but differently to config containing no levels');
log4js.configure({levels:{}});
messageCycle(loggerA);
checkCycle(loggerA);

