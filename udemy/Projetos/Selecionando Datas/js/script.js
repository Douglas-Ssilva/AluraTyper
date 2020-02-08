$(function(){
    var elementCurrent;

    $('input').bind('focus', function(){      
        $('#divHour').stop();
        var position= $(this).offset(); //return position left and top
        var widthElement = $(this).width();        
        $('#divHour').css('left', widthElement + 14).css('top', position.top);
        $('#divHour').show();
        elementCurrent= $(this);
    });

    $('input').bind('blur', function(){
        
            $('#divHour').hide('show');
             
    });

    $('#divHour button').bind('click', function(){
        elementCurrent.val($(this).text());
        $(this).hide(); //sumindo horário já escolhido
    });
});