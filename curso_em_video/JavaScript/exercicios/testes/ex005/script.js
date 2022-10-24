function downad(){
    let btad = document.getElementById('botaoad')
    
    btad.style.background = 'var(--cor3)'
    btad.style.color = 'var(--cor0)'
    btad.style.borderColor = 'var(--cor1)'
 
}

function upad() {
    let btad = document.getElementById('botaoad')

    btad.style.background = ''
    btad.style.color = ''
    btad.style.borderColor = ''
}


function downfn(){
    let btfn = document.getElementById('botaofn')
    
    btfn.style.background = 'var(--cor3)'
    btfn.style.color = 'var(--cor0)'
    btfn.style.borderColor = 'var(--cor1)'
 
}

function upfn() {
    let btfn = document.getElementById('botaofn')

    btfn.style.background = ''
    btfn.style.color = ''
    btfn.style.borderColor = ''
}


/*--------------------------------------------------------*/

// Funcionalidade do programa 

//Variáveis
    let num = document.getElementById('txtnum')
    let lista = document.getElementById('seltab')
    let res = document.getElementById('res')
    let valores = []

    function tnum(n)/*referente ao num.value*/ {
        if (Number(n) >= 1 && Number(n) <=100) {
            return true
        } else {
            return false
        }
    }

    function clista(n, l)/*referente ao num.value e valores*/ {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }


function adicionar(){
    if (tnum(num.value) && !clista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // para limpar o campo ao adicionar um número
    } else {
        window.alert('[ERRO]... Número inválido ou já inserido na lista!!!')
    }

    //obs: tem que ser dentro da function

    num.value = '' /*O Java sempre carregar o ultimo comando escrito no código, ou seja, ao colocar esse comando por ultimo o num ficar vazio*/ 
    num.focus()  /*comando usado para dar foco na variável, ou seja, o cursor vai ficar la mesmo depois de você clicar em um botao por acaso*/
}

function finalizar() {
    
   function testeselect(lista) {
   for (var c in lista) {
    if (lista.hasOwnProperty/*indicanda se o objeto possui ou não a propriedade especificada como uma propriedade do próprio objeto.*/(c)) 
    return false // se c tiver elementos
  }
    return true // se c não tiver elementos
}
    if(testeselect(lista) == true){
        window.alert('[ERRO]  Adicione algum número!!!')

    } else {
        let totalnum = valores.length
        let maior = valores[0] // na primeira posição
        let menor = valores[0]
        let soma = 0
        let media = 0

    

        for (let poss in valores)/*var poss criada e seu parâmetro vai ser cada elemento que ele vai procurar no array valores*/ {

            soma += valores[poss] //vai somar todos os elementos dentro do array por causa do for. 

            if (valores[poss] > maior) 
                maior = valores[poss] // se o número for maior que a primeira posição ele vai analizar o próximo até que chegue no último
            if (valores[poss] <= menor)
                menor = valores[poss] // se o número for menor ou igual a primeiro valor, o for salva ele na variavel menor
        }

        media = soma / totalnum
        

        res.innerHTML = `<p>Ao todo, temos ${totalnum} números adicionados.</p>`
        res.innerHTML += `<p>O menor número foi ${menor}.</p>`
        res.innerHTML += `<p>O maior número foi ${maior}.</p>`
        res.innerHTML += `<p>A soma dos números foi de ${soma}.</p>`
        res.innerHTML += `<p>A média aritmética dos números foi de ${media}.</p> ` 
    }
        }
    

