<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

include 'config.php';

$json = file_get_contents("php://input");
$data = json_decode($json, true);

$mobile = $data['mobile'];
$password = $data['password'];

// Fetch the user's details based on their mobile number
$sql = "SELECT id, name, password_hash, role FROM users WHERE mobile = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $mobile);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    // User exists, now check the password
    if (password_verify($password, $row['password_hash'])) {
        // Password is correct! Send back the user's name
        echo json_encode([
            "status" => "success", 
            "message" => "Login successful",
            "name" => $row['name'],
            "role" => $row['role']
        ]);
    } else {
        echo json_encode(["status" => "error", "message" => "Incorrect password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}
?>