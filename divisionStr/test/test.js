describe("A division", function(){
	it ("format 1 digit long", function(){
		var actual = division(2,3);
		expect(actual).toBe('1');
	});
	
	it ("format number 3 digit long", function(){
		var actual = division(789,3);
		expect(actual).toBe('263');
	});
	
	it ("format number 5 digit long", function(){
		var actual = division(543132,10);
		expect(actual).toBe('54,313');
	});
	
	it ("format number 10 digit long", function(){
		var actual = division(85080415810, 23);
		expect(actual).toBe('3,699,148,513');
	});
});