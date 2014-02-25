describe(' test number addition from a string ', function(){
	it (' add 1 to 2 ', function(){
		var result = numberAdd("add 1 to 2");
		expect(result).toBe(3);
	});
	
	it(' add 1 to 2 to 3 ', function(){
		var result = numberAdd("add 1 to 2 to 3");
		expect(result).toBe(6);
	});
	
	it(' only words no numbers', function(){
		var result = numberAdd("no numbers only words");
		expect(result).toBe(0);
	});
	it(' only numbers no words', function(){
		var result = numberAdd("1 12 202");
		expect(result).toBe(215);
	});
});
