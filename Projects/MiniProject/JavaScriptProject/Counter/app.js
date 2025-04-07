const count = document.getElementById('count');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const change = document.getElementById('increment');
const reset = document.getElementById('reset');

decrease.addEventListener('click',()=>{
    const countAmount = parseInt(count.innerText);
    const changeAmount = parseInt(change.value);
    const decreaseNumber = countAmount - changeAmount;
    count.innerText = decreaseNumber;
})

increase.addEventListener('click',()=>{
    const countAmount = parseInt(count.innerText);
    const changeAmount = parseInt(change.value);
    const increaseNumber = countAmount + changeAmount;
    count.innerText = increaseNumber;
})
reset.addEventListener('click',() =>{
    count.innerText = '0';
})