describe(' get scond lowest and greaters ', function(){
	it (' more than 3 different numbers ', function(){
		var result = utils.second([7, 7, 12, 98, 106]);
		expect(result).toBe("12 98");
	})

	it (' thre numbers where numbers in the middle are even ', function(){
		var result = utils.second([1, 42,42, 180]);
		expect(result).toBe("42 42");
	});

	it(' two different numbers ', function(){
		var result = utils.second([4, 90]);
		expect(result).toBe("90 4");
	});

	it (' two same digits numbers ', function(){
		var result = utils.second([7,7]);
		expect(result).toBe("7 7");
	});

	it (' more than two same digits ' , function(){
		var result = utils.second([3, 3, 3, 3, 3]);
		expect(result).toBe("3 3");
	});
})	
