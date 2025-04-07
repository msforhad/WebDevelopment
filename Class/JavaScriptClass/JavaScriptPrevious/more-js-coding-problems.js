//----------[01]-------------lowernumber----------------------------------------------------

// const age = [-4, -.5, -3, -1 , 3, 13, 9, 7, -8, 6,7,8];
// function lowerNumber(age){
//     let check = age[0];

//      for(let i = 0; i<age.length; i++){
//         const first = age[i];

//         if(check>first){
//             check=first;
//         }
//         else{
//         }

//       }
//     return check;
// }
// const output = lowerNumber(age);
// document.write(output);


//--------------------[02]---------------------total even number------------------------------------------------------- 

// const number = 100;
// function evenOdd(number){
//     let totalEven =0;
//     for(let i = 0; i<=number; i++){
//         if(i % 2 == 0){
//             const even = i;
//             totalEven = totalEven + even ;
            
//         }
//         else{
//         }

//     }
//     return totalEven;

// }
// const output = evenOdd(number);
// document.write(output);


//--------------[03]------------------------------total odd number----------------------------------------------

// const number = 100;
// function evenOdd(number){
//     let totalOdd =0;
//     for(let i = 0; i<=number; i++){
//         if(i % 2 == 1){
//             const odd = i;
//             totalOdd = totalOdd + odd ;
            
//         }
//         else{
//         }

//     }
//     return totalOdd;

// }
// const output = evenOdd(number);
// document.write(output);


//------------[04] -------------------GPA calculator-------------------------------------------

// let mark = 100;
// if(mark>100){
//     document.write("Your mark is 100 avob.plese enter your corret mark");
    
//     }
//     else if(mark>=80){
//         document.write('your GPA is: A+  and grade points is:(4)');

//     }
//     else if(mark>=75 && mark<80){
//         document.write('Your GPA is: A and grade points is:(3.75)');
//     }
//     else if(mark>=70 && mark<=75){
//         document.write("Your GPA is : A- and grade points is:(3.50)");

//     }
//     else if(mark>=65 && mark<=75){
//         document.write('Your GPA is:(B+) and grade points is:(3.25)');

//     }
//     else if(mark>=60 && mark<=65){
//         document.write('Your GPA is:(B) and grade points is:(3)');

//     }
//     else if(mark>=55 && mark<=60){
//         document.write('Your GPA is:(B-) and grade points is:(2.75)');

//     }
//     else if(mark>=50 && mark<=55){
//         document.write('Your GPA is:(C+) and grade points is:(2.5)');

//     }
//     else if(mark>=45 && mark<=50){
//         document.write('Your GPA is:(C) and grade points is:(2.25)');

//     }
//     else if(mark>=40 && mark<=55){
//         document.write('Your GPA is:(C-) and grade points is:(2)');

//     }   

// else{
//     document.write('you are fail');
// }


//--------------[05]---------------data match----------------------------------------------------

// const phones = [
//     {Brand:'samsung', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 1000},
//     {Brand:'iphone ', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 2000},
//     {Brand:'xiaomi', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 800},
//     {Brand:'oppo', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 3003},
//     {Brand:'vivo', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 4000},
//     {Brand:'itel', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 200},
//     {Brand:'infinix', Camera:'50mp', Ram:'8gb',Rom:'256gb', Price: 8000}
// ];

// function cheapestPhonePrice(phones){
//     let cheapest = phones[0];
//     for(let i = 1; i < phones.length; i++){
//         const check = phones[i];
//         if (cheapest.Price < check.Price){
//             cheapest.Price = check.Price
//             document.write(check.Brand,'>',cheapest.Brand,'<br>');
//         }
//         else{
//             document.write('Brand:',check.Brand,'price:',check.Price,' <',cheapest.Price,'<br>');
//         }

//     }
//     return cheapest.Price;
//    }

//  const selectedCheapestPhone = cheapestPhonePrice(phones);
// document.write(selectedCheapestPhone);


//-----------------[06] --------------------------inch to feet----------------------------------

// const dadaInch = 24;
// const dadaFeet = dadaInch / 12;
// document.write(dadaFeet);

