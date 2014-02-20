describe('test', function(){
	it ('asserts ', function(){
		var mode = getMode([5,3,3,3,1]);
		expect(mode).toBe(3);
	})
	
	it ('asserts ', function(){
		var mode = getMode([ 4, 4, 4, 6, 2]);
		expect(mode).toBe(4);
	})
	
	it ('asserts ', function(){
		var mode = getMode([1, 2, 3]);
		expect(mode).toBe(1);
	})
})

describe('', function(){

	it ('asserts ', function(){
		var equals = modeIsMean([1, 2, 3]);
		expect(equals).toBe(0);
	})
	
	it ('asserts ', function(){
		var equals = modeIsMean([ 4, 4, 4, 6, 2]);
		expect(equals).toBe(1);
	})
});