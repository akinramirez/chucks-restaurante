<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$errorMSG = "";
// NAME
if (empty($_POST["name"])) {
    $errorMSG = "El nombre es requerido ";
} else {
    $name = htmlspecialchars($_POST["name"]);
}
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "El correo electronico es requerido ";
} else {
    $email = htmlspecialchars($_POST["email"]);
}
// MESSAGE
if (empty($_POST["body"])) {
    $errorMSG .= "El mensaje es requerido ";
} else {
    $message = htmlspecialchars($_POST["body"]);
}

//Cuerpo del correo
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$EmailTo = "akin.ramirez@hotmail.com";
$Subject = "Mensaje de $name";

//Envio del correo
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

if ($success && $errorMSG == ""){
	 $arr = array('success'=>'ok');
	 echo json_encode($arr);
}else{
    if($errorMSG == ""){
        $arr2 = array('success'=> 'Ha ocurrido un error :(');
	    echo json_encode($arr2);
    } else {
        $arr3 = array('success'=> $errorMSG);
        echo json_encode($arr3);
    }
}

?>