function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        window.document.body.style.backgroundColor = '#e5e17c'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        window.document.body.style.backgroundColor = '#db8b78'
    } else {
        img.src = 'imagens/noite.png'
        window.document.body.style.backgroundColor = '#0f2141'
    }
}