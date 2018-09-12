<?php
	
	// Variables
	$content = '';                                                      // stores current page
	$food_err = $location_err = $numducks_err = $numfood_err = ""; 		// error messages used in form
	$time = $food = $location = $numducks = $numfood = "";    			// stores form values
	$form_valid = true;                                                 // stores whether form is valid or not


	// Server Type: PostgreSQL
	// Database Name: sondagar_ducktracker
	// Username: sondagar_nilay
	// Password: Qb*BjIovz0)
	$database = pg_pconnect("dbname=sondagar_ducktracker user=sondagar_nilay password=Qb*BjIovz0)");

	// If the connection to the database was unsuccessful, throw an error
	if(!$database) {
		echo "Error: Unable to connect to database.";
	}// if

	// Include HTML headers
	include "header.inc";

	if($_SERVER["REQUEST_METHOD"] == "POST") {

		// error check the food field
		list($food_err, $food) = empty_check($_POST['food']);
		error_check($_POST['food'], "/^[a-zA-Z\- ]*$/", $food_err, "Only letters and spaces allowed.", $_POST['food'], $form_valid);

		// error check the location field
		list($location_err, $location) = empty_check($_POST['location']);
		error_check($_POST['location'], "/^[a-zA-Z\-, ]*$/", $location_err, "Only letters, commas, and spaces allowed.", $_POST['location'], $form_valid);

		// error check the numducks field
		list($numducks_err, $numducks) = empty_check($_POST['numducks']);
		error_check($_POST['numducks'], "/^[0-9]*$/", $numducks_err, "Only numbers allowed.", $_POST['numducks'], $form_valid);

		// error check the numfood field
		list($numfood_err, $numfood) = empty_check($_POST['numfood']);
		error_check($_POST['numfood'], "/^[0-9]*$/", $numfood_err, "Only numbers allowed.", $_POST['numfood'], $form_valid);

		$time = $_POST['time'];

	}// if 

	if(isset($_POST["submit"]) && $_POST["submit"] == "submit" && $form_valid == true) {

		// Save validated input into variables
		$time = str_replace(":", "", $_POST['time']); // convert time [00:00] to [0000]
		$time = intval($time); // convert string time to int [24 hour time]
		$food = $_POST['food'];
		$location = $_POST['location'];
		$numducks = $_POST['numducks'];
		$numfood = $_POST['numfood'];

		// Insert new data into database
		$sql_command = "INSERT INTO duckinfo(TIME, FOOD, LOCATION, NUMDUCKS, NUMFOOD)
						VALUES (" . $time . ", '" . $food . "', '" . $location . "', " . $numducks . ", " . $numfood . ")";

		// Send request to table, print error if query fails
		$result = pg_query($database, $sql_command) or die('Query Failed: ' . pg_last_error());

		// Get all data and print in table format
		$sql_command = "SELECT TIME, FOOD, LOCATION, NUMDUCKS, NUMFOOD FROM duckinfo";

		// Send request to table, print error if query fails
		$result = pg_query($database, $sql_command) or die('Query Failed: ' . pg_last_error());

		// Print out table in HTML (debugging)
		echo "<table>";
		while($row = pg_fetch_assoc($result)){
			echo "<tr>";
			echo "<td align='center' width='200'>" . $row['time'] . "</td>";
			echo "<td align='center' width='200'>" . $row['food'] . "</td>";
			echo "<td align='center' width='200'>" . $row['location'] . "</td>";
			echo "<td align='center' width='200'>" . $row['numducks'] . "</td>";
			echo "<td align='center' width='200'>" . $row['numfood'] . "</td>";
			echo "</tr>";
		}
		echo "</table>";

	} else {
		// Include form by default
		include "duckform.inc";

		if($form_valid == false) {
			echo "<script type='text/javascript'>showForm();</script>";
		}

	}// if else


	// Include HTML footers
	include "footer.inc";

/*********************************************************************************
 *									METHODS										 *
 *********************************************************************************/

	// Check if field is empty
	function empty_check($value) {

		global $form_valid;

		if(empty($value)) {
			$array[0] = "This field is required";
			$array[1] = "";
			$form_valid = false;
		} else {
			$array[1] = test_input($value);
			$array[0] = "";
		}// if else

		return $array;

	}// empty_check

	// Validate user input
	function error_check($value, $param, &$error, $error_msg, &$name, &$valid) {
	
		// Check for invalid characters
		if (!preg_match($param, $value)) {
			$error = $error_msg;
			$name = "";
			$valid = false;
		}// if

	}// error_check

	// Strip unnecessary characters 
	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data, ENT_QUOTES);

		return $data;
		
	}// test_input

?>