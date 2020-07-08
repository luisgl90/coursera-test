//Event handling
document.addEventListener("DOMContentLoaded",

	function(event){

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click", function(){
			var self = this;
			
			//Call server to get the name
			$ajaxUtils.sendGetRequest("/data/name.json", function(res){ //Response is not a request, it's actually JSON text
				var message = res.firstName + " " + res.lastName;
					if (res.likesChineseFood) {
						message += " likes Chinese Food";
					}
					else{
						message += " doesn't like Chinese Food";
					}
					message += " and uses " + res.numberOfDisplays + " displays for coding.";

				document.querySelector("#content").innerHTML = "<h2> " + message + "</h2>";

			});

		});

	}

);