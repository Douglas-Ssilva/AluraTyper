$('tbody tr:not(.sub)').hide(); //suma as tr que não tem a class sub
$('.sub th').prepend('<img src="img/add.png" class="img">');
$('img').bind('click', function(){
    var valueSrcImg= $(this).attr('src');
    if(valueSrcImg === 'img/remove.png'){
        $(this).attr('src', 'img/add.png').parents().nextUntil("tr.sub").hide(); 
    }else{
        $(this).attr('src', 'img/remove.png').parents().nextUntil("tr.sub").show()
    }
});

$('a').bind('click', function(){
    alert();
    return true;
});

//$(':input + span').css({
    //border: '1px solid #000',
    //padding: '2px',
    //background: '#DCDCDC',
    //marginLeft: '4px',
  //  display: 'none'
//});

//$(':input').bind('focus', function(){
  //  $(this).next().fadeIn(1500);
//}).bind('blur', function(){
  //  $(this).next().fadeOut(1000);
//});

$('.toggle').change(function(){
    if(this.checked){
        $(':checkbox').attr('checked', 'checked');
    }else{
        $(':checkbox').removeAttr('checked');
    }    
});

$('textarea').bind('input keyup paste', function(){
    var maxCaracteres= 20;
    var qtdeDisponivel= maxCaracteres - $(this).val().length;
    if(qtdeDisponivel < 0){
        var texto= $(this).val().substr(0, maxCaracteres);
        $(this).val(texto);
        qtdeDisponivel= 0;
    }
    $('.count').text(qtdeDisponivel);  
    
});
