$('tbody tr:not(.sub)').hide(); //suma as tr que não tem a class sub
$('.sub th').prepend('<img src="img/add.png" class="img">');
$('img').bind('click', function(){
    var valueSrcImg= $(this).attr('src');
    if(valueSrcImg === 'img/remove.png'){
        //$(this).attr('src', 'img/add.png').parents().siblings('tr').hide();
        $(this).attr('src', 'img/add.png').parents().nextUntil("tr.sub").hide(); 
    }else{
        //$(this).attr('src', 'img/remove.png').parents().siblings('tr').show();
        $(this).attr('src', 'img/remove.png').parents().nextUntil("tr.sub").show()
    }
});
