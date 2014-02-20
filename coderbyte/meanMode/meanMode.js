function modeIsMean(arr){
	return getMean(arr) === getMode(arr) ? 1 : 0;
}

function getMean(arr){
	var sum = arr.reduce(function(a,b) { return a + b; });
	return sum/arr.length;
}

function getMode(arr){
	var result = [];
	var max=0, maxn;
	for(var i =0; i < arr.length; i++){
		var n = arr[i];
		if (result[n]) result[n]++ 
		else result[n] = 1;
		if (result[n] > max){
			max = result[n];
			maxn = n;
		}
	}
	return maxn;
}