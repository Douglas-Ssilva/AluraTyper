var total= 0;
$(function(){
    $('.money').bind('keyup', function(){        
        total= getTotalInputs();     
        total= numberToReal(total);    
        $('.total').val(total);    
    });
});

function getTotalInputs(){
    var totalInputs= 0;
    $('.money').each(function(){        
        totalInputs+= Number($(this).val());
    }); 
    return totalInputs;
}

function numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}