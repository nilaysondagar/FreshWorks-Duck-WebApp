<div id="content">

	<div id="infocard">
		<h2>The Duck Tracker</h2>
		
		<p id="duckinfo">Hello! My name is Nilay Sondagar, and I've been researching ducks for the last 4 years. In that time, I've learned a lot about these fascinating creatures. However, I need your help to complete my research! I'd really appreciate it if you could answer a few questions about our aquatic friends in your neighbourhood.</p>

		<button class="button" onclick="showForm()">Show Me!</button>
		<br><br><br>
		<form action="index.php" method="get">
			<button type="submit" name="showdata" value="data" class="button">See Data</button>
		</form>

	</div>

	<div id="formcard">

		<form action="index.php" id="duckform" method="post" enctype="multipart/form-data">
			<br>
			What time are the ducks fed?<span class="error"> </span><br>
			<input type="time" required name="time" value="<?php echo $time;?>" id="time"><br>

			What food are the ducks fed?<span class="error"> <?php echo $food_err;?></span><br>
			<input type="text" required name="food" value="<?php echo $food;?>"><br>

			Where are the ducks fed?<span class="error"> <?php echo $location_err;?></span><br>
			<input type="text" required name="location" value="<?php echo $location;?>"><br>			

			How many ducks are fed?<span class="error"> <?php echo $numducks_err;?></span><br>
			<input type="text" required name="numducks" value="<?php echo $numducks;?>"><br>

			How much food (lb) are the ducks fed?<span class="error"> <?php echo $numfood_err;?></span><br>
			<input type="text" required name="numfood" value="<?php echo $numfood;?>"><br>

			<button type="submit" name="submit" value="submit" class="button">Submit</button>

		</form>

	</div>

</div>
