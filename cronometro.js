const nodeList = document.querySelectorAll('span')
const numeros = Array.from(nodeList)

let isStoped = false
let contador = 0

let s4 = 1
let s3 = 0
let s2 = 0
let s1 = 0

function inverterIsStoped() {
    isStoped = !isStoped
}

function regularSetInterval() {
    contador++
    if (contador === 1) {
        const iniciar = () => {
            isStoped = false
            inter = setInterval(() => {
                if (isStoped === false) {
            
                    if (s4 === 10 && s3 != 6) {
                    
                        s4 = 0
                        s3++
                    }
                    if (s3 === 6) {
                        s2++
                        s3 = 0
                    }
                    if (s2 === 10) {
                        s1++
                        s2 = 0
                    }
                    
                    numeros[3].innerHTML = s4++
                    numeros[2].innerHTML = s3
                    numeros[1].innerHTML = s2
                    numeros[0].innerHTML = s1
                }
            }, 1000 ) 
            
        }
        return iniciar
    } else {
        return () => {}
    }
}



function zerar(){
    s4 = 1
    s3 = 0
    s2 = 0
    s1 = 0
    numeros[3].innerHTML = 0
    numeros[2].innerHTML = 0
    numeros[1].innerHTML = 0
    numeros[0].innerHTML = 0
    isStoped = true
    contador = 0
    clearInterval(inter)
}