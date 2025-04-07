document.getElementById('generate-pin').addEventListener('click',function(){
    let pin =Math.round(Math.random()*100000);
    document.getElementById('display-pin').value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }else if(number==='<'){
            const digits = previousTypedNumber.split('');
            digits.pop()
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }    
})

document.getElementById('verify-pin').addEventListener('click',function(){
    let oneTypePin = document.getElementById('display-pin').value;
    let typedNumber = document.getElementById('typed-numbers').value;
    if(oneTypePin === typedNumber){
        document.getElementById('pin-success').style.display = 'block';
        
    }else
        document.getElementById('pin-failure').style.display = 'block';
        tryFailure();
})

function tryFailure(){

}

