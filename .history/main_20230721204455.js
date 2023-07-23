function pomclick () {
    document.querySelector('#som_tecla_pom').play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

while (contador < 9) {
    listadeteclas[contador].onclick = pomclick;

contador = contador + 1;

console.log(contador);

}

