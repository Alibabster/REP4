<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Главная</title>
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
    <div class="ln_topbar">
        <div class="ln_topbar_container container">

            <div class="l_ln_topbar">
                <div class="l_ln_topbar-left">

                    <ul class="ln_topbar_nav">
                        <li class="ln_topbar_nav-item"><a class="ln_topbar_nav-lnk" href="/add">Добавить историю</a></li>
                        <li class="ln_topbar_nav-item"><a class="ln_topbar_nav-lnk" href="/library">Моя библиотека</a></li>
                    </ul>
                </div>

                <div class="l_ln_topbar-right">
                    <div class="ln_topbar_search">
                        <form action="/search" class="ln_topbar_search_form" id="search-form" style="display: -webkit-inline-flex">
                            <input type="text" name="title" placeholder="Найти" class="form-control">
                            <button type="submit" class="ln_btn ln_btn-brand ln_topbar-reg" style="align-content: center; width: 100px;">Искать</button>
                        </form>
                    </div>

                    <div class="ln_topbar_login">
                        <a href="/login" class="ln_topbar_nav-lnk">Вход</a>
                        <a href="/register" class="ln_btn ln_btn-brand ln_topbar-reg">Регистрация</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row book-item" style="width: 1000px; margin-top: 70px; padding-top: 70px;">
        <div class="col-xs-7">
            <h4 class="book-title"><a href=""><%out.println(request.getParameter("title"));%></a></h4>
            <p class="author-wr"><a class="author" href="">Ольга Обская</a></p>
            Может, кто-то не обрадовался бы, узнав, что ему в наследство досталась заброшенная артефакторная лавка с дурной славой, но я была в восторге. Потому что быстро сообр... <a href="" class="readmore">подробнее</a></p>
            <p class="tags-wr"><span class="meta-name">В тексте есть: </span> <a href="">юмор</a>, <a href="">любовь и страсть</a>, <a href="">бытовое фэнтези</a></p>
            <div class="pull-right">
                        <span class="book-status book-status-process" data-toggle="tooltip" data-placement="bottom" title="244 618 знаков">
                            <i class="material-icons">&#xe86a;</i>
                            В процессе: 14 Мар
                            <span>123 стр</span>
                        </span></div>
            <div class="pull-left">
                <span class="count-views" data-toggle="tooltip" data-placement="bottom" title="Кол-во просмотров">756029</span>
                <span class="count-favourites" data-toggle="tooltip" data-placement="bottom" title="Кол-во добавлений в библиотеку">20479</span>
                <span class="count-comments" data-toggle="tooltip" data-placement="bottom" title="Кол-во комментариев">4818</span>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="col-xs-3 meta-info">
            <p><span class="meta-name">Общий рейтинг:</span> 3272 <span style="color: #f9b729;"><i class="glyphicon glyphicon-star"></i></span> </p>
            <p><span class="meta-name">Текущий рейтинг:</span><br />
                <strong>#1 в <a href=''>Попаданцы</a> </strong><br />#1 в <a href=''>Попаданцы в другие миры</a><br /><strong>#3 в <a target='blank' href=''>Фэнтези</a> </strong><br />#3 в <a href=''>Юмористическое фэнтези</a> </p>
        </div>
    </div>
</body>
</html>