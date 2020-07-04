//Arrays

var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
	console.log("Hello " + name)
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);

console.log(array[1]);

array[2](array[0]);

console.log(array[3].course);

// Short hand array creation
var names = ["Yaakov","Luis","Jhon"]; //Creates an array
console.log(names);

var names2 = [
	{name: "Yaakov"},
	"Luis",
	"Jhon"]; //Creates an array
console.log(names2);

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}

names[100] = "Jim"; //The rest are undefined
for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}



var names3 = ["Yaakov","Luis","Jhon"];
var myObj = {
	name: "Yaakov",
	course: "HTML/CSS/JS",
	platform: "Coursera"
}; 

for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}

for (var name in names3) {
	console.log("Hello " + names3[name]);
}

names3.greeting = "Hi!"; //Is printed because greeting became a property of names3
for (var name in names3) {
	console.log("Hello " + names3[name]);
}