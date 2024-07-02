function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador<listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(instrumento);


    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    
    tecla.onclick = function (){
        playSonido(idAudio);
    };
    console.log('Vuelta'+contador)
    
    tecla.onkeydown = function(evento){
        console.log(evento.code === 'Space')
        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('activa');
        }

        tecla.onkeyup = function(){
            tecla.classList.remove('activa')
        }
    }
}


