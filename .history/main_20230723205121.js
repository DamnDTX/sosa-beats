function somplay (idDoElementoDoSom) {
    document.querySelector(idDoElementoDoSom).play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

for (contador < listadeteclas.length) {

   const instrumento = listadeteclas[contador].classList[1];
   const tecla = listadeteclas[contador];
        //template.string;
   const idAudio = `#som_${instrumento}`;
        //console.log(idAudio);

    tecla.onclick = function () {
        somplay(idAudio);
    };

contador = contador + 1;
//console.log(contador);
}
