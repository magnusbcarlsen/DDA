<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$formcontent="From: $name \nphone: $phone";
/* $recipient = "ninja.magnus@gmail.com"; */
$recipient = "info@danishdebate.com";
$subject = "Member";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Congratulations! You're now a member of Danish Debate";
?>




</body>

</html>
