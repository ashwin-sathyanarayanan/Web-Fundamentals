
$(function(){
    $('#addClass-btn').click(function(){
        $('#addClass-p').addClass('red');
    })
    $('#slidetoggle-btn').click(function(){
        $('#img-toggle').toggle();
    })
    $('#append-btn').click(function(){
        $('.append-div').append('<p>New Line Added</p>');
    })
    $('#hide-btn').click(function(){
        $('#hide-show-p').hide();
    })
    $('#show-btn').click(function(){
        $('#hide-show-p').show();
    })
    $('#slide-up-btn').click(function(){
        $('.sliding-div').slideUp("slow");
    })
    $('#slide-down-btn').click(function(){
        $('.sliding-div').slideDown("slow");
    })
    $('#fade-in-btn').click(function(){
        $('.fade-div').fadeIn("slow");
    })
    $('#fade-out-btn').click(function(){
        $('.fade-div').fadeOut("slow");
    })
    $('#before-btn').click(function(){
        $('.before-after-div').before('<h3>Before</h3>');
    })
    $('#after-btn').click(function(){
        $('.before-after-div').after('<h3>After</h3>');
    })
    $('#html-btn').click(function(){
        $( "div.html-div").html("<p>All new content. <em>You bet!</em></p>");
    })
    $('#input-btn').click(function(){
        var text = $( this ).text();
        $( "input" ).val( text );
    })
    $("#attr-btn").click(function(){
        $("#img-attr").attr("width","100");
    });
});