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

