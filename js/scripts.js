	

	function generateString() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 20; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		/*console.log(text) ;*/
		document.getElementById("foo").innerHTML= text
	}
	function generateString2() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 600; i++ ) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		/*console.log(text) ;*/
		document.getElementById("foo").innerHTML= text
	}

	var myVar = setInterval( generateString, 100);


	function myStopFunction() {


		clearInterval(myVar);
		document.getElementById("foo").innerHTML= "Quadrivium"
	}


	/* Open when someone clicks on the span element */
	function openNav() {
		document.getElementById("myNav").style.width = "100%";
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
		document.getElementById("myNav").style.width = "0%";
	}