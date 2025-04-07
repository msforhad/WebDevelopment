// deposit section//
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);
    depositField.value = '';
    
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmountString = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmountString);
    
    const currentDeposit = depositTotalAmount + depositValue;
    depositTotal.innerText = currentDeposit; 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const currentBalance = balanceTotalAmount + depositValue;
    balanceTotal.innerText = currentBalance;
       
     
})

// withdraw section//

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValueString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawValueString);
    withdrawField.value = '';
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);
    
    const currentWithdraw = withdrawTotalAmount + withdrawValue;
    withdrawTotal.innerText = currentWithdraw;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const currentBalance2 = balanceTotalAmount - withdrawValue;
    balanceTotal.innerText = currentBalance2;
})