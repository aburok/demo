
var map = [['A', 'D', 2], ['A','C',3], ['D', 'B',3],['C','B',5]];

describe(' ', function(){

	it (' ', function(){
		var from = 'A';
		var to ='B';
		var path = seekPath(map, from, to);
		expect(path).toBe('ADC_5');
	})
})

describe('', function(){
	it(' test graph parsing', function(){
		var result = getVerticies(map);
		expect(result.length).toBe(4);
		expect(result).toContain('A');
		expect(result).toContain('C');
		expect(result).toContain('D');
		expect(result).toContain('B');
	});
})

describe(' test get Edges array ', function(){
	it('', function() {
		var edges = getEdges(map);
		expect(edges['A']['C']).toBe(3);
	});
})

describe('', function(){
	it('', function(){
		var vertices = getVertices(map);
		expect(vertices[0].toString()).toBe("A_D2_C2");
	});
})
