<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $mailFrom = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "info@kajconstructioninc.com";
    $headers = "From: ".mailFrom;
    $txt = "You have received an e-mail from ".$name.". \n Phone Number: ".$number.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailSend");
}
?>