function tabuada(){
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if(num.value.length == 0 ){
        
        alert('Insira um número!')
        tab.innerHTML = ('<option> Digite um </option>' + '<option> número acima!</option>')
        document.getElementById('seltab').size="2"

    }else{
     
        let n = Number(num.value)
        let c = 1
        document.querySelector('#seltab').size = "10"
        tab.innerHTML = ''
        
        for(let c = 1; c <= 10; c++){
        
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        
        }
    }
}