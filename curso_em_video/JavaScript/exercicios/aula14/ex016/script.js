function clicar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    
   

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!!!'
        window.alert('[ERRO].... Faltam Dados!!!')
        
    } 
    else{
        res.innerHTML = 'Contando!!!'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
        
        if(p == 0){
        window.alert('Passo Invalido! Considerando PASSO 1')
        p = 1
        }
        
            //Contagem Crescente
        else if(i < f) {
              for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`
        }
      
            //Contagem decrescente 
        } else {
            for(let c = i; c>= f; c -= p){
               res.innerHTML += `${c} \u{1F449}` 
            }
        }
          res.innerHTML += `\u{1F3C1}`
    }

}