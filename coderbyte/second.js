var second = function(arr){
	var distinct = [];
	input.forEach(function(el, ind){
		if (distinct.every(function(num){ return num !== el; }))
			distinct.push(el);
	});
	if (distinct.length === 1) return distinct[0] + ' ' + distinct [0];
	
	var secondLowest = distinct.sort(function(a,b) { return a - b; })[1];
	var secondGreatest = distinct.sort(function(a,b) { return b - a; })[1];
	var result = secondLowest + ' ' + secondGreatest;
	console.dir(distinct);
	console.dir(result);
}

var input = [1,2,3,3, 42,42,180];
//var input = [4, 90];
second(input);