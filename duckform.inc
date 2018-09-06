<div id="content">

	<div id="formcard">

		<form action="index.php" id="duckform" method="post" enctype="multipart/form-data">

			<h2>The Duck Tracker</h2>

			What time are the ducks fed? <span class="error"> </span><br>
			<input type="time" required name="time" value="" id="time"><br>

			What food are the ducks fed? <span class="error"> </span><br>
			<input type="text" required name="food" value=""><br>

			Where are the ducks fed? <span class="error"> </span><br>
			<input type="text" required name="location" value=""><br>			

			How many ducks are fed? <span class="error"> </span><br>
			<input type="text" required name="numducks" value=""><br>

			How much food are the ducks fed? <span class="error"> </span><br>
			<input type="text" required name="numfood" value=""><br>

			<button type="submit" name="submit" value="submit" id="submit">Submit</button>

		</form>

	</div>

</div>