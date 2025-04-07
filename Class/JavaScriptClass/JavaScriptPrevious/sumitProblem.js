// let number = 100;
// let  number3 = [];
// let number5 =[];
// let numberNot = [];
// let final35 = [];
// for (let i = 1; i <= number; i++){
//     if(i % 3 === 0){
//         number3.push(i);
//     }else if(i % 5 === 0){
//         number5.push(i);
//     }else{
//         numberNot.push(i);
//     }

// };

// let number35 = number3.concat(number5);
// for(let i= 0; i < number35.length; i++){
//     if(number35[i] % 3 === 0 &&  number35[i] % 5 === 0){
//         final35.push(number35[i]);
//     };
// };

// console.log(number3);
// console.log(number5);
// console.log(number35);
// console.log(numberNot);
// console.log(final35);


 
// function arrayReplace(inputArray, elementToReplace, substrationElem){
//     inputArray.forEach((element, index) => {
//         if(element === elementToReplace){
//             inputArray[index] = substrationElem

//         }
        
//     });
//     console.log(inputArray)
// }

// arrayReplace([1,2,1,2,1,1,1],1,3);


// function sum(params1,params2){
//     return params1 + params2;
// }

// document.write(sum(1,2));


// function totalSum(...params1){
//     let total = 0;
//     params1.forEach(perElem =>{
//         total+= perElem;
//     })
//     return total;
// }

// let result = totalSum(1,2,3,4,9,87,7,11,15,100);
// document.write(result);


// function addBorder(pictures){
//     let wall = "*".repeat(pictures[0].length + 2)
//     pictures.unshift(wall)
//     pictures.push(wall)
//     for(let i = 1 ;i < pictures.length - 1; i++){
//         pictures[i] = "*".concat(pictures[i],"*")
//     }
//     return pictures
// }
// console.log(addBorder(["abc","ded"]))


// var num1 = prompt("please enter 1st number");
// var num2 = prompt("please enter 2nd number");
// var opr = prompt("please select among +, -, *, /")
// switch(opr)
// {
//     case "+":
//         var res = parseFloat(num1) + parseFloat(num2);
//         document.write(`${num1} + ${num2} = ${res}`);
//         break;
        
//     case "-":
//         var res = parseFloat(num1) - parseFloat(num2);
//         document.write(`${num1} - ${num2} = ${res}`);
//         break;
            
//     case "/":
//         var res = parseFloat(num1) / parseFloat(num2);
//         document.write(`${num1} / ${num2} = ${res}`);
//         break;
        
//     case "*":
//         var res = parseFloat(num1) * parseFloat(num2);
//         document.write(`${num1} * ${num2} = ${res}`);
//         break;

//         default:
//             document.write('Invalid operator');

// }

