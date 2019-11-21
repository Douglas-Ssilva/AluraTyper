<?php

$login = $_POST["login"];

if ($login == "joel") {
    echo json_encode(false); 
} else {
    echo json_encode(true);
}