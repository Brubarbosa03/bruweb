function verificar(){
    document.body.style.background = '#d3d3d3'
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0){
        alert ('ERROR! Digite um valor válido!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(idade >= 0){
            if(fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade <16 ){
                    
                    img.setAttribute('src', 'images/crianca-m.png')

                }else if(idade < 50){
                    
                    img.setAttribute('src', 'images/adulto.png')

                }else {
                    
                    img.setAttribute('src', 'images/velho.png')
                }
            }else if (fsex[1].checked){
                gênero = 'Mulher'
                if(idade >= 0 && idade < 16 ){
                    
                    img.setAttribute('src', 'images/crianca-f.png')
                }else if(idade < 50){
                    
                    img.setAttribute('src', 'images/adulta.png')

                }else {
                    
                    img.setAttribute('src', 'images/velha.png')

                }
            }

            if(idade==1){
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} ano`
            }else{
                res.innerHTML = `<p> Foi detectado ${genero} com ${idade} anos`
            }
            res.appendChild(img)
            
        }else{
            alert('Digite um número valido')
        }
            
        
    }
}