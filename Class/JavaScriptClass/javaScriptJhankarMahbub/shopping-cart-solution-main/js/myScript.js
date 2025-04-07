// ---first method----
// first phone btn
// function handleProductChangeFirstBtn(isIncrease){
//     const caseInput = document.getElementById('phone-number-field').value;
//     const caseAmount = parseFloat(caseInput);
//     let newCaseAmount = caseAmount;

//     if(isIncrease == true){
//         newCaseAmount = caseAmount +1;
//     }if(isIncrease == false && caseAmount > 0){
//         newCaseAmount = caseAmount -1 ;    
//     }
//     document.getElementById('phone-number-field').value = newCaseAmount;
//     const phoneTotal = 1219*newCaseAmount;
//     document.getElementById('phone-total').innerText = phoneTotal;
// }
// // ---------Plus---
// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//     handleProductChangeFirstBtn(true);
// })
// //-----btn-minus---
// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//     handleProductChangeFirstBtn(false);
// })

// // second phone btn
// function handleProductChange(isIncrease){
//     const caseInput = document.getElementById('case-number-field').value;
//     const caseAmount = parseFloat(caseInput);
//     let newCaseAmount = caseAmount;

//     if(isIncrease == true){
//         newCaseAmount = caseAmount +1;
//     }if(isIncrease == false && caseAmount > 0){
//         newCaseAmount = caseAmount -1 ;    
//     }
//     document.getElementById('case-number-field').value = newCaseAmount;
//     const phoneTotal = 59*newCaseAmount;
//     document.getElementById('case-total').innerText = phoneTotal;
// }
// // ---------Plus---
// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     handleProductChange(true);
// })
// //-----btn-minus---
// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     handleProductChange(false);
// })

// -------------second method--------------
function handleProductChange(product, isIncrease){
    const productInput = document.getElementById(product+ '-number-field').value;
    const productAmount = parseFloat(productInput);
    let newProductAmount = productAmount;

    if(isIncrease == true){
        newProductAmount = productAmount +1;
    }if(isIncrease == false && productAmount > 0){
        newProductAmount = productAmount -1;    
    }
    document.getElementById(product+'-number-field').value = newProductAmount;
    
    let productTotal =0;
    if(product == 'phone'){
        productTotal = 1219*newProductAmount;
    }
    if(product == 'case'){
        productTotal = 59*newProductAmount;
    }
    document.getElementById(product+'-total').innerText = productTotal;
    subTotal();
}
// ---------Plus---
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    handleProductChange('phone',true);
})
document.getElementById('btn-case-plus').addEventListener('click',function(){
    handleProductChange('case',true);
})
//-----btn-minus---
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    handleProductChange('phone',false);
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    handleProductChange('case',false);
})

// -----sub-total-------
function subTotal(){
    const phoneCount = document.getElementById('phone-number-field').value;
    const phoneAmount = parseFloat(phoneCount);

    const caseCount = document.getElementById('case-number-field').value;
    const caseAmount = parseFloat(caseCount);

    const subTotal = 1219*phoneAmount+59*caseAmount;
    document.getElementById('sub-total').innerText = subTotal;
    
    const taxAmount = Math.round(subTotal*0.10);
    document.getElementById('tax-amount').innerText = taxAmount;

    const total = subTotal+taxAmount;
    document.getElementById('final-total').innerText = total;

}




