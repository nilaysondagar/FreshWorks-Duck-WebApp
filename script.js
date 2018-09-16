/*
 * Filename: script.js
 * Author: Nilay Sondagar
 * Date Created: September 11, 2018
 * Purpose: To allow for the form card to slide in and out on button click for
 * 			the Duck Tracker website.
 */

var inOrOut = 1; // tracks whether the slide page is hidden or not

// When the page has loaded, set a fixed viewport width and height, 
	// to prevent the Android OS keyboard from resizing elements
document.addEventListener('DOMContentLoaded', function(){
    let viewheight = $(window).height();
    let viewwidth = $(window).width();
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
});

function showForm() {

	// If the page is smaller than 1020px, slide the form page DOWN, else slide
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