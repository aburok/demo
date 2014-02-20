describe("simple test", function(){
	
	it ("1 minute diff", function(){		
		var min = countMinutes('1:00pm-11:00am');
		expect(min).toBe(1320);
	});
	
	it ("65 minute diff", function(){
		var min = countMinutes('9:00am-10:00am');
		expect(min).toBe(60);
	});
	
	it ("12:30pm-12:00am", function(){
		var min = countMinutes('12:30pm-12:00am');
		expect(min).toBe(690);
	});
	
	it ('1:23am-1:08am', function(){
		var min = countMinutes('1:23am-1:08am');
		expect(min).toBe(1425);
	});
	
	it ("3", function(){
		
	});
});

describe("pare hour test" , function(){
	it ('parse 9:00am', function(){
		var time = parse2Minutes('9:00am');
		expect(time).toBe(540);
	});
	
	it ('parse 1:00pm', function(){
		var time = parse2Minutes('1:00pm');
		expect(time).toBe(780);
	});
	
	it ('parse 11:00am', function(){
		var time = parse2Minutes('11:00am');
		expect(time).toBe(660);
	});
	
	it ('parse 1:08am', function(){
		var time = parse2Minutes('1:08am');
		expect(time).toBe(68);
	});
});

describe('get parsed array', function(){
	it ('parse 9:00am', function(){
		var arr = parseHour('9:00am');
		expect(arr[1]).toBe('9');
		expect(arr[2]).toBe('00');
		expect(arr[3]).toBe('am');
	});
	
	it ('parse 11:22pm', function(){
		var arr = parseHour('11:22pm');
		expect(arr[1]).toBe('11');
		expect(arr[2]).toBe('22');
		expect(arr[3]).toBe('pm');
	});
	
	it ('parse 1:08am', function(){
		var arr = parseHour('1:08am');
		expect(arr[1]).toBe('1');
		expect(arr[2]).toBe('08');
		expect(arr[3]).toBe('am');
	});
});