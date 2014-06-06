create an object and assign it to a variable spinner..

var spinner = //creation steps 

spinner.up() => 1
spinner.up() => 2
spinner.up() => 3
spinner.up() => 4

spinner.down() => 3
spinner.down() => 2
spinner.down() => 1
spinner.down() => 0
spinner.down() => -1

var spinner = function(){
	var spin = 0;
	function increment(){
		return ++spin;

	}
	function decrement(){
		retun --spin
	}
	return {
		up : increment,
		down : decrement
	}
}


create a function "isPrime" that caches the result for the given values

var isPrime = (function(){
   var cache = {0 : false, 1 : true, 2 : true, 3 : true};
   return function(n){
        if (typeof cache[n] !== "undefined"){
            console.log("From cache...");
            return cache[n];
        }
        cache[n] = true;
        for(var i=2;i<=(n/2);i++)
             if (n % i === 0){
                 cache[n] = false;
                 break;
             }
        console.log("Freshly brewed...");
        return cache[n];
   }
})();
  

