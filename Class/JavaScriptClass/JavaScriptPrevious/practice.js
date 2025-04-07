 
// for(let i = 0; i<=10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
    
// }


// let inch = 10;
// let feet = inch / 12;
// let getFeet = feet.toFixed(2);
// getFeet = parseFloat(getFeet);
// console.log(getFeet);

// function inchToFeet (num){

//     let feet = num / 12;
//     let getFeet = feet.toFixed(2);
//         getFeet = parseFloat(getFeet);
//     return getFeet;
// }
// let numbers = 10;
// let outputFeet = inchToFeet(numbers);
// console.log(outputFeet);

// function checkEvenOdd (num){
//     if(num % 2 === 0){
//         console.log('even')
//     }
//     else{console.log('odd')}
// }
// let numbers = 9;
// let checkNumbers = checkEvenOdd (numbers);


// function findSum(number){
//      sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//      sum = sum + numbers[i]
//     }
//     return sum;
// }
// let numbers = [2,3,5,10,20,13];
// let sumArray = findSum(numbers);
// console.log(sumArray);


// function cubeNumber(number) {
//      const checkCube = number * number * number;
//     if(typeof number !== 'number' ){
//         return 'Please input numbers '
//     }
//     return checkCube;

// }

// const inputNumber = 5;
// const outputCube = cubeNumber(inputNumber);
// console.log(outputCube);


// function matchFinder(string1, string2) {
//     if(typeof string1 !== 'string'|| typeof string2 !== 'string' ){
//         return 'Please input string ';
//     }
//     for (let i = 0; i < string1.length; i++) {
//         if (string2.indexOf(string1[i]) !== -1) {
//             if (string1.includes(string2)) {
//                 return true; 
//             }
//         }
//     }
//     return false;
// }
// const string1 = "john";
// const string2 = 'ohn';
// const result = matchFinder(string1, string2 );
// console.log(result); 


// function sortMaker(arr) {
//     const getNum = [];
//     for(let i=0; i< arr.length; i++){
//         if(arr[0] > 0 && arr[1] > 0 ){
//             if(arr[0] < arr[1]){
//                 getNum.push(arr[1],arr[0]);
//                 break;
//                 }
//                 else if(arr[1] < arr[0]){
//                     getNum.push(arr[0],arr[1]);
//                     break;
//                 }
//                 else{
//                     return 'equal';
                    
//                 }
//         }
//         else{
//             return 'Invalid Input'
            
//         }
//     }
//     return getNum;

// }
// const inputArray = [4,14];
// const result = sortMaker(inputArray);
// console.log(result);




// function findAddress(obj) {
//     const output = {
//         street: obj.street || "__",
//         house: obj.house || "__",
//         society: obj.society || "__"
//     };

//     return Object.values(output);
// }

// const inputObject = {
//     street:10,
//     house:'15A',
//     society:'Earth Perfect'};

// const outputObject = findAddress(inputObject);
// console.log(outputObject);


// function canPay(changeArray, totalDue) {
//        sum = 0;
//     for(let i = 0; i < inputArray.length; i++){
//           sum = sum + inputArray[i];
//     }
//     if(inputArray.length !== 0){
//         if(sum >= inputPrice){
//             return 'true';
//         }
//         else{
//             return 'false';
//         }
//     }
//     else{
//         return 'This array is empty, please input number in this array'
//     }

// }
// const inputArray = [1,2,7];
// const inputPrice = 10;
// const result = canPay(inputArray, inputPrice);
// console.log(result);







 


