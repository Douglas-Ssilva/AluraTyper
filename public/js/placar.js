$("#mostrarPlacar").click(mostrarPlacar);

function salvarPlacar(){
    var user= 'Douglas';
    var pontuacao= fieldType.val().length;
    var tbodyTable= $(".placar").find("tbody");
    var linha= createElements(user, pontuacao);
    linha.find(".botao-remover").click(removerElemento);
    tbodyTable.append(linha);
    //var buttonRemove=  "<a href='#' class='botao-remover' title= 'Remover'> <i class='small material-icons'> delete </i> </a>";
    //Montando objeto consigo usar as functions JQuery, da forma acima como é String nao é possível
    //var linha= '<tr>' + '<td>' +  user + '</td>' + '<td>' + fieldType.val().length + '</td>' + '<td>' + buttonRemove + '</td>' + '</tr>';    
    //tbodyTable.prepend(linha);  add no inicio                 
}

function createElements(user, pontuacao){
    var tr= $("<tr>"); //return proprio element
    var tdNome=  $("<td>").text(user);
    var tdPontuacao=  $("<td>").text(pontuacao);
    var tdRemove=  $("<td>");
    var link= $("<a>").attr("href", "#").addClass("botao-remover");
    var img= $("<i>").addClass("small material-icons").text("delete");

    link.append(img);
    tdRemove.append(link);
    tr.append(tdNome);
    tr.append(tdPontuacao);
    tr.append(tdRemove);    

    return tr;
}

function scrollPlacar(){
    var posicaoPlacarDoTopo= $(".placar").offset().top;
    $("html, body").animate({
        scrollTop: posicaoPlacarDoTopo + "px"
    }, 1000);    
}

function removerElemento(event){    
    event.preventDefault(); //this pegando o proprio elemento que chamou
    var tr= $(this).parent().parent(); //dando poder p elemento HTML com JQuery. Removendo a <tr>    
    //tr.fadeIn(700);
    //tr.fadeToggle(700);
    tr.fadeOut(700);

    setTimeout( function(){
        tr.remove();
    }, 700);    
}

//$(".post").removeAttr("disabled");

function mostrarPlacar(){
    $("#mostrarPlacar").text("Mostrando tabela...");
//    $(".placar").css("display", "block");
//    $(".placar").show(); hide(); esconde
//    $(".placar").toggle(); add ou hide no elemento, assim nao preciso usar if
//    $(".placar").slideDown(); mostra de cima p baixo
//    $(".placar").slideDown(600);
//    $(".placar").slideUp();
      $(".placar").stop().slideToggle(600); //Alterna entre down e up. Stop diz p parar a ultima animação,  caso o user de varios cliques nao fica preso no loop de animação
}


$('#botao-promocao').click(function() {
    var promocoes = $('.promocoes');
    if(promocoes.is(':visible')) {  
      promocoes.hide();
    } else {
      promocoes.show();
    }
  
  });
  //O jQuery possui a função is que permite consultar uma pseudo class. Toda vez que um elemento esta com display diferente de none ele ganha a pseudo classe :visible . 
  //A função is retorna true caso o elemento esteja visível. Se ele estiver visível, precisamos escondê-lo e isso é feito através da função hide. Para exibir o elemento, é usada 
  //a função show.

  $('#botao-promocao').click(function() {
    $('.promocoes').toggleClass('invisivel');  
  });
  //A função toogleClass (não confundir com a função toggle) adiciona uma classe caso ela não exista no elemento. Se existir, ela remove a classe.

  $('#botao-promocao').click(function() {
    $('.promocoes').toggle();  
  });
  //A função toggle é um atalho para as funções hide e show. Quando ela é chamada para um elemento visível, o elemento fica invisível. Quando é chamada para um elemento invisível, 
  //ela torna o elemento visível
  $('#botao-promocao').click(function() {
    var promocoes = $('.promocoes');
    if(promocoes.hasClass('invisivel')) {  
      promocoes.removeClass('invisivel');
    } else {
      promocoes.addClass('invisivel');
    }  
  });
  //Esta correta! o jQuery possui a função hasClass que retorna true se um elemento possui ou não uma classe. Na condição, removemos a classe invisivel caso o elemento 
  //já a tenha e a adicionamos caso ele não a tenha. Todo esse processo é feito a cada clique do usuário.  

  $('li').dblclick(function() {
    var $this = $(this);
    $this.fadeOut(function() {
        $this.remove();
    })
});

//Para que a remoção seja feito só depois do efeito de fadeOut ter terminado, ela passou uma função para a função fadeOut. Essa função é chamada só quando fadeOut termina. 
//Sendo assim, na função ela pôde chamar $this.remove() com a certeza que o efeito de fadeOut já foi processado.



































