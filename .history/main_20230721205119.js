function som () {
    document.querySelector('#som_tecla_pom').play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

while (contador < listadeteclas.length) {
    listadeteclas[contador].onclick = pomclick;

contador = contador + 1;

console.log(contador);

}

