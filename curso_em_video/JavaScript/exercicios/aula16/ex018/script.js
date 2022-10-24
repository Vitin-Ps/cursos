// Funcionalidades dos Botões

function adap() {
    let botao = document.getElementById('botaoad')
    botao.style.background = 'var(--cor1)'
}

function adsl() {
    let botao = document.getElementById('botaoad')
    botao.style.background = 'var(--cor0)'
}

function fnap() {
    let botao = document.getElementById('botaofn')
    botao.style.background = 'var(--cor1)'
}

function fnsl() {
    let botao = document.getElementById('botaofn')
    botao.style.background = 'var(--cor0)'
}

// Funcionalidade do Analizador de números

let num = document.querySelector('input#txtvalor')
let res = document.getElementById('resultado')
let lista = document.querySelector('select#seltab')
let valores = []

// As duas próximas funções não estão presentes no html. Elas foram criadas para dar funcionalidade para a função (adicionar())

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    //O indexOf serve para procurar a posição de um elemento detro da variável composta, se o número não estiver em nenhuma posição da variável, será descrito o número -1
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    /*
    n == -1 significa que ele não esta na lista
    n != -1 significa que ele está dentro da lista
    */
}
/*--------------------------------------------------*/

function adicionar() {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }

    num.value = '' /*O Java sempre carregar o ultimo comando escrito no código, ou seja, ao colocar esse comando por ultimo o num ficar vazio*/ 
    num.focus()  /*comando usado para dar foco na variável, ou seja, o cursor vai ficar la mesmo depois de você clicar em um botao por acaso*/
} 

function finalizar() {
    if (valores.length == 0) {
        windoww.alert('Adicione Valores antes de finaizar.')
    } else {
       let tot = valores.length
       //quando a variavel e 1 ela é a maior e a menor por isso se dar os mesmos valores
       let maior = valores[0]
       let menor = valores[0]
       let soma = 0
       let media = 0


       for (let pos/*var pos criada*/ in valores) {

        soma += valores[pos] // a soma começa com 0 e vai somando com todos os valores até o for acaba

        if (valores[pos] > maior) // se o pos for maior que a variavel[posição 0] então ele será maior
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
       }

       media = soma / tot


       res.innerHTML = ''
       res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
       res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
       res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
       res.innerHTML += `<p>A soma é de ${soma}</p>`
       res.innerHTML += `<p>A média é de ${media}</p>`
    }
}



