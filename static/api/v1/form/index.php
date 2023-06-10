<?php
require 'vendor/autoload.php'; 


if($_SERVER['HTTP_HOST'] == 'localhost:8000') {
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
}

// Configuration
$sendgrid_key = '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';
$recipient_email = "viveca.gasslander@elekta.com";
$recipient_name = "Viveca Gasslander";
$sender_email = "noreply@elekta.com";
$sender_name = "Elekta Foundation";


// Validate Input
$json = file_get_contents('php://input');
$data = json_decode($json);
if(empty($json) || empty($data)) {
    http_response_code(400);
    echo json_encode("Bad Request");
    exit;
}


$email = new \SendGrid\Mail\Mail(); 
$email->setFrom($sender_email, $sender_name);
$email->setSubject("Elektafoundation.com contact form submission [".uniqid().']');
$email->setReplyTo(trim($data->email), trim($data->name));
$email->addTo($recipient_email, $recipient_name);
$email->addContent(
    "text/plain", 
"A new message was submitted from the contact form on elektafoundation.com.

From: {$data->name} <{$data->email}>

Phone: {$data->telephone}

Organisation: {$data->organisation}

Message: 
{$data->message}
    
"
);
$sendgrid = new \SendGrid($sendgrid_key);

$response = $sendgrid->send($email);
echo json_encode($response->body());