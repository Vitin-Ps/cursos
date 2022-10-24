let botao = document.getElementById('botao')

function apertar() {
    botao.style.background = 'rgb(38, 62, 82)'
}

function soltar() {
    botao.style.background = 'rgb(0, 140, 255)'
}

function clicar() {
    let n = Number(document.getElementById('vtab').value)
    let tab = document.getElementById('seltab')

    if (n == 0) {
        window.alert('[ERRO]... Campo não preenchido!!!')
    } else {
        
       
        let c = 1

        while (c <= 10) {
            
            let item = document.createElement('option') // cria um <option> no select do html
            item.text = `${n} x ${c} = ${n*c}` // adiciona o texto ao option
            tab.value = `tab${c}` // tab.value - transforma tab em decimal. tab${c} dar identidade a cada option para um banco de dados no futuro
            tab.appendChild(item) // Faz o item criado pelo js aparecer na tela dentro do select como um option e seu texto definido no código acima.
            c++
        }
    }
}