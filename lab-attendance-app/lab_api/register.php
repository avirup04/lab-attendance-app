<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include 'config.php';

//Getting Raw POST data from input
$json = file_get_contents("php://input");
//converting JSON into associative array
$data = json_decode($json, true);

//Extracting the values
$name = $data['name'];
$email = $data['email'];
$mobile = $data['mobile'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);

$sql = "INSERT INTO users (name, email, mobile, password_hash) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

$stmt->bind_param("ssss", $name, $email, $mobile, $password);

if($stmt->execute()){
    echo json_encode(["status" => "success", "message" => "User registered successfully"]);
}else{
    echo json_encode(["status" => "error", "message" => "Failed to register user"]);
}
?>
