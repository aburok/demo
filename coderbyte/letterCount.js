var letterCount = function(arr){
	var words = arr.split(" ");
		
	Array.prototype.first = function(predicate) {
	   for ( var i = 0; i < this.length; i++){
		if (predicate(this[i], i, this))
			return this[i];
	   }
	}
	
	var count = words.map(function(el, index){
		var letters = el.split("");
		var letterDict = [];
		var max = 1;
		letters.forEach(function(let, ind) {
			var count = letterDict.first(function(l){ return l.letter === let; });
			if (count) {
				count.count++;
				if (count.count > max) max= count.count;
				}
			else
				letterDict.push({letter : let, count : 1});
		});
		return {'word' : el, 'max': max, 'ind' : index};
	});
	
	var firstWordWithMaxSameLetterCount = count.sort(function(a,b) {
				return a.max === b.max ? a.ind < b.ind : a.max > b.max;
	}).pop();
	
	
	if (firstWordWithMaxSameLetterCount.max === 1) return -1;
	return firstWordWithMaxSameLetterCount.word;
}

var input = "For this challenge you will determine which word has the greatest number of repeated letters.";
console.dir(input);
console.dir(letterCount(input));