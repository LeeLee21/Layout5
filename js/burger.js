$(document).ready(function (){
    $('.burger').click(function (event){
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});