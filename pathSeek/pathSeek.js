var seekPath = function(map, from, to){
	var graph = [];
	var verticies = [];

};

var getVertices = function(map){
	var result = [];
	map.forEach(function(el, ind, arr){
		//if (result.some(function(vert) { return el === vert.name; }
		if (result.indexOf(el[0]) < 0){
			result.push(el[0]);
		}
		if(result.indexOf(el[1]) < 0){
			result.push(el[1]);
		}	
	})	;
	return result;
}

var getEdges = function(map){
	var vert = getVerticies(map);
	var result = [];

	for (var i = 0; i < vert.length; i++){
		for (var j = 0; j < vert.length; j++){

		}
	}
	return result;
}

function graph(){
	var vertices = [];

}

graph.prototype.tryAdd = function(vertex){

}

function vertex(name){
	var self = this;
	var neighbours = [];

	self.name = name;
	self.addNeighbour = function(vertex, distance){
		neighbours.push({v: vertex, distance : distance});
	}
	self.getNeighbours = function(){
		return neighbours;
	}

	return self;
}

vertex.prototype.toString = function() {
	return this.name + _ + this.getNeighbours().map(
			function(el){return el.v.name + el.distance;})
		.join("");
}
