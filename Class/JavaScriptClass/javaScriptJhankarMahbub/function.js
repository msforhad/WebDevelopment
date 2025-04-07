// function sayLoveYou(){
//     console.log('jaan o baby');
//     console.log('billy baby....koi tumi');
// }

// sayLoveYou();
// sayLoveYou();

// function doubleIt(num){
//     var result = num*2;
//     console.log(result);
// }
// doubleIt(5);
// doubleIt(10);
// doubleIt(50);

/**function doubleIt(num){
    var result = num*2;
    return result;
}
var first = doubleIt(10);
var second = doubleIt(5);
var total = first + second;
// console.log(total);*/

// function add(num1, num2){
//     var result= num1 +num2;
//     return result;
// }

// var sum = add(15, 17);
// console.log(sum);

// function inchToFeet(inch){
//     var feet = inch/12;
//     return feet;
// }
// var nanaFeet = inchToFeet(156);
// console.log(nanaFeet);

// var naniFeet = inchToFeet(288);
// console.log(naniFeet);

//-----------arrow function--------
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// }

// function countVowel(str){
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||
//            char==="e"||
//            char==="i"||
//            char==="o"||
//            char==="u"
//         )
//         {
//             count++;
//         }
//     }

//     console.log(count);
// }
// const stri = prompt("Enter your word:");
// const str = stri.toLowerCase();
// const val = countVowel(str);
// console.log(val);

// let array =["forhad","mehedi","hasan"];
// array.forEach((val,idx,array)=>{ //(element,index,fullArray)
//     console.log(val,idx,array);



//     // console.log(val.toUpperCase());
// });

//--for a given array of numbers,print the square of each value using forEach loop----
// let num = [2,3,4,5];
// num.forEach((num)=>{
//     console.log(num*num);
// });

//-----map methods for array------arr.map(callBackFunction(value,index,array))

// let num = [5,6,8,9];

// num.map((val)=>{
//     console.log(val);
// });

// let newArray = num.map((val)=>{
//     return val*val;
// });
// console.log(newArray);
// console.log(num);

//----filter methods---creates a new array of elements that give true for a condition/filter.
// let arr =[1,2,3,11,9,77,20,10];
// let evenArr = arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(arr);
// console.log(evenArr);

//----reduce array----performs some operations and reduces the array to a single value.it returns that single value.
// let arr =[2,3,4,5,101,-1,2];
// const outPut = arr.reduce((previous,currantValue)=>{ //(1st array element,2nd array element)
//     return previous + currantValue;
// });
// console.log(outPut);

// ---find the largest array element----by reduce method
// const largest = arr.reduce((previous,current)=>{
//     return previous>current ? previous:current;
// });
// console.log(largest);

// let arr = [87,78,90,91,23,98,48,79,99];
// const bigMark = arr.filter((val)=>{
//     return val>90;

// });
// console.log(bigMark);

//------take a number n as input from user.create an array of numbers from a to n.use the reduce method to calculate sum of all numbers in  the array;
// let n = prompt("Enter your number:");
// let arr =[];
// for(let i=1; i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// const sum = arr.reduce((previous,current)=>{
//     return previous+current;
// });
// console.log(sum);

//-------evenOddFunction----------//
// function evenOddNumber(val){
//     if(val % 2==0){
//         console.log(val, ':is even number');
//     }else{
//         console.log(val,':is odd number');
//     }
// }

//-------first method-----//
// const numbers = [22,23,7,5,8,2,100];
// for(let i =0;i< numbers.length;i++){
//     const number = numbers[i];
//     evenOddNumber(number);
// }
// console.log("-------------")
// const ages=[22,78,71,60,55,30,5];
// for(let i=0;i<ages.length;i++){
//     const age = ages[i];
//     evenOddNumber(age); 
// }

//-----second method------//

// function oddEvenLoop(val){
//     for(let i =0; i<val.length;i++){
//         let res = val[i];
//         evenOddNumber(res);

//     }
// }
// const numbers = [22,23,7,5,8,2,100];
// oddEvenLoop(numbers);
// console.log("--------------");
// const ages=[22,78,71,60,55,30,5];
// oddEvenLoop(ages);

//------3rd method---------//

// function oddEvenLoop(val){
//         for(let i =0; i<val.length;i++){
//             let res = val[i];
//             evenOddNumber(res);
//             function evenOddNumber(cha){
//                      if(cha % 2==0){
//                          console.log(cha, ':is even number');
//                      }else{
//                          console.log(cha,':is odd number');
//                      }
//              }

    
//         }
// };

// const numbers = [22,23,7,5,8,2,100];
// oddEvenLoop(numbers);
// console.log('----------------');
// const ages=[22,78,71,60,55,30,5];
// oddEvenLoop(ages);

//---------function value return-------//

// function oddEvenLoop(val){
//             let evenNumber =[];
//             let oddNumber = [];
//             for(let i =0; i<val.length;i++){
//                 let res = val[i];
//                 evenOddNumber(res);
//                      function evenOddNumber(cha){
//                          if(cha % 2==0){
//                             let chaEven = cha;
//                             evenNumber.push(chaEven);
//                           }else{
//                               let chaOdd = cha;
//                               oddNumber.push(chaOdd);
//                             }
//                         }
//             }
//             evenOrOdd(evenNumber);
//             evenOrOdd(oddNumber);
//             function evenOrOdd(x){
//                 console.log(x);
//             }

// };
// const numbers = [22,23,7,5,8,2,100];
// oddEvenLoop(numbers);

//-------arguments and deal with unknown number of arguments----//

// function addNumber(num1,num2){
//      console.log(arguments);
//      console.log(arguments[3]);
//     return num1+num2;
// }
// var result = addNumber(3,5,9,10,7,88);
// console.log(result);


// function addNumber(){
//     let sum = 0;
//     for(let i=0;i<arguments.length;i++){
//         let num = arguments[i];
//         sum =sum+num;

//     }
//     return sum;
// }
// var result = addNumber(3,5,9,10,7,88,100);
// console.log(result);

// default parameter
// function add(num1,num2){
//     num2 = num2 || 20;
//     return num1+num2;
// }
// // const total = add(15);
// const total = add(15,30);
// console.log(total);

// const firstName = "Mehedi";
// const midlName = "Hasan";
// const lastName = "Forhad";
// const fullName1 = firstName + " "+midlName+" "+lastName+" "+"is a good boy.";
// const fullName2 = `${firstName} ${midlName} ${lastName} is a good boy.`;
// const fullName3 = `${firstName}${midlName}${lastName} is agood boy.`;
// console.log(fullName1);
// console.log(fullName2);
// console.log(fullName3);




