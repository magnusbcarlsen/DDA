<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$formcontent="From: $name \nphone: $phone";
/* $recipient = "ninja.magnus@gmail.com"; */
$recipient = "info@danishdebate.com";
$subject = "Volunteer";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Congratulations! You're now a volunteer in Danish Debate";
?>
</body>
</html>