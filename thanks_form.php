<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $agree = isset($_POST["agree"]) ? "Yes" : "No";

    $to = "contact@fantasypro.com";
    $email_subject = "New Contact Form Submission: $subject";
    
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n";
    $email_body .= "Message:\n$message\n\n";
    $email_body .= "Agreed to terms: $agree";

    $headers = "From: $to\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    mail($to, $email_subject, $email_body, $headers);
    
    header("Location: thanks.html");
    exit();
}
?>
