<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="https://rust.litnet.com/common/plugins/bxslider/jquery.bxslider.css?v=1466973214" rel="stylesheet">
    <link href="https://rust.litnet.com/assets/ec9df54/css/widget-bxslider.css?v=1531047733" rel="stylesheet">
    <link href="https://rust.litnet.com/assets/240f3d8a/css/bootstrap.min.css?v=1550073338" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/font-awesome.min.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/litnet-icon-font.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/grids.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/site.css?v=36" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/social-likes_classic.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/flags16.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/showLoading.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/common/css/jquery.jgrowl.min.css?v=1.1" rel="stylesheet">
    <link href="https://rust.litnet.com/dist/main.css?v=3.7" rel="stylesheet">
    <link href="https://rust.litnet.com/assets/751e66ed/css/eauth.css?v=1491769381" rel="stylesheet">
</head>
<body>
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">LOGIN</h4>
        </div>
        <form action="/login" method="post" id="login-form">
            <div class="modal-body">
                <span class="pre-label">Username</span>
                <input type="text" name="username" placeholder="Username" class="form-control" style="width: 500px;">
                <span class="pre-label">Password</span>
                <input name="password" type="password" placeholder="Password" class="form-control" style="width: 500px;">
            </div>
            <div class="modal-footer clearfix">
                <a href="/register" data-toggle="modal" data-target="#register-modal" class="forgot-password pull-left">Register</a>
                <button type="submit" class="btn btn-pink pull-right">Login</button>
            </div>
        </form>
    </div>
</body>
</html>
