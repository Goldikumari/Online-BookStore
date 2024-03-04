<?php
include 'login.php';
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $password = $_POST['password'];
   
    // $chk = "";
    // foreach($date as $chk1){
    //     $chk .= $chk1.",";
    // }
    $sql = "insert into login2(username,password) VALUES ('$name','$password')";
    $result = mysqli_query($con, $sql);
    if ($result) {
        echo "data inserted successfully";
    } else {
        echo "data not inserted";
    }
    mysqli_close($con);
}

?>