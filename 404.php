<?php
http_response_code(404);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Page Not Found | SUNRISE INDIA</title>
    <?php include 'head.php'; ?>
    <meta name="robots" content="noindex, nofollow">
</head>

<body>
    <?php include 'header.php'; ?>

    <main class="container text-center" style="padding: 100px 15px;">
        <p style="font-size: 72px; font-weight: 700; line-height: 1; margin-bottom: 20px;">404</p>
        <h1>Page Not Found</h1>
        <p class="mb-4">The page you are looking for may have moved or no longer exists.</p>
        <a href="index.php" class="pxp-cta text-uppercase">Back to Home</a>
    </main>

    <?php
    include 'footer.php';
    include 'foot.php';
    ?>
</body>

</html>
