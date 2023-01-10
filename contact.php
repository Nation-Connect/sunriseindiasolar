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
                        <a href="index.php">Home <i class="fa fa-angle-right"></i></a>
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
                            <form action="#" class="contact-form" id="contact-form">
                                <div class="row">
                                    <input type="hidden" name="send-contact-mail" />
                                    <div class="col-xs-12 col-sm-12 col-md-6"><label>Name</label><input type="text"
                                            name="name" required=""></div>
                                    <div class="col-xs-12 col-sm-12 col-md-6"><label>Email</label><input type="text"
                                            name="email" required=""></div>
                                    <div class="col-xs-12 col-sm-12 col-md-6"><label>Mobile</label><input type="text"
                                            name="mobile" required=""></div>
                                    <div class="col-xs-12 col-sm-12 col-md-6"><label>Subject</label><input type="text"
                                            name="subject" required=""></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12"><label>Message</label><textarea
                                            name="message" required=""></textarea></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 text-center"><button type="submit"
                                            name="submit" class="submit-btn"> Submit </button></div>
                                    <div id="form-message-success" style="display:none;font-size:20px;margin-top:10px;"
                                        class="mb-4 text-center text-success">
                                        Your message was sent, Thank you!
                                    </div>
                                    <div id="form-message-danger" style="display:none;font-size:20px;margin-top:10px;"
                                        class="mb-4 text-center text-danger">
                                        Something went wrong!, please try again.
                                    </div>
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
    <script>
    $("#contact-form").submit(function(event) {
        event.preventDefault();
        $(".submit-btn").html("<i class=`fa fa-circle-notch fa-spin`></i> Please wait...");
        $(".submit-btn").prop('disabled', true);
        $('#form-message-success').hide();
        $('#form-message-danger').hide();
        var formValues = $(this).serialize();
        $.post("mail.php", formValues, function(data) {
            $(".submit-btn").html("Submit");
            $(".submit-btn").prop('disabled', false);
            if (data) {
                $('#form-message-success').show().delay(5000).fadeOut(500);
                $("#contactForm")[0].reset();
            } else {
                $('#form-message-danger').show().delay(5000).fadeOut(500);
            }
        });
    });
    </script>
</body>

</html>