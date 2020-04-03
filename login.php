<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Login - Panacea</title>
    <link rel="shortcut icon" href="assets/img/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic">
    <link rel="stylesheet" href="assets/fonts/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <link rel="stylesheet" href="assets/css/login.css">
    
</head>

<body>
    <?php 
    //session_start();
    if (isset($_SESSION['login'])) {
        echo"<script>alert('You are logged in');window.location.href='index.php'</script>";
    };
    include 'navBar.php';
    ?>
    <div class="module">
        <div class="wrapper">
            <div class="login">
                <form action="doLogin.php?" method="post">
                    <input type="text" name="username" tabindex="1" placeholder="Please enter the username">
                    <input type="password" name="password" tabindex="2" placeholder="Please enter the password">
                    <input type="submit" class="btn btn-success" value="Log In">
                </form>
            </div>
        </div>
    </div>
</body>

</html>
