const detail__list__top = '<ul class="detail__list__top">\
<div id="top__mutsume"><div class="top">\
<img class="top__img" src="favicon.png" alt="むつめ祭のアイコン">\
<div class=""><h1 class="top__top">むつめ祭</h1><h2 class="top__sub">Official Teaser Site</h2>\
</div></div></div>\
<li class="lists"><a href="/index.html">トップ</a></li>\
<li class="lists"><a href="/kyosan.html">協賛のお願い</a></li>\
<li class="lists__last"><a href="/student.html">参加団体へ</a></li>\
<!-- <li class="lists"><a href="">テーマ発表</a></li>\
<li class="lists__last"><a href="">公式テーマソング</a></li> --></ul>';

const detail__list__bottom = '<ul class="detail__list__bottom">\
<li class="lists__bottom"><a href="/index.html">トップ</a></li>\
<li class="lists__bottom"><a href="/kyosan.html">協賛について</a></li>\
<li class="lists__last__bottom"><a href="/student.html">参加団体へ</a></li>\
<!-- <li class="lists__bottom"><a href="">テーマ</a></li>\
<li class="lists__last__bottom"><a href="">公式テーマソング</a></li> --></ul>';

document.getElementById("menubar__top").innerHTML = detail__list__top;
document.getElementById("menubar__bottom").innerHTML = detail__list__bottom;