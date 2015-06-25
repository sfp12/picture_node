var shell = require('shelljs');
var util = require('util');

var version = shell.exec('java', {silent:true}).output;
console.log(version);

// var cp = require('child_process');
// cp.exec('java', function(err, stdout, stderr){
// 	console.log(stdout);
// });