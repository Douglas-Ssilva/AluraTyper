$("#trocarFrase").click(buscarFrasesServidor);
$("#buscarFrase").click(buscarFrase);

function buscarFrasesServidor(){
    $("#spinner").show();
    $.get("http://localhost:3000/frases", trocaFrases) //se dá certo, chame a function
    .fail(function(){       //se falhar
        $("#error").show();
        setTimeout(function(){
            //$("#error").hide();
            $("#error").toggle();
        }, 2000);
    })
    .always(function(){ //é sempre executado
        $("#spinner").hide();
    });
}

function trocaFrases(data){ //data é o meu retorno da request
    var frase= $(".frase");
    var numAleatorio= Math.floor( Math.random() * data.length);
    frase.text(data[numAleatorio].texto);
    contarTamanhoFrase();
    contarTempoFrase(data[numAleatorio].tempo);
}

function buscarFrase(){
    var idFrase= $("#buscarFraseInput").val();
    var dados= {id : idFrase};

    $("#spinner").show();
    $.get("http://localhost:3000/frases", dados, getFrase)
    .fail(function(){
        $("#error").show();
        setTimeout(function(){            
            $("#error").toggle();
        }, 2000);
    })    
    .always(function(){
        $("#spinner").toggle();
    });
}

function getFrase(data){
    var frase= $(".frase");
    frase.text(data.texto);
    contarTamanhoFrase();
    contarTempoFrase(data.tempo);
    
}
