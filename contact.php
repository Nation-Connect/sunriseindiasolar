<!DOCTYPE html>
<html lang="en" class="">

<head>
	<title>SUNRISE INDIA</title>
	<?php
	include 'head.php';
	?>
</head>

<body>
<?php
	include 'header.php';
	?>
	<div class="breadcumb">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="breadcrumbs">
						<a href="index-2.html">Home <i class="fa fa-angle-right"></i></a>
						<a href="#">Contact Us</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="about-us-area contact-us">
		<div class="container">
			<div class="row contact-box">
				<div class="">

					<div class="row">
						<div class="col-lg-12 col-md-12 col-12">
							<div class="single-about">
								<div class="section-title">
									<h1 class="text-center mb-5">Contact Us</h1>

								</div>

							</div>
							<form method="post" action="http://www.satwiksungreen.com/thanks.php">
								<div class="row">
									<div class="col-xs-12 col-sm-12 col-md-6"><label>Name</label><input type="text" name="name" required=""></div>
									<div class="col-xs-12 col-sm-12 col-md-6"><label>Email</label><input type="text" name="email" required=""></div>
									<div class="col-xs-12 col-sm-12 col-md-6"><label>Mobile</label><input type="text" name="mobile" required=""></div>
									<div class="col-xs-12 col-sm-12 col-md-6"><label>Subject</label><input type="text" name="subject" required=""></div>
									<div class="col-xs-12 col-sm-12 col-md-12"><label>Message</label><textarea name="message" required=""></textarea></div>
									<div class="col-xs-12 col-sm-12 col-md-12 text-center"><input type="submit" name="submit"></div>
								</div>
							</form>
						</div>



					</div>
				</div>


			</div>
		</div>
	</div>
	
	<?php
	include 'footer.php';
	include 'foot.php';
	?>
</body>
</html>