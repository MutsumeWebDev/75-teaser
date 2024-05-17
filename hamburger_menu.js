$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $(".detail__list__top").toggleClass('active');
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass('active');
    $(".detail__list__top").removeClass('active');
});