var exec = require('child_process').exec,
    child;
var cmds = ['echo 1', 'echo 2', 'echo 3', 'echo 4']

for (var i = 0; i < cmds.length; i++) {
	child = exec(cmds[i],
		function (error, stdout, stderr) {
    	console.log(stdout);
    	//console.log('stderr: ' + stderr);
    	if (error !== null) {
      		console.log('exec error: ' + error);
    	}
	});
}

//npm install execSync
var cmds = ['echo 1', 'echo 2', 'echo 3', 'echo 4']
var sh = require('execSync');
for (var i = 0; i < cmds.length; i++) {
        var code = sh.run(cmds[i]);
}