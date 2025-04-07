// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display ='block';
})

// ----first method--------
// ------deposit button section-------

// const depositBtn = document.getElementById('addDeposit');
// depositBtn.addEventListener('click',function(){
//     const depositAmount = document.getElementById('depositAmount').value;
//     const depositNumber = parseFloat(depositAmount);

//     const currentDeposit = document.getElementById('currentAmount').innerText;
//     const currentDepositNumber = parseFloat(currentDeposit);
//     const totalDeposit = depositNumber + currentDepositNumber;

//     document.getElementById('currentAmount').innerText = totalDeposit;

//     const currentBalance = document.getElementById('currentBalance').innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     const totalCurrentBalance = currentBalanceNumber + depositNumber;
//     document.getElementById('currentBalance').innerText = totalCurrentBalance;
//     document.getElementById('depositAmount').value = "";

// })

// ---------withdraw button section--------

// const withdrawBtn = document.getElementById('addWithdraw');
// withdrawBtn.addEventListener('click',function(){
    // const withdrawAmount = document.getElementById('withdrawAmount').value;
    // const withdrawNumber = parseFloat(withdrawAmount);
// 
    // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // const currentWithdrawNumber = parseFloat(currentWithdraw);
    // const totalWithdraw = withdrawNumber + currentWithdrawNumber;
// 
    // document.getElementById('currentWithdraw').innerText = totalWithdraw;
// 
    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalCurrentBalance = currentBalanceNumber - withdrawNumber;
    // document.getElementById('currentBalance').innerText = totalCurrentBalance;
    // document.getElementById('withdrawAmount').value = "";
// 
// })

// ------------second method--------
// -----deposit button section----

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText("currentAmount",depositNumber);
    updateSpanText("currentBalance",depositNumber);
    
    document.getElementById('depositAmount').value = "";

})
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

// --- withdraw button section---------
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    updateSpanText("currentWithdraw", withdrawNumber);
    updateWithdrawSpanText("currentBalance",withdrawNumber);

    document.getElementById('withdrawAmount').value = "";

})
function updateWithdrawSpanText(id,withdrawNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalCurrentBalance = currentBalanceNumber - withdrawNumber;
    document.getElementById(id).innerText = totalCurrentBalance;

}





