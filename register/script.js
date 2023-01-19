var react = setInterval(()=>{
    //numero do cartão

    let inNum = document.getElementById('numCard')
    if(inNum.value.length < 9){
        inNum.value = inNum.value.replace(/([0-9]{4})([0-9])/,'$1 $2')
    }
    else if(inNum.value.length >8 && inNum.value.length <13){
        inNum.value = inNum.value.replace(/([0-9]{4})([0-9]{4})([0-9])/,'$1 $2 $3')
    }
    else{
            inNum.value = inNum.value.replace(/([0-9]{4})([0-9]{4})([0-9]{4})([0-9])/,'$1 $2 $3 $4')
    }
    let ccNum = document.getElementById('numberFront')
    if(inNum.value.length == 0){
        ccNum.innerText = '0000 0000 0000 0000'
    }
    else{
        ccNum.innerText = inNum.value
    }

    //data de validade 

    let dMes = document.getElementById('mes')
    let dAno = document.getElementById('ano')
    let ccData = document.getElementById('dataFront')

    if(dMes.value.length == 0 && dAno.value.length == 0){
        ccData.innerText = '00/00'
    }
    else if(dMes.value.length != 0 && dAno.value.length == 0){
        if(dMes.value.length < 2 && dMes.value.length != 0){
            ccData.innerText = `0${dMes.value}/00`
        }
        else{
            ccData.innerText = `${dMes.value}/00`
        }
    }
    else if(dMes.value.length == 0 && dAno.value.length != 0){
        ccData.innerText = `00/${dAno.value}`
    }
    else{
        ccData.innerText = `${dMes.value}/${dAno.value}`
    }

    //nome do titular do cartao

    let iNome = document.getElementById('nome')
    let ccNome = document.getElementById('nameFront')
    
    if(iNome.value.length == 0){
        ccNome.innerText = 'JANE APPLESEED'
    }
    else{
        ccNome.innerText = String(iNome.value).toUpperCase();
    }

    // cvc

    let iCvc = document.getElementById('cvc')
    let ccCvc = document.getElementById('codigBack')

    if(iCvc.value.length == 0){
        ccCvc.innerText = '000'
    }
    else{
        ccCvc.innerText = `${iCvc.value}`
    }

})

function verifica(){
//  variavel para fazer a verificação de todos inputs
    let verific = 0

//  inputs de verificação
    let nome = document.getElementById('nome') 
    let num = document.getElementById('numCard') 
    let mes = document.getElementById('mes') 
    let ano = document.getElementById('ano')
    let cvc = document.getElementById('cvc')
//  mensagens  de erro
    let erroNome = document.querySelector('#name-card .msg-erro')
    let erroNum = document.querySelector('#num-card .msg-erro')
    let erroMes = document.getElementById('mm')
    let erroAno = document.getElementById('aa')
    let erroCvc = document.getElementById('vcv')
    
    //nome
    if(nome.value.length != 0 ){
        nome.style.outline = '0px'
        erroNome.style.display = 'none'
    }
    else{
        nome.style.outline = '1.5px solid var(--Error)'
        erroNome.style.display = 'block'
        verific++
    }
    
    //numero do cartao
    if(num.value.length <19){
        num.style.outline = '1.5px solid var(--Error)'
        erroNum.style.display = 'block'
        verific++
    }
    else{
        num.style.outline = '0px'
        erroNum.style.display = 'none'
    }

    //validade mes
    if(mes.value < 1 || mes.value > 12 || mes.value.length == 0){
        if(mes.value.length != 0){
            erroMes.innerText = 'Mês inválido'
        }else{
            erroMes.innerText = 'Espaço vazio'
        }
        mes.style.outline = '1.5px solid var(--Error)'
        erroMes.style.display = 'block'
        verific++
    }
    else{
        mes.style.outline = '0px'
        erroMes.style.display = 'none'
    }

    //valivade ano
    if(ano.value < 23 || ano.value.length == 0){
        if(ano.value.length != 0){
            erroAno.innerText = 'Ano inválido'
        }else{
            erroAno.innerText = 'Espaço vazio'
        }
        ano.style.outline = '1.5px solid var(--Error)'
        erroAno.style.display = 'block'
        verific++
    }
    else{
        ano.style.outline = '0px'
        erroAno.style.display = 'none'
    }

    //C V C
    if(cvc.value.length < 3){
        if(cvc.value.length != 0){
            erroCvc.innerText = 'Formato inválido'
        }else{
            erroCvc.innerText = 'Espaço vazio'
        }
        cvc.style.outline = '1.5px solid var(--Error)'
        erroCvc.style.display = 'block'
        verific++
    }
    else{
        cvc.style.outline = '0px'
        erroCvc.style.display = 'none'
    }

    if(verific == 0){
        let registro = document.getElementById('form')
        let complete = document.getElementById('complete')
        complete.style.display = 'flex'
        registro.style.display = 'none'
    }else{
        if(fullinputs[i].style.outline = '1.5px solid var(--Error)'){
            fullinputs[i].style.outline = '0px'
        }
    }
}

function continuar(){
    let registro = document.getElementById('form')
    let complete = document.getElementById('complete')
    complete.style.display = 'none'
    registro.style.display = 'flex'
    registro.style.flexDirection = 'column'
    let input = document.querySelectorAll('input')
    for(let i in input){
        input[i].value = ''
    }

    let proximo = document.querySelector('#continue')
    proximo.value = 'Continuar'
    let confirm = document.querySelector('#confirm')
    confirm.value = 'Confirmar'
}