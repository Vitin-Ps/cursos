function carregar() {
    let msg = document.getElementById("msg")
    let img = document.getElementById("imagem")
    
    let data = new Date()
    let horas = data.getHours()


    msg.innerHTML = `Agora são ${horas} horas.`


    if (horas >= 0 && horas < 14) {
        // bom dia
        img.src = 'imagens/manha-redonda-p.png'
        document.body.style.background = 'linear-gradient(to right, #ad7d62, #af704c, #a84b15)'
    }
    else if (horas < 20) {
        // boa tarde
        img.src = 'imagens/tarde-redonda-p.png'
        document.body.style.background = 'linear-gradient(to right, #FB9E10, #ec8f03, #ce7b00)'

    }
    else {
        // boa noite
        img.src = 'imagens/noite-redonda-p.png'
        document.body.style.background = 'linear-gradient(to right, #7000cc, #4b0386, #32015a)'
    }
}