//Closures

function makeMultiplier(multiplier){
	
	function b(){
		console.log("Multiplier is: " + multiplier);
	}

	b();

	return (
		function(x){
			return multiplier*x;
		}
	);
}

var doubleAll = makeMultiplier(2); //multiplier remains in memory after using makeMultiplier
console.log(doubleAll(10));