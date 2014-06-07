var counter = 0;
var calculator = {
	add : function(x,y){
		++counter;
		return x + y;
	},
	sub : function(x,y){
		++counter;
		return x - y;
	},
	multiply : function(x,y){
		++counter;
		return x * y;
	},
	divide : function(x,y){
		++counter;
		return x/y;
	},
	operationCount : function(){
		return counter;
	}
};
module.exports = calculator;