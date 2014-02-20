function ArrayAdditionI(arr) { 
	console.dir('original = [' + arr.join(', ') + ']');
  var max = arr.sort(function(a,b) { return a > b; }).pop();
  console.dir(arr);
  console.dir('max = '+ max);
  var result = getAllSubSets(arr); 
  console.dir(result);
  var sums = result.map(function(el) { return el.reduce(function(a,b) { return a + b; }) });
  console.dir(sums);
  var result = sums.some(function(el) { return el === max; });          
  console.dir(result);
  return result;
}

function getAllSubSets(arr){
    var result = [];
	
	function subSets(set){
	  if (!set || set.length < 1 || contains(result, set)) 
		return;  
	 	  
	  result.push(set);  
	  
	  for(var i = 1; i <= set.length; i++){
		var newArr = set.slice(0, i-1).concat(set.slice(i, set.length));
		subSets( newArr);
	  }
	}
	
	function contains(source, seeked){
		return source.some(function(el) { return el.compare(seeked); });
	}
	
    subSets(arr);
	return result;
}

Array.prototype.compare = function (other){
  return other 
    && this.length === other.length
	&& this.every(function(ele, ind) { return ele === other[ind]; });  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
var input = [3,5,-1,8,12];
var i2 = [5,7,16,1,2];
ArrayAdditionI(i2);                            


