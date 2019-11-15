var frase= $(".frase").text();
var palavrasHTML= $("#numeroPalavras");
var numPalavras= frase.split(" ").length;
palavrasHTML.text(numPalavras);

var fieldType= $(".fieldType");

//Quando cliclar no campo, faça isso "fieldType.on("click", function(){"
fieldType.on("input", function(){ //a medida que digita
    var texto= fieldType.val().split(/\S+/).length - 1; //busca vários tipos de espaço vazio
    var characteres= fieldType.val().length;

    $("#contadorPalavras").text(texto);
    $("#contadorCaracteres").text(characteres);


    console.log(fieldType.val());
});





