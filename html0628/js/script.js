// 移除#about的背景影片
$(function () {
    if ($(window).width() < 821) {
        $('#about video').remove();
    }

    /* 交替漢堡按鈕 */
    $('.hamburger').click(function () {
        /* hamburger 交替切換 .is-active */
        $(this).toggleClass('is-active');
        /* .navigation 交替切換 .show */
        $('.navigation').toggleClass('show');
    });

    /* 滑動至指定位置 */
    $('.menu a').click(function () {
        let btn = $(this).attr('href');/* 返回取得屬性與值 */
        let pos = $(btn).offset();/* 抓與相對的座標位置 */
        $('html,body').animate({ scrollTop: pos.top }), 1000;
    });

    /* 滑動至頂 */
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }), 1000;
    });

    // 至頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('', 1);
        } else {
            $('#gotop').stop().fadeOut();
        }
    });

});

//jQuery smoove
$('.smoove').smoove({
    offset: '30%'
});

$('.smoove-z').smoove({
    moveZ :'-500px',
    rotateX :'90deg',
    moveY :'250px'
});
