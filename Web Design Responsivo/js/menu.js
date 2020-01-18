document.querySelector('.menu-abrir').onclick = function(){
    document.documentElement.classList.add('menu-ativo'); /**Add à raiz, tag HTML */
}

document.querySelector('.menu-fechar').onclick = function(){
    document.documentElement.classList.remove('menu-ativo');
}

/**Mas é importante lembrar dos mecanismos de propagação de eventos do JS. Escutar cliques no <html> vai pegar todos os cliques na página, mesmo os do 
 * menu e outros elementos (afinal tudo é descendente de <html>).  */
document.documentElement.onclick = function(e) {
    if(e.target === document.documentElement){ /**Eventos js propagam entre as tags, previnindo que cliques no filho do HTML reflita aqui */
        document.documentElement.classList.remove('menu-ativo');
    }
}