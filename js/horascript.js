function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora != 1){
        msg.innerHTML = `<p>Agora é ${hora} horas</p>`
    }else{
        msg.innerHTML = `<p>Agora é ${hora} hora</p>`
    }

    if(hora >= 0 && hora <= 11 ){
        img.src = 'images/manha.png'
        document.body.style.background = '#dbc9c3'
    }else if(hora >= 12 && hora < 18){
        img.src = 'images/tarde.png'
        document.body.style.background = '#91b3c8'
    }else if(hora >= 18 && hora <= 23){
        img.src = 'images/noite.png'
        document.body.style.background = '#2d1d1e'
    }else if(hora >= 24){
        msg.innerHTML = `<p>A hora ${hora} é incompatível </p>`
        document.body.style.background = 'red'
    }else{
        `<p>Error</p>`
        document.body.style.background = 'red'
    }
}