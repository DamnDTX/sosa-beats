function somplay (idDoElementoDoSom) {
    document.querySelector(idDoElementoDoSom).play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

while (contador < listadeteclas.length) {
    listadeteclas[contador].onclick = function () {
        somplay('#som_tecla_pom');
    };

contador = contador + 1;

console.log(contador);

}

