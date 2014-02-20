describe('dash insert test', function(){
	it ('', function(){
		var result = dashInsert(99946);
		expect(result).toBe('9-9-946');
	});
	
	it ('', function(){
		var result = dashInsert(56730);
		expect(result).toBe('567-30');
	});
})