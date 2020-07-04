//Object literals and 'this'

var literalCircle = { 	// new Object()
	radius: 10,

	getArea: function(){
		var self = this; //because self.radius = 20; points to global object
		console.log(this);

		var increaseRadius = function() {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea()) ;