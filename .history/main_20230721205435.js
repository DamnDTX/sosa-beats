function som (idDoElementoDoSom) {

    document.querySelector(idDoElementoDoSom).play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

while (contador < listadeteclas.length) {
    listadeteclas[contador].onclick = som;

contador = contador + 1;

console.log(contador);

}

