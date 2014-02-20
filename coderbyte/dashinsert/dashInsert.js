function dashInsert(num){
	var isOdd = function(num) { return parseInt(num) % 2 === 1; };
	
	var str = num.toString();
	
	var prevWasOdd = isOdd(str[0]);
	var result = [];
	result.push(str[0]);
	for (var i = 1; i < str.length; i++){
		if ( isOdd(str[i]) && prevWasOdd){
			result.push('-');
		}
		result.push(str[i]);
		prevWasOdd = isOdd(str[i]);
	}
	return result.join("");
}