$(function(){
    $('#btn').bind('click', obterValores);
    $('#peso').mask("#0,00", {reverse: true});
    $('#altura').mask("#0,00", {reverse: true});
});

function obterValores(){
    var altura= $('#altura').val();
    var peso = $('#peso').val();    
    var imc= realizarCalculo(altura, peso);
    mostrarResultado(imc);
}

function realizarCalculo(altura, peso){
    altura= altura.replace(",", ".");
    peso= peso.replace(",", ".");
    /** divide-se o peso do paciente pela sua altura elevada ao quadrado */
    var imc = peso / (altura * altura);
    return imc.toString().substr(0,5);
}

function mostrarResultado(result){    
    var numeroTela = result.toString().replace(".", ",");
    var faixaPeso= calcularFaixaIMC(result);
    $('#resultado').val(numeroTela);
    $('#labelResultado').text(faixaPeso);    
}

function calcularFaixaIMC(imc){    
    if(imc < 18.5){
        return 'Magreza'
    }else if(imc >= 18.5 && imc <= 24.9){
        return 'Normal';
    }else if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso';
    }else if(imc >= 30 && imc <= 39.9){
        return 'Obesidade';
    }else if(imc > 40){
        return 'OBESIDADE GRAVE';
    }
}