function somar(){
    let s = document.getElementById('so')
    let s1 = document.getElementById('so1')
    let r = document.getElementById('res1')
    let n = Number(s.value)
    let n1 = Number(s1.value)
    let soma = n + n1 
    r.innerHTML = `${soma}`
    
}

function contar(){
    let b = document.getElementById('bens')
    let d = document.getElementById('dt')
    let o = document.getElementById('obg')
    let r = document.getElementById('res')
    let sobnome = document.getElementById('sobrenome')
    let ns = String(sobnome.value)
    let n = Number(b.value)
    let n1 = Number(d.value)
    let n2 = Number(o.value)
    let c = n + n1 - n2
    r.innerHTML = ` ${ns.toUpperCase()} seu patrimonio liquido é de: ${c}<br> `
    
    if(c < 0 ){
        r.innerHTML += '<strong>Cuidado!!</strong>suas <strong> obrigações</strong> são <strong>maiores</strong> que seus <strong>bens</strong> e <strong>direitos</strong> (SL-)'
        document.body.style.backgroundColor = '#521506'
    }else if( c == 0){
        r.innerHTML += '<strong>Cuidado!!</strong>suas <strong> obrigações</strong> são <strong>iguais</strong> aos seus <strong>bens</strong> e <strong>direitos</strong> (SL NULO)'
        document.body.style.backgroundColor = '#4D3E41'
        
    }else{
        r.innerHTML += '<strong>Parabéns!!</strong>suas <strong> obrigações</strong> são <strong>menores</strong> que seus <strong>bens</strong> e <strong>direitos</strong>  (SL+)'
        document.body.style.backgroundColor = '#124F1E'
    }    
   
}