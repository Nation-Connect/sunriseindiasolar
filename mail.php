<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/PHPMailer/src/Exception.php';
    require 'PHPMailer/PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/PHPMailer/src/SMTP.php';    
    require 'PHPMailer/PHPMailer/vendor/autoload.php';
    $mail = new PHPMailer;

    if(isset($_POST['send-contact-mail']))
    {	    
        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message = $_POST["message"];
        $mobile = $_POST["mobile"];
        $body = 'Name:- '.$name.'<br>Email id:- '.$email.'<br>Mobile:- '.$mobile.'<br>Message:- '.$message;
    }
        
    try {
        //Server settings
        $mail->SMTPDebug = 1;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'mail.sunriseindiasolar.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'no-reply@sunriseindiasolar.com';                     // SMTP username
        $mail->Password   = 'hh+kzyjb^5P9';                               // SMTP password
        $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom('no-reply@sunriseindiasolar.com', 'Sunrise India');
        $mail->addAddress("info@sunriseindiasolar.com", "'Sunrise India");     // Add a recipient
        $mail->addReplyTo($email, $name);
    
        // Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    
        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->send();
        echo true;
        //echo 'Message has been sent';
    } catch (Exception $e) {
        echo false;
        //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
 

?>