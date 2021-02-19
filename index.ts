const problemNum = parseInt(process.argv[process.argv.length - 1]);
if (!isNaN(problemNum) && problemNum >= 1 && problemNum < 1000) {
	const startNum = problemNum - (problemNum % 50) + 1;
	const endNum = startNum + 49;
	const _ = num => ("000" + num).substr(-3); // Leading Zeros
	require(`./problems/${_(startNum)}-${_(endNum)}/${_(problemNum)}`);	
} else {
	console.log("¯\\_(ツ)_/¯");
}