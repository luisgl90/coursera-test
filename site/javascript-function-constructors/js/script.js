function test(){
	console.log(this);
	this.myName = "Yaakov;"
}

test();
console.log(window.myName);


// Function constructors

function Circle(radius){ 
	this.radius = radius;

	/*this.getArea = 
		function () {
			return Math.PI * Math.pow(this.radius,2);
		};*/
}

Circle.prototype.getArea = // Prototype is implemented outside the function
	function () {
		return Math.PI * Math.pow(this.radius,2);
	};

var myCircle = new Circle(10); //New object
console.log(myCircle.getArea());
console.log(myCircle);

var myOtherCircle = new Circle(20); //New object
console.log(myOtherCircle.getArea());
console.log(myOtherCircle);