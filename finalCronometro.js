function configurarTimer(id) {
    const numeros = Array.from(document.querySelectorAll('span'))
    let pausado = true
    let nums = [0,0,0,1]

    document.querySelector(`[pausar-timer]`).onclick = e => {
        pausado = !pausado
    }
    document.querySelector(`[zerar-timer]`).onclick = e => {
        for(let i = 0; i < nums.length; i++){
            numeros[i].innerHTML = 0
            nums[i] = 0
            if(i === 3) nums[i] = 1
        }
        pausado = true
    }
    setInterval(() => {
        if (pausado === false) {
            if (nums[3] === 10 && nums[2] != 6) {
                nums[3] = 0
                nums[2]++
            }
            if (nums[2] === 6) {
                nums[1]++
                nums[2] = 0
            }
            if (nums[1] === 10) {
                nums[0]++
                nums[1] = 0
            } 
            numeros[3].innerHTML = nums[3]++
            numeros[2].innerHTML = nums[2]
            numeros[1].innerHTML = nums[1]
            numeros[0].innerHTML = nums[0]
        }
    }, 1000 )
}
configurarTimer(timer)