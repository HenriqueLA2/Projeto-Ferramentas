function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res') //querySelector usado com mesma função do getElementById
   if(fano.value == 0 || Number (fano.value) > ano) {
    window.alert('!!(ERROR)!! Verifique as informações')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }


        } else if (fsex[1]) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        } 
        //res.style.textAling = 'center' (esse comando é para centralizar o texto via JavaScript)
        res.innerHTML = `Dectamos que, você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
    }
}