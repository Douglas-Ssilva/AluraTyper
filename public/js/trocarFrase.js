$("#trocarFrase").click(buscarFrasesServidor);
$("#buscarFrase").click(buscarFrase);
$("#sincronizarPlacar").click(sincronizarPlacar);

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

function sincronizarPlacar(){   
    var placar= [];
    const tbody= $('tbody>tr');//pegando os filhos direto
    tbody.each(function(){
        const usuario= $(this).find('td:nth-child(1)').text();//get 1 filho. seletor avançado css
        const numPalavras= $(this).find('td:nth-child(2)').text();

        var score= {
            usuario: usuario,
            pontos: numPalavras
        };   
        placar.push(score);    
    });       
        
    var dados= { //não podemos enviar diretamente um array, podemos mandar uma string ou objeto JS
        placar: placar
    };
        
    $.post('http://localhost:3000/placar', dados, function(){
        $('#success').show();
        setTimeout(function(){
            $('#success').slideToggle(600);
        }, 2000);
    })
    .fail(function(){
        $("#error").show();
        setTimeout(function(){
            $("#error").slideToggle(600);
        }, 1500);
    });
}

function updatePlacar(){
    $.get('http://localhost:3000/placar', function(dados){
        $(dados).each(function(){
            var linha= createElements(this.usuario, this.pontos);
            $(".placar").slideDown(600);            
            linha.find(".botao-remover").click(removerElemento);
            $("tbody").append(linha);
        });        
    })
    .fail(function(){
        $("#error").show();
        setTimeout(function(){
            $("#error").slideToggle(600);
        }, 1500);
    });
}

//$('li').each(function() {
  //  var texto = $(this).text();
    //console.log(texto);
//});
//É possível usar o each do jQuery para iterarmos em um array padrão do JavaScript:

//var letras = ['a', 'b', 'c'];

//$.each(letras, function() {
  //   console.log(this);
//});
