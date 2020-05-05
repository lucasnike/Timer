let contador = 0

function continuar(){
    continue;
}

setInterval(() => {
    continuar()
    console.log(contador++);
}, 1000)