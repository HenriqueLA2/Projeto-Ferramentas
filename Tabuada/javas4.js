function calcular() {
    let nini = document.getElementById('ninicial')
    let seltab = document.getElementById('tabuada')

    if (nini.value.length == 0) {
        alert('{ERRO} Valor zerado')
    } else {
        let n = Number(nini.value)
        let c = 1
        seltab.innerHTML = ''
        while (c <= 10) {
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `seeltab${c}`
            seltab.appendChild(op)
            c++

        }
    }

    

}