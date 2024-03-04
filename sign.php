<?php
include 'login.php';
if (isset($_POST['submit'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

   
    // $chk = "";
    // foreach($date as $chk1){
    //     $chk .= $chk1.",";
    // }
    $sql = "insert into signin2(first_name,last_name,email,password,confirm_password) VALUES ('$first_name','$last_name','$email','$password','$confirm_password')";
    $result = mysqli_query($con, $sql);
    if ($result) {
        echo "data inserted successfully";
    } else {
        echo "data not inserted";
    }
    mysqli_close($con);
}

?>