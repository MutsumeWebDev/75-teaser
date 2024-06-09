$(".openbtn").click(function () {
    // active状態ならハンバーガーメニューの内容を表示
    $(this).toggleClass('active');
    $(".detail__list__top").toggleClass('active');
    // スクロールの対象をbodyとハンバーガーメニューで入れ替える
    if ($("body").css("overflow") === "hidden"){
        $("body").css({overflow: ""});
        $(".detail__list__top").css({overflow: "hidden"});
    } else {
        $("body").css({overflow: "hidden"});
        $(".detail__list__top").css({overflow: "scroll"});
    }
});