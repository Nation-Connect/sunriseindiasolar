<?php
http_response_code(404);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Page Not Found | SUNRISE INDIA</title>
    <?php include 'head.php'; ?>
    <meta name="robots" content="noindex, nofollow">
    <style>
        .error-page {
            position: relative;
            overflow: hidden;
            min-height: 520px;
            padding: 90px 0 100px;
            background: #f7f2df;
        }

        .error-page::before {
            position: absolute;
            top: -140px;
            right: -80px;
            width: 430px;
            height: 430px;
            border: 34px solid #fcca03;
            border-radius: 50%;
            content: "";
            opacity: .85;
        }

        .error-page::after {
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 150px;
            background-image: linear-gradient(rgba(0, 73, 183, .08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 73, 183, .08) 1px, transparent 1px);
            background-size: 30px 30px;
            content: "";
            mask-image: linear-gradient(to top, #000, transparent);
        }

        .error-page .container {
            position: relative;
            z-index: 1;
        }

        .error-number {
            color: #0049b7;
            font-family: heading, sans-serif;
            font-size: clamp(120px, 20vw, 240px);
            line-height: .75;
            letter-spacing: 4px;
        }

        .error-copy {
            max-width: 500px;
            padding-top: 18px;
        }

        .error-kicker {
            margin-bottom: 14px;
            color: #640000;
            font-family: menu, sans-serif;
            font-size: 15px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }

        .error-copy h1 {
            margin-bottom: 18px;
            color: #0049b7;
            font-size: clamp(36px, 5vw, 58px);
            line-height: 1.05;
        }

        .error-copy p {
            max-width: 390px;
            margin-bottom: 30px;
            color: #333;
            font-size: 17px;
            line-height: 1.7;
        }

        .error-links {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 22px;
        }

        .error-home {
            display: inline-block;
            padding: 14px 22px;
            background: #0049b7;
            color: #fff;
            font-family: menu, sans-serif;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .error-home:hover,
        .error-home:focus {
            background: #640000;
            color: #fff;
        }

        .error-explore {
            color: #0049b7;
            font-family: menu, sans-serif;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .error-explore::after {
            display: inline-block;
            width: 28px;
            margin-left: 10px;
            border-top: 2px solid #fcca03;
            content: "";
            vertical-align: middle;
        }

        @media (max-width: 767px) {
            .error-page {
                min-height: 560px;
                padding: 80px 15px;
            }

            .error-page::before {
                top: -90px;
                right: -160px;
                width: 330px;
                height: 330px;
            }

            .error-number {
                margin-bottom: 30px;
            }

            .error-copy {
                padding-top: 0;
            }
        }
    </style>
</head>

<body>
    <?php include 'header.php'; ?>

    <main class="error-page">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-5">
                    <div class="error-number">404</div>
                </div>
                <div class="col-md-7">
                    <div class="error-copy">
                        <div class="error-kicker">Signal lost</div>
                        <h1>Looks like this page went off-grid.</h1>
                        <p>The address may be incorrect, or the page has moved. Let us help you find your way back to Sunrise India.</p>
                        <div class="error-links">
                            <a href="index.php" class="error-home">Back to Home</a>
                            <a href="solar-rooftop.php" class="error-explore">Explore Solar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <?php
    include 'footer.php';
    include 'foot.php';
    ?>
</body>

</html>