//--------------[07]-------------------------------- inch to feet convart------------------------

// const inputInches = 144;
// const outputFeet = convertInches(inputInches);
// function convertInches (inputInches){

// const feet = inputInches / 12;
//  return feet;
// }

// document.write(outputFeet)

//-----------------[08]------------------------- even number check-----------------------------------

// const inputNumbers = 33;
// const output = checkEven(inputNumbers);
// function checkEven  (inputNumbers){
    
//      if(inputNumbers % 2 === 0){
//          return true;
//      }
//      else{
//          return false;
//      }
//  }
//  document.write(output);

//----------[09] ---------------------------odd number check-----------------------------------
// const inputNumbers = 35;
// const outputNumbers = checkodd(inputNumbers);
// function checkodd(inputNumbers){
//         if(inputNumbers % 2 === 1){
//                 return true;
//         }
//         else{
//                 return false;
//         }
// }

// document.write(outputNumbers);

// --------[10] ----------------------------array sum------------------------------------------------

// const array = [12, 65, 45, 78, 32, 45, 91];
// const inputArray = getSumOfAnArray (array);

// function getSumOfAnArray (numbers){
//      let sum = 0;
    
//      for( let  i = 0; i < numbers.length; i++ ){
//          const index = i;
//          const element = numbers[i]; 
//          sum = sum + element;
//          document.write(index,"=>",element,"<br>");

//      }
//      return sum;
//  }
// document.write("<br>",inputArray);


// ---------------[11] ------------------sum of array-----------------------------------------------
// const array2 = [12, 65, 45, 78, 32, 45, 91];
// const inputArray = getOddNumbersOfAnArray (array2);

// function getOddNumbersOfAnArray (numbers) {
//      getOddNumbers = [];

    
//      for ( let i = 0; i < numbers.length; i++){
//      const index = i;
//      const element = numbers[index]
//      if(element % 2 !== 0){
//      document.write(index," ",element," <br>");

//      getOddNumbers.push(element);
//      }
    
//      }

//      return getOddNumbers;
//  }

//  document.write(getOddNumbers);

//  const sum = getSumOfAnArray (getOddNumbers);
//  function getSumOfAnArray(numbers){

//         let sum = 0;
//         for( let i = 0; i <numbers.length; i++ ){
//                 const index = i;
//                 const element = numbers[index];
//                 sum = sum + element;
//         }
//         return sum;
//  }
 
// document.write('<br>',sum);


// --------------[12] -------------------factorial number sum-----------------------------------------------------

// const inputNumbers = 7;
// const fact = factorial (inputNumbers);
 
//  function factorial (numbers){
//      let result = 1;
//      for( let i = numbers; i>= 1; i--){
//          result = result * i;
//          document.write(i, " = ",result, " * ",)

        
//      }
//      return result;
//  }
//  document.write(fact);


//-------------[13]-------------------removeDuplicate name-------------------------------------------------

// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebol', 'babul', 'kabul', 'abul', 'cabul', 'gabul', 'babul', 'ebul']
// const uniqueName = removeDuplicate(names);
// function removeDuplicate(names){
//      const unique = [];
//      for(let i=0; i< names.length ; i++){
    
//      const allName = names[i];
     
//      if(unique.includes(allName) === false) {
//          unique.push(allName);
//      } 
//     }
//     return unique;
// }

// document.write(uniqueName);

//---------------[14] ------------------------namber------------------------------------------------------

// for(let i = 0; i <= 50; i++){
//     const threeOrFive= [];
//     const three = [];
//     const five = [];
//     const nathing = [];
//     if(i % 3 ==0 && i % 5 == 0){
//         let first = i;
//         result = first + " ";
//         threeOrFive.push(result);
//         document.write(threeOrFive);
//     }

//     else if(i % 3 == 0 ){
//         let second = i;
//         resulton = second + " ";
//         three.push(resulton);
//         document.write(three);
        
//     }
//     else if(i % 5 == 0 ){
//         let therd = i; 
//         five.push(therd);
//         document.write(five);
//     }

//     else{
//         let last = i;
//         nathing.push(last);

//     }
// }

