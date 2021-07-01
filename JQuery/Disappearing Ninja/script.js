$(function(){
    $('img').click(function() {
        $(this).hide();
    });
    $('#reset-btn').click(function() {
        $('img').show();
    });
})