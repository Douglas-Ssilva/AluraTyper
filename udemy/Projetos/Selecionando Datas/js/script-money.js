var total= 0;
$(function(){
    $('.money').bind('keyup paste', function(){    
        this.value = this.value.replace(/[^0-9]/g, '');    
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
    return numero.join(','); /**junta todos elementos de um array e retorna uma string */
}
