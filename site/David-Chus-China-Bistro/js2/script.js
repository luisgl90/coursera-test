$(function () { //Same as document.addEventListener("DOMContentLoaded"...

	//Same as document.querySelector("#navbarToogle").addEventListener("blur",...
	$("#navbarToogle").blur(function (event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
			console.log("Hide navbar!")
		}
	});

	$("#navbarToggle").click(function (event) {
  		$(event.target).focus();
	});

}); 