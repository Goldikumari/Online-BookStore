<!DOCTYPE html>
<html lang="en">
    <head>
        <title>sign up</title>
        <link rel="stylesheet" href="Css/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Robot" rel="stylesheet">
    </head>



<div class="signup-box" >
    <form action="sign.php"method="post">
    <h1> sign up</h1>
    <h4>It's free and only take a minute</h4>
    
        <label>First Name</label>
        <input type="text" placeholder=""name="first_name">
        <label>Last Name</label>
        <input type="text" placeholder=""name="last_name">
        <label>Email</label>
        <input type="email" placeholder=""name="email">
        <label>password</label>
        <input type="password" placeholder=""name="password">
        <label>Confirm password</label>
        <input type="password" placeholder=""name="confirm_password">
        <input type="submit" value="sign in" class="signinbtn" name="submit">
    
        <p> By clicking the Sign up button, you agree to our <br>
        <a href="#">Terms and Condition</a> and <a href="#">policy & Privacy</a>
    </p>
</form>
   </div>
   <p class="para-2">Already have an account? <a href="http://localhost/onlinebook/project/html.php">Login here</a></p>
   </html>