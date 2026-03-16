<?php
session_start();

if(!isset($_SESSION['username']))
{
    header("Location: login.php");
}

echo "Welcome " . $_SESSION['username'] . "<br>";

if(isset($_COOKIE['username']))
{
    echo "Cookie Value: " . $_COOKIE['username'];
}
?>

<br><br>
<a href="logout.php">Logout</a>