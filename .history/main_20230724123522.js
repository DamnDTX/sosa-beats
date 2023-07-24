function somplay (idDoElementoDoSom) {
    document.querySelector(idDoElementoDoSom).play();
}
 


const listadeteclas = document.querySelectorAll('.tecla');


let contador = 0;
/* let= variável*/

for (let contador = 0; contador < listadeteclas.length;contador++){
// dentro do for temos o eventos do teclado;

   const instrumento = listadeteclas[contador].classList[1];
   const tecla = listadeteclas[contador];
   const idAudio = `#som_${instrumento}`;  
         //template.string;

    tecla.onclick = function () {
        somplay(idAudio);
    }
    

    tecla.onkeydown = function(evento) {


       if (evento.code === 'Space' || evento.code === 'Enter');  { 
        tecla.classList.add('ativa');
       }


    }

    

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}



