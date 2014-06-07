function Calculator(){
	var counter = 0;
	this.add = function(x,y){
		++counter;
		return x + y;
	},
	this.operationCount= function(){
		return counter;
	}
}
module.exports = Calculator;