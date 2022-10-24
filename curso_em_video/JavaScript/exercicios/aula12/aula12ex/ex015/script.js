function verificar() {
    // váriaveis
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    // condições
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')/*Esse comando acaba de criar um img com o id foto.*/ 
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bêbe
                img.setAttribute('src', 'imagens/bebe-homem-p.png')
            }
            else if (idade < 14) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-homem-p.png')
            }
            else if (idade < 24) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem-p.png')
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto-p.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso-p.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                // Bêbe
                img.setAttribute('src', 'imagens/bebe-mulher-p.png')
            }
            else if (idade < 14) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-mulher-p.png')
            }
            else if (idade < 24) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher-p.png')
            }
            else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta-p.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idosa-p.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
        res.appendChild(img)
    }
    
}