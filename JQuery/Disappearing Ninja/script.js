$(function(){
    // $(document).ready(function(){
    //     for(i=0; i<10; i++){
    //         $('#pics').append('<img src="harrypotter.png"></img>');
    // }});
    $('img').click(function() {
        $(this).hide();
    });
    $('#reset-btn').click(function() {
        $('img').show();
    });
})