<?php
// Database configuration
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "lab_attendance";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}
?>