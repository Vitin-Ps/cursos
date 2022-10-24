let num = 156

function parimpar(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpar(num)

console.log(`O número ${num} é ${res}.`)

/*
de outra forma

console.log(`O número ${num} é ` + parimpar(num) + `.`)
*/