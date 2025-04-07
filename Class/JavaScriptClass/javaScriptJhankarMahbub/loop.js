//-----while loop----//
// let i = 0;
// while(i<5){
//     console.log(i);
//     i++;
// }


//-------do while loop--------//
// let j = 0;
// do{
//     console.log(j);
//     j++;
// }while(j<=5);


//----------for loop------//

// for(var i=0; i<15; i++){
    // console.log(i);
// }
// var num =[24, 23, 48, 68, 99, 92, 78, 56, 98, 10];
// for(var i = 0; i < num.length; i++){
//     var element = num[i];
//     console.log(element);
// }

//-----for-of loop--------//
// let str = "ApnaCollege";
// for(let i of str){
//     console.log(i);
// }

//------for-in loop---------//

// let student = {
//     name:"Forhad",
//     age:20,
//     roll:532,
//     cgp:3.31,
//     mobile:16,
// };

// for(let key in student){
//     console.log("key=", key,"value=", student[key]);
// }

//-------game-------//

// let gameNum = 25;
// let userNum = prompt("Guess the game number:");
// console.log(userNum);
// while(userNum != gameNum){
//     userNum = prompt("you Entered wrong number.Guess again:");

// }
// console.log("congratulations, you entered the right number");

// let fullName = prompt("Enter your fullname without spaces");

// let userName = "@"+fullName+fullName.length;
// console.log(userName);

// ------break-----
// const num = [1,2,8,9,77,5];
// for(let i=0;i<num.length; i++){
//     if(num[i]>9){
//         break;
//     }
//     console.log(num[i]);
// }
//------------------
// const number = [1,2,-2,-5,-8,8,9,77,5];
// for(let i=0;i<number.length; i++){
//     if(number[i]<0){
//         continue;
//     }
//     console.log(number[i]);
// }

// -------for of loop-------
// let items = [250, 300,500,800];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
 
//     let offer = val/10;
//     items[i]=items[i]-offer;  //after 10% discount
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }
// console.log('each items after 10% discount:', items);