(function(window){
	var luisGreeter = {};
	luisGreeter.name = "Luis";
	var greeting = "Hi ";
	luisGreeter.sayHi = function(){
		console.log(greeting + luisGreeter.name);
	}

	window.luisGreeter = luisGreeter; //Expose it to the outside

})(window);