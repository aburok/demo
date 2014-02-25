var utils = (function(){
	var second = function(array){

		var unique = _.uniq(array).sort(function(a,b) { return b - a; });

		if (unique.length > 1){
			return unique[unique.length - 2] +' ' + unique[1];
		}
		return unique[0] + ' ' + unique[0];
	};

	return {
		second : second
	};
})();
