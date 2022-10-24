var botao = document.getElementById('calcular')

function apertar() {
    botao.style.background = 'rgb(38, 62, 82)'
}

function soltar() {
    botao.style.background = 'rgb(0, 140, 255)'
}

function verificar() {
    let res = document.getElementById('res')
    let i = Number(document.getElementById('txtinicio').value)
    let f = Number(document.getElementById('txtfim').value)
    let p = Number(document.getElementById('txtpasso').value) /*
    var variavel1 = document.getElementById('id')

    var variavel2 = Number(variave1.value) - Transformar variável 'string' em decimal
    */
   let c = i
    res.innerHTML = 'Contando: '

    if (i == 0 || f == 0) {
        window.alert('[ERRO].... (Inicio) ou (Fim) não foram preenchidos!!!')
    } else {
        if (p == 0 ) {
            window.alert('Número inválido. Considerando PASSO 1!!!')
            p = 1
        } if (i < f) {
            for (let c = i; c < f; c += p){
    
                res.innerHTML += `${c} \u{1F449}`
    
            }
        }
        else {
            for (let c = i; c > f; c -= p) {
    
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}` // \u{cod-emogi} - Para adicionarum emogi
    } 
}