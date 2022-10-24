/*Objeto*/

let amigo = {nome:'José', 
    sexo:'M', 
    peso:84.5, 
    engordar(p=0) { 
        console.log('Engordou') 
        this.peso += p
    } /*função*/
}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)