// var firendsAge = [15, 17, 18, 23, 24, 25, 28, 19, 7]
// console.log(firendsAge);

// firendsAge[9]=3;
// console.log(firendsAge);

// console.log(firendsAge[3]);

// var postition = firendsAge.indexOf(18);
// console.log(postition);

//27 arry modde nai tai index -1 dekhabe//
// console.log(firendsAge.indexOf(27));

//-----array push,pop,length------//

// var age = [2, 3];
// console.log(age);
// console.log(age.length);

// age.push(15);
// age.push(23);
// console.log(age);
// console.log(age.length);

// age.pop();
// console.log(age);

// var tealine = ['kalam', 'balam', 'salam','forhad','mehedi','tomal','md'];

// tealine.push('jamal');
// console.log(tealine);

// tealine.pop('jamal');
// console.log(tealine);

//  tealine.shift();
//  console.log(tealine);

// tealine.unshift('palam');
// console.log(tealine);

// var part = tealine.slice(2);
// console.log(part);

// part = tealine.slice(2, 5);
// console.log(part);

//array convert to the to string
// let foodItems = ["potato","apple","litchi"];
// console.log(foodItems);
// console.log(foodItems.toString()); 

// ----joins multiple arrays and returns result------
// let nam = ["forhad", "mehedi","hasan"];
// let dcnam = ["topal", "abdulla"];
// let nam2 = ["naiyem","imtaje"];
// let adjustNam = nam.concat(dcnam);
// console.log(adjustNam);
// console.log(nam);
// console.log(dcnam);

// let allNam = nam.concat(dcnam, nam2);
// console.log(allNam);

// let arr = [100,150,200,50,500,1000];
// arr.splice(2,2,101,102); //(index,number of delete element,first element,second element)

//------no delete array just add element
// arr.splice(2,0,101);

//----delete element number 50
// arr.splice(3,1);
// arr.splice(3,1,101);
// console.log(arr);

// ---------joint array---
// const num = [2,3,4,5,6];
// const number = num.join("/");
// console.log(number);

// spread operator....concatenate multiple array

// const age1 = [1,2,3];
// const age2 = [4,5,6];
// const age3 = [7,8,9];
// const allAges1 = age1.concat(age2).concat(age3).concat([10]);
// const allAges2 = [...age1,...age2,...age3,10];
// console.log(allAges1);
// console.log(allAges2);

// const maxAllAges2 = Math.max(...allAges2);
// console.log(maxAllAges2);

var nam = "md mehedi hasan forhad";
var namArray = nam.split(' ');
console.log(namArray)
for(let i = 0; i<namArray.length; i++){
    var word = namArray[i].split('');
    for(let j = 1; j<word.length;j++){
        var firstWord = word[0].toUpperCase();
        var capitalWord = word[j]
        var fullWord = firstWord+capitalWord;
        console.log(fullWord);
        
        
    }

    
}
// console.log(namArray);