//-------------------[15]--------------largest numebr--------------------

// var a = 113;
// var b = 79;
// var c = 145;

// if( a>b && a>c){
//     console.log('Largest number is:', a);
// }
// else if(b>c && b> a){
//     console.log('Largest number is:', b);
// }
// else if(c>a && c>a ){
//     console.log('Largest number is:', c);
// }


// if( a>b && a>c){
//         console.log('Largest number is:', a);
//     }

// else if ( b> a){
//     console.log('Largest number is:', b);
// }

// else{
//     console.log('Largest number is:', c);
// }



//-----------------[16]--------------singara dokan----------------------

// function bringSingara (money){

//     document.write('ai nen mama',money ," ",'taka');
//     document.write(" ",'akhon amay 2 ta singara den')
// }
// bringSingara(10);


// function bringSingara (money){

//     var singaraPrice = 7;
//     var quantity = money/ singaraPrice;
//     // var quantity = quantity.toFixed(0);
//     var quantity = parseInt(quantity);
//     var backMoney = money % singaraPrice;
    
//     document.write('ai nen mama', money,' ','taka',' ');
//     document.write('amay singara den', quantity,' ','ta',' ');
     
//     return backMoney;
// }

// var get = bringSingara(100);
// document.write(get,' ','taka ferot den');



// function add (num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// const result1 = add (12, 13);
// const result2 = add (20, 30);
// const finalResult= add (result1,result2);
// document.write(finalResult);



//------------[17]--------------address match-------------------
// const address1 = 'dhamraI';
// const address2 = 'dhamrai';
// if(address1 == address2){
//     document.write('valid');
// }
// else{
//     document.write('unvalid');
// };


//---------[18]----------array store------------------------------
//[0,1,01,02,03,05,08,13,21,34,55]
// const fibo = [0,1];
// for(i=2; i <= 10; i++){
    
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// document.write(fibo);


//---------[19]-------function-------------------------------------------------------
// function add(a, b, c, d, e){
//     return a + b + c + d + e;
//    }
//    document.write(add(100,50,10,20,20));


//--------[20]------choto theke boro number-----------------------------------------------

// const number = [5,9,1,3,11,56,0,9];
// document.write(number.sort(function(a, b){
//     return a -b ;
// }),"<br>");

// document.write(number.sort(function(a,b){
//     return b - a;
// }));


//-------[21]-------leapyear kina check----------------------
// const year = 2004;
// function isLeapYear(year){
// if((year % 400 === 0) || ((year % 4 === 0) && ( year % 100 !== 0))){
//     console.log("Yes if the year is a leap year")
// }else{
//     console.log("No")
// }
// }
// isLeapYear(year);


//-------[22]-----vowels check----------------------------------------------

// const vowels = ["a","e","i","o","u","A","E","I","O","U"]
// function countVowels(sentence){
//     let count = 0;
//     const letters = Array.from(sentence);
//     letters.forEach(function(value){
//         if(vowels.includes(value)){
//             count++;
//         }
//     });
//     return count;
// }

// document.write(countVowels("I love Bangladesh"));


// const vowels = ["a","e","i","o","u","A","E","I","O","U"];
// const sentence = "I Love BAngladesh";
// function countVowels(sentence){
//     const sentenceArray = Array.from(sentence);
//      totalVowels = [];
//      totalConsonent = [];
//     for(i = 0; i <= sentenceArray.length; i++){
//         const count = sentenceArray[i];
//         if(vowels.includes(count)){
//             totalVowels.push(count);
//         }else{
//             totalConsonent.push(count);
//         }
//     }
    
//     return totalVowels;
// }
// countVowels(sentence);
// document.write(totalConsonent,"<br>");
// document.write(totalVowels);


//-------------[23]----------[undefind]-----------------------
// for(let i = 0; i <= 5; i++){
//     const randomNumbers = Math.round(Math.random()*100);
//     document.write(randomNumbers,"<br>");
// }


//-----------[24]-------duplicate array----------------------

// const number=[2,5,3,3,7,13,15,13,,2,5,5,13];
// const duplicate = number.filter(function(value, index, array){
//     return array.indexOf(value) !== index
// });
// document.write(duplicate,"<br>");

