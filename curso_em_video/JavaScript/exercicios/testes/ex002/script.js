function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let anonascimento = document.getElementById('txtano')
    let fano = Number(anonascimento.value)
    let res = document.getElementById('res')

    if (fano == 0 || fano > ano) {
        window.alert('[ERRO]... Número inválido!!!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano
        let genero = '' // cria a variavel vazia para ser usada como duas opções como no if else
        let img = document.createElement('img')
            img.setAttribute('id', 'foto') // Cria uma imagem com o id foto ou seja, é a mesma coisa que adicionar o código <img id="foto"> no html
            
        /*
        if (fsex[0]) {

            res.innerHTML = 'deu o 0'

        } else if (fsex[1]) {
            res.innerHTML = 'deu o 1'
        }
        */
        
        let max = document.getElementById('max')
        let fem = document.getElementById('fem')

        if (max.checked) /*Masculino*/ {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3){
                //Bebê
                img.setAttribute('src', 'imagens/bebe-homem-p.png')

            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-homem-.png')


            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-homem-p.png')

            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto-p.png')

            } else {
                //Idoso
                img.setAttribute('src', 'imagens/homem-idoso-p.png')

            }
        } else /*Feminino*/ {

            genero = 'Mulher'
            if (idade > 0 && idade <= 3){
                //Bebê
                img.setAttribute('src', 'imagens/bebe-mulher-p.png')

            } else if (idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/crianca-muher-.png')


            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher-p.png')

            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta-p.png')

            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulher-idosa-p.png')

            }
        }

            res.style.textAlign = 'center'
            res.innerHTML = `É ${genero} de ${idade} anos<br>`
            res.appendChild(img) // para puxar a imagem criada em js
            
    }
        

    }

    