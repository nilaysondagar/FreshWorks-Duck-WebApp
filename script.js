var inOrOut = 1;

function showForm() {

	if(window.innerWidth < 1020) {

		if(inOrOut == 1) {
			document.getElementById("duckform").style.marginTop = "155%";
			inOrOut = 0;
		} else if(inOrOut == 0) {	
			document.getElementById("duckform").style.marginTop = "15%";
			inOrOut = 1;
		} // if else

	} else {

		if(inOrOut == 1) {
			document.getElementById("duckform").style.marginLeft = "123%";
			inOrOut = 0;
		} else if(inOrOut == 0) {	
			document.getElementById("duckform").style.marginLeft = "20%";
			inOrOut = 1;
		} // if else

	}
}// showForm