// const number = [2,5,3,2,11,12,13,6,11,7,6,5,4,5,12,3,2]
// const duplicate = number.filter(myDuplicate);
// function myDuplicate(value, index, array){
//     return array.indexOf(value) !== index;

// };
// document.write(duplicate);


// const numbe=[2,5,3,3,7,13,15,13,,2,5,5,13];
// const duplicat = numbe.filter(function(value, index, array){
//     return array.indexOf(value) === index
// });
// document.write(duplicat);

//-----------[25]------number count--------------------------------


// let testArray = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 2, 2, 3, 1, 1, 1];

// function mytestArray(arr){

//     let result;
//     let countarray = [
//         { type: 1, count: 0},
//         { type: 2, count: 0},
//         { type: 3, count: 0},
//         { type: 4, count: 0},
//         { type: 5, count: 0},
//     ];

//     for (let i = 0; i<arr.length; i++){
//         switch (arr[i]) {
//             case 1:
//             countarray[arr[i] - 1].count++;
//                 break;
            
//             case 2:
//             countarray[arr[i] - 1].count++;
//                 break;

//             case 3:
//             countarray[arr[i] - 1].count++;
//                 break;

//             case 4:
//             countarray[arr[i] - 1].count++;
//                 break;

//             case 5:
//             countarray[arr[i] - 1].count++;
//                 break;
                
        
//         }
//     }
    
//     let sortArray = countarray.sort((a, b) => {
//         return a.count-b.count;
//     });
// console.log(sortArray);

//     let maxCount = sortArray[sortArray.length - 1].count;
//     let maxCountArray = sortArray.filter((x) => {
//         if(x.count == maxCount){
//             return x ;
//         }
//     });


//     if (maxCountArray.length == 1){
//         result = maxCountArray[0].type;
//     }else{

//         let lowerType = maxCountArray.sort((a, b) =>{
//             return a.type - b.type;
//         });
//         result = lowerType[0].type;
//     }


//     return result;
// }
// let result = mytestArray(testArray);

// console.log(result); 


//-----[26]--------- 

// let arrayOfGrades = [34, 33, 38, 44, 33, 35, 39, 97, 68, 35, 75, 85, 64, 32, 88, 45, 76, 25, 99, 77];

// function gradingStudents(grades){

//     let resultArray = [];

//     grades.forEach((grades) =>{
//         if(grades < 38){
//             resultArray.push(grades);
//         }else{
//             if(grades % 5 == 3 ){
//                 resultArray.push(grades + 2)
//             }else{
//                 if(grades % 5 == 4){
//                     resultArray.push(grades + 1)
//                 }else{
//                     resultArray.push(grades);
//                 }
//             }
//         }
//     });


//     return resultArray;
// }

// console.log(gradingStudents(arrayOfGrades));

//-------[27]-----------------------------------------------

// let numbe = 10;
// for(let i = 1; i <= 10; i++){
//     let result;
//     result = numbe * i;
//     let finalResult = numbe + " * " + i + " = " + result;
//     console.log(finalResult);
//     // document.write(finalResult,"<br>");
// };

//----------[28]-------match and search methode---------------------------------

// const sentence = "Learn with Sumit is all about teaching web sumit development skills and techniques in an efficient and practical sumit manner . If you are just getting started in web development, learn with has all sumit the tools you need to learn sumit the newest and most popular technologies to convert you. ";

// const matchesArray = [];
// const matches = matchesArray.push(sentence.match(/sumit/gi));
// console.log(matchesArray);


// const matches = sentence.match(/sumit/gi);
// console.log(matches);

// const matches = sentence.match(/sumit/gi);
// const occurances = matches ? matches.length : 0;
// console.log(occurances);


// const position = sentence.search(/sumit/i);
// console.log(position);

// const position = sentence.search(/sumit/i);
// console.log(position);


//--------[29]------------------------------------------
// function linearSearch(arr, val){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === val){
//             return i;
        
//         }
//     }

//     return "not found!";
// }
// console.log(linearSearch(["a","b","d","c","f","c","c"], "c"));



