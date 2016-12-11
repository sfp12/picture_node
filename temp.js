require('shelljs/global');
var util = require('util');

var version = exec('node --version', {silent:true}).stdout;
console.log(version);

