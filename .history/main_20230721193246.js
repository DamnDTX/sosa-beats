function pomclick () {
    document.querySelector('#som_tecla_pom').play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');
/* constante da lista de botões*/

listadeteclas(0).onclick = pomclick()




