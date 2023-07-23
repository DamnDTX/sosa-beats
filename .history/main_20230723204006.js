function somplay (idDoElementoDoSom) {
    document.querySelector(idDoElementoDoSom).play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

while (contador < listadeteclas.length) {

   const instrumento = listadeteclas[contador].classList[1];
   const tecla = listadeteclas[contador];

   const idAudio = ´#som_${instrumento}´;

   console.log(instrumento)

    tecla[contador].onclick = function () {
        somplay(instrumento);
    };

contador = contador + 1;

console.log(contador);

}

