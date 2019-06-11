
const { spawn } = require('child_process');

module.exports.spawn = function(port = 8083) {
	const args = [
		'-Djava.library.path=../lib/2019-06-05/',
		'-jar',
		'../lib/2019-06-05/StepFunctionsLocal.jar'
	]

	if (port !== null) {
		args.push('-port', port.toString());
	}

	return spawn('java', args, {
		cwd: __dirname
	});
}
