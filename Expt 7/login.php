<?php
session_start();

if(isset($_POST['login']))
{
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == "afifa" && $password == "1234")
    {
        $_SESSION['username'] = $username;

        setcookie("username", $username, time()+3600);       // 1 hour

        header("Location: welcome.php");
    }
    else
    {
        echo "Invalid Login!";
    }
}
?>

<form method="post">
Username: <input type="text" name="username"><br><br>
Password: <input type="password" name="password"><br><br>
<input type="submit" name="login" value="Login">
</form>