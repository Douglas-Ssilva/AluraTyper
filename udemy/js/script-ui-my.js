$('#accordion').accordion({
    collapsible: true
});

const dados= ['Douglas','Inez', 'Geraldo', 'Igor'];
$('#tags').autocomplete({
    source: dados
});
/* 
$('#city').autocomplete({
    source: function(request, response){
        $.ajax({
            url: 'http://ws.geonames.org/searchJSON',//params definidos do WS
            dataType: 'jsonP',
            data: {
                featureClass: 'P',
                style: 'full',
                maxRows: 12,
                name_startsWith: request.term
            },
            success: function(data){//geonames nome definido da var que guarda os valores
                response($.map(data.geonames, function(item){
                    return {
                        label: item.name + (item.country ? ', ' + item.country : ''),
                        value: item.name
                    }
                }));
            }
        });
    },
    minLength: 2
}); */

$('.ancora').button({
    icons: {primary:'ui-icon-suitcase'},
    text: false
});

$('#checks').buttonset();
$('#radius').buttonset();

$('#data').datepicker($.datepicker.regional['pt-BR']);
/* $('#data').datepicker({
    showOn: 'button',
    buttonImage: 'img/calendar-24.gif',
    buttonImageOnly: true
}); */
/* $('#dialog').dialog({
    height: 450,
    modal: true,
    buttons: {
        'Deletar todos': function(){
            $(this).dialog('close');
        },
        Cancel: function(){
            $(this).dialog('close');
        }
    }
}); */

$('#drag').draggable();
/**Quando colocar, faça isso */
$('#drop').droppable({
    drop: function(event, ui){
        $(this).addClass('ui-state-highlight').find('p').text('Colocado!!!')
    }
});

$('#catalogo ul li').draggable({
    helper: 'clone'
});
$('#car ul').droppable({
    drop: function(event, ui){
        $(this).append($('<li/>').text(ui.draggable.text()));
        $(this).find('.mensagem').remove();
    }
});

var progressbar = $( "#progressbar" ), progressLabel = $( ".progress-label" );

progressbar.progressbar({
    value: false,
    change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
    },
    complete: function() {
        progressLabel.text( "Complete!" );
    }
});

function progress() {
var val = progressbar.progressbar("value") || 0;
progressbar.progressbar( "value", val + 2 );

    if ( val < 99 ) {
        setTimeout( progress, 80 );
    }
}
/*Faz a primeira chamada a função */
setTimeout(progress, 2000 );

$('#resizable').resizable();

$('#tabs').tabs();

$('#slider').slider({
    min: 10,
    max: 100,
    value: 60, 
    slide: function(event, ui){
        $('#input').val(ui.value);
    }
});

$('#ol').selectable();

/* $(function(){
    $('#formulario').validate({
       messages : {
            email : {
                required : "Por favor, informe seu nome.",
                email: 'Email invalido!'
            }
        }
    });
}); */

$('#dataP').mask('99/99/9999');
$('#phone').mask('(99) 99999-9999');

$(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
/*     $('#zipeCode').jZipCode({
        streetTarget: '#street',
        districtTarget: '#district',
        cityTarget: '#city',
        stateTarget: '#state',
        multipleReturns: '#returns',
        keyUpDelay: 1500,
        showMap: '#map'
    }); */
});


$(document).ready(function() {
    function limpa_formulário_cep() {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }

    $("#cep").blur(function() {
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if(validacep.test(cep)) {
                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    }
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            }
            else {               
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } 
        else {           
            limpa_formulário_cep();
        }
    });
});

$('#pass').passtrength({
    minChars: 6,
    tooltip:true,
    textWeak:"Weak",
    textMedium:"Medium",
    textStrong:"Forte",
    textVeryStrong:"Very Strong",
    passwordToggle:true,
    eyeImg :"https://www.jqueryscript.net/demo/Visual-Password-Strength-Indicator-Plugin-For-jQuery-Passtrength-js/img/eye.svg"    
});

