document.addEventListener('DOMContentLoaded', function () {

    var navi = document.querySelector('#nav1');
    var subNavi = document.querySelector('.sub_nav');

    navi.addEventListener('mouseover', function (e) {
        subNavi.style.opacity = 1;

        navi.addEventListener('mouseleave', function (e) {
            subNavi.style.opacity = 0;

        })

    });

    var colsLft = document.querySelector('.column__left');
    var transparent = document.querySelector('.column__back__transparent');

    colsLft.addEventListener('mouseover',function (e) {
        transparent.style.display='none';

        colsLft.addEventListener('mouseleave',function (e) {
            transparent.style.display='inline-block'

        })

    });
    var colsCen = document.querySelector('.column__center');
    var transparent2 = document.querySelector('.column__back__transparent2');

    colsCen.addEventListener('mouseover',function (e) {
        transparent2.style.display='none';


        colsCen.addEventListener('mouseleave',function (e) {
            transparent2.style.display='inline-block';

        })

    });


    var prev = document.querySelector('.btn__left');
    var next = document.querySelector('.btn__right');
    var picture = document.querySelector('.chair__photo');
    var sliderTxt = document.querySelector('.slider__text');
    var indeks = 0;

    next.addEventListener('click', function (e) {
        indeks++;
        picture.classList.toggle('chair__photo');
        picture.classList.toggle('chair__photo2');



    });

    prev.addEventListener('click', function (e) {
        indeks--;
        picture.classList.toggle('chair__photo');
        picture.classList.toggle('chair__photo2');

    });





});