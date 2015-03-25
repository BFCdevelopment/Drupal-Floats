$(document).ready(function(){
    $(".content img").each(function(){
        var floated = $(this).css('float');
        $(this).addClass("img-"+floated);
    });
});