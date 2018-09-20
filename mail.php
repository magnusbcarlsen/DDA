<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$formcontent="From: $name \n Message: $message";
$recipient = "ninja.magnus@gmail.com";
$subject = "member";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>


</body>

</html>
