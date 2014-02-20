String.prototype.swapCase = function(str){
return this.replace(/([a-z])|([A-Z])/g, function($0, $1, $2){
	return ($1) ? $0.toUpperCase() : $0.toLowerCase();
});
}
