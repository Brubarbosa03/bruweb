function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Não foi possível a contagem, tente completar os dados !'
    
    }else{
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p <= 0 ){
            alert('Numero de passo inválido, considerando passo = 1')
            p = 1
        }

        if(i < f){
            
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} ➡️`//Ordem crescente                
            }
        }else{

            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} ➡️`//Ordem decrescente                
            }
       
        }
        res.innerHTML += `🚩`

    }
}