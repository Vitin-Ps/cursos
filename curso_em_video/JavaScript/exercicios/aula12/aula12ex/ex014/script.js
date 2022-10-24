function carregar() {
    // váriaveis
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem') 
 var data = new Date()// comando para conseguir datas
 var hora = data.getHours() /*Horas exatas*/
 

    //  comandos
 msg.innerHTML = `Agora são ${hora} horas.`

    // condições 
 
 if (hora >= 0 && hora < 12) {
     // bom dia!
    img.src = 'imagens/manha-redonda-p.png' // comando para  adicionar imagens!
    document.body.style.background = '#897D75' //comando para adicionar um fundo  

 }
 else if (hora < 18) {
        // boa tarde!
    img.src = 'imagens/tarde-redonda-p.png'
    document.body.style.background = 'linear-gradient(to right, #FEA42F, #fd9104, #d87a00)'
 }
 else {
        // boa noite!
    img.src = 'imagens/noite-redonda-p.png'
    document.body.style.background = '#4F4066'
 }
}

