function division(num1, num2) {
	var div = Math.round(num1/num2);
	var digits= div.toString().split("").reverse();
	
	for (var i = 3; i < digits.length; i += 4){
		digits.splice(i,0,',');
	}
	return digits.reverse().join('');
}


