/*
 * Filename: script.js
 * Author: Nilay Sondagar
 * Date Created: September 11, 2018
 * Purpose: To allow for the form card to slide in and out on button click for
 * 			the Duck Tracker website. Also checks for orientation changes and
 *			window resizing to prevent scaling issues.
 */

var inOrOut = 1; // tracks whether the slide page is hidden or not

// When the orientation changes, adjust viewport width and height, 
	// to prevent scaling issues
window.addEventListener("orientationchange", function(){

	if(window.matchMedia("(orientation: landscape)").matches) {
		document.getElementById("duckform").style.marginLeft = "0";
		document.getElementById("duckform").style.left = "50%";
		document.getElementById("duckform").style.transform = "translate(-50%)";
		document.getElementById("duckform").style.marginTop = "2.3vh";
	} else {
		document.getElementById("duckform").style.marginLeft = "8.2vh";
		document.getElementById("duckform").style.marginTop = "8vh";
		document.getElementById("duckform").style.left = null;
		document.getElementById("duckform").style.transform = null;
	}// if else

	inOrOut = 1;
});

// Closes the form page when the browser window is resized on a non-mobile browser
	// to prevent resizing/placement issues
window.addEventListener("resize", function(){

	if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {

		if(window.matchMedia("(orientation: portrait)").matches) {
			document.getElementById("duckform").style.marginLeft = "0";
			document.getElementById("duckform").style.left = "50%";
			document.getElementById("duckform").style.transform = "translate(-50%)";
			document.getElementById("duckform").style.marginTop = "2.3vh";
		} else {
			document.getElementById("duckform").style.marginLeft = "8.2vh";
			document.getElementById("duckform").style.marginTop = "8vh";
			document.getElementById("duckform").style.left = null;
			document.getElementById("duckform").style.transform = null;
		}// if else

		inOrOut = 1;

	}// if

});

// Slides the form page in and out
function showForm() {

	// If the page is in portrait mode, slide the form page DOWN, else slide
		// to the right
	if(window.matchMedia("(orientation: portrait)").matches) {

		if(inOrOut == 1) {
			document.getElementById("duckform").style.marginTop = "70vh";
			inOrOut = 0;
		} else if(inOrOut == 0) {	
			document.getElementById("duckform").style.marginTop = "2.3vh";
			inOrOut = 1;
		} // if else

	} else {

		if(inOrOut == 1) {
			document.getElementById("duckform").style.marginLeft = "54vh";
			inOrOut = 0;
		} else if(inOrOut == 0) {	
			document.getElementById("duckform").style.marginLeft = "8.2vh";
			inOrOut = 1;
		} // if else

	} // if else

}// showForm