var fieldType= $(".fieldType");
var tempoInicial= $("#seconds").text();

//$(function(){});
$(document).ready(function(){
    //console.log('Carreguei');
    fieldType.addClass("borda-padrao");
    contarTamanhoFrase();
    contarCaracteresDigitadosTextArea();
    contarTempoDigitacao();
    compararValoresDigitadosComFrase();
    $("#reiniciarJogo").click(reiniciarJogos);    
    updatePlacar();
});

function contarTempoFrase(tempo){
    tempoInicial= tempo;
    $("#seconds").text(tempo);
}


function contarTamanhoFrase(){
    var frase= $(".frase").text();
    var numeroPalavras= $("#numeroPalavras");
    var numPalavras= frase.split(" ").length;
    numeroPalavras.text(numPalavras);
}

function contarCaracteresDigitadosTextArea(){
    //Quando cliclar no campo, faça isso "fieldType.on("click", function(){"
    fieldType.on("input", function(){                       //a medida que digita
        var texto= fieldType.val().split(/\S+/).length - 1; //busca vários tipos de espaço vazio
        var characteres= fieldType.val().length;

        $("#contadorPalavras").text(texto);
        $("#contadorCaracteres").text(characteres);
    });
}

function contarTempoDigitacao(){
    //fieldType.on("focus", function(){ Sempre dá foco no campo, One dá somente uma vez      

    fieldType.one("focus", function(){
        var tempoRestante= $("#seconds").text();
        $("#reiniciarJogo").attr("disabled",true);
        var idInterval= setInterval(function(){
            tempoRestante--;
            $("#seconds").text(tempoRestante);
            
            if(tempoRestante < 1){
                clearInterval(idInterval);      
                finalizarJogo();                   
            }
        }, 1000);

    });
}

function finalizarJogo(){
    fieldType.toggleClass("campo-digitacao"); //fieldType.css("background-color", "campo-digitacao");
    fieldType.attr("disabled", true);
    $("#reiniciarJogo").attr("disabled", false);
    $(".placar").slideDown(600);
    salvarPlacar();  
    scrollPlacar();
}

function reiniciarJogos(){
//reiniciarJogo.on("click", function(){
//Podemos usar assim com as funções mais usadas
    fieldType.val("");
    fieldType.attr("disabled", false);
    $("#contadorPalavras").text("0");
    $("#contadorCaracteres").text("0");
    //var tempoFraseCurrent= $("#seconds").text();  
    $("#seconds").text(tempoInicial);
    addRemoveClass();
    contarTempoDigitacao();
}

function addRemoveClass(){
    fieldType.removeClass("borda-verde"); 
    fieldType.removeClass("borda-vermelha"); 
    fieldType.addClass("borda-padrao");
   // fieldType.removeClass("campo-digitacao"); toggle se tiver com a class tira, senao coloca
    fieldType.toggleClass("campo-digitacao");
}


function compararValoresDigitadosComFrase(){
    fieldType.on("input", function(){
        var frase= $(".frase").text();        
        var digitado= fieldType.val();
        var comparavel= frase.substr(0, digitado.length);

        if(comparavel === digitado){
             fieldType.addClass("borda-verde");
             fieldType.removeClass("borda-vermelha");              
             fieldType.removeClass("borda-padrao");    
        }else{
            fieldType.addClass("borda-vermelha");   
            fieldType.removeClass("borda-verde");  
            fieldType.removeClass("borda-padrao");    
        }        
    });
 
}






