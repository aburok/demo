var numberAdd = function(string){
	function isNumber(n){
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	var words = string.split(" ");

	var numbers = words.map(function(a) { return isNumber(a) ? parseInt(a) : 0; });

	var sum = numbers.reduce(function(a,b) { return a + b; });

	return sum;
};
