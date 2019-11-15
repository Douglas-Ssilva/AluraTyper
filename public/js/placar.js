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

function removerElemento(event){    
    event.preventDefault(); //this pegando o proprio elemento que chamou
    $(this).parent().parent().remove();//dando poder p elemento HTML com JQuery. Removendo a <tr>    
}