//String concatenation

var string = "Hello";
string += " World"
console.log(string + "!");

//Regular math operators
console.log((5 + 4)/3);
console.log(undefined / 5);

function test1 (a){
	console.log(a / 5);
}
test1();

//Equality
var x = 4, y = 4;
if (x == y){
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y){
	console.log("x='4' is equal to y=4 (type coercion)");
}

//Strict equality
x = "4";
if (x === y){ 
	console.log("x='4' is equal to y=4 (strict equality)");
}
else{
	console.log("x='4' is not equal to y=4");	
}


// if statement (all false)
if (false || null || undefined || "" || 0 || NaN){
	console.log("This line won't ever execute");
}
else{
	console.log("All false");
}

// if statement (all true)
if (true && "hello" && 1 && -1 && "false"){
	console.log("All true");
}


//Best practice for {} style
// Curly brace on the same or next line
function a()
{
	return //Returns nothing
	{
		name: "Yaakov"
	};
}

function b()
{
	return{ //Returns object
		name: "Yaakov"
	};
}

console.log(a());
console.log(b());


//For loop
var sum = 0;
for (var i=0 ; i<10; i++){
	sum += i;
}
console.log("Sum of 0 through 9 is: ", sum);



// Handlig default values
function orderChickenWith(sideDish){

	/*if (sideDish === undefined){
		sideDish = "whatever";
	}*/

	sideDish = sideDish || "whatever";

	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

