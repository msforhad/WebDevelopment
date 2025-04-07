// ------findLongesWords in sentence--------[1]-----------

// const findLongesWord = (str)=>{
//     if(str.trim().length === 0){
//         return false;
//     }
//     words = str.split(" ")
//     // longesWord = words.sort((a, b)=> a.length - b.length)
//     // return longesWord.at(-1);

//     longesWord = words.sort((a, b)=> b.length - a.length)
//     return longesWord[0];
// }
// console.log(
//     findLongesWord("My name Is forhad I lived in Bangladesh")
// );

// ----hash tag generator------[02]----------

// const hashTagGenerator = (str) =>{
//     if(str.length >280 || str.trim().length === 0){
//         return false;
//     }

//     words = str.split(" ");
//     firstLetterCapital = words.map((currentWord) => 
//         currentWord.replace(currentWord[0], currentWord[0].toUpperCase())
//     );
//     firstLetterCapital = firstLetterCapital.join("");
//     // return firstLetterCapital;
//     return `#${firstLetterCapital}`;
// }
// console.log(
//     hashTagGenerator(
//         "My name is forhad"
//     )
// );

// --------[03]------------
// const letterMatchCounter = (word, char) =>{
//     word = word.toLowerCase().split("");
//     char = char.toLowerCase();
//     totalCount = word.reduce((accum, currentChar)=> {
//         if(currentChar === char)
//             accum++;
//         return accum;
//     } , 0);
//     return totalCount;
// };
// console.log(
//     letterMatchCounter("iisIOniItItIi", "I")
// );

// ---------checkTriangleType-----[04]-------
// const checkTriangleType = ((a, b, c) => {
    // if(a == b && b == c) return "Equilateral"
    // if(a == b || b == c || a == c) return "isosceles"
    // return "scalene";
// });
// console.log(
    // checkTriangleType(3, 3, 3)
// );

// -----arraySortInAscendingOrder----[05]-------
// const arraySortAscending =(arr) => {
    // return arr.sort((a, b) => a-b ); //ascendingOrder
    // return arr.sort((a, b) => b-a);  //descendingOrder
// };
// 
// console.log(
    // arraySortAscending([5,10,2,1,50,4,8])
// );

// -----PalindromeWord ---[06]---------
// const isPalindrome = (str) =>{
    // str = str.toLowerCase().replace(/\W/g, "");
    // let word = str.split("").reverse().join("")
    // return str === word ? true:false;
// }
// console.log(isPalindrome("My name is Forhad, I reAs in class B.Sc"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// ----findOutMaxNumber in array---[07]------
// const findOutMaxNumber = (arr) =>{
    // console.log(`current Array is:`,arr);
    // console.log(`array convert to number:`,...arr);
    // return Math.max(arr); //not working this function....karon arr ekti array ...array modde Math.max kaj kore nah 
    // return Math.max(...arr); //3dot(...)are convert to the array to number
// }
// console.log(findOutMaxNumber([2,10,1,80,4,50]))
// console.log(findOutMaxNumber([2,10,-1,10,4,50]))
// console.log(findOutMaxNumber([2,10,-1,0,-4,60]))

// ------factorial Number ---[08]-----
// const factorialNumber = (num) => {
//     let fact = 1;
//     for(let i = 1; i<=num ;i++){
//         fact = fact*i;
//     }
//     return num <0 ? `your number is invalid` : fact ;
// }
// console.log(factorialNumber(10))

// ---------array total---[09]---------
// const calculateAverage = (arr) =>{
//     let total = arr.reduce((accum, curElem) => accum + curElem, 0)
//     return total/arr.length;
// }
// console.log(
//     calculateAverage([7,2,5,6,10])
// )

// ---array are equal to array---[10]-------
// const arraysAreEqual = (arr1, arr2) =>{
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     return arr1.every((currentVal, index) => currentVal === arr2[index])
        
// }
// console.log(arraysAreEqual([1,2,3],[1,2,3]));
// console.log(arraysAreEqual([1,2,3],[1,2,4]));
// console.log(arraysAreEqual([1,2,3],[1,2,3,5]));

//  --- a big number are addition---[11]-----
// const addition = (num) =>{
    // let arr = Array.from(String(num), Number)
    // let total = arr.reduce((accum,curEle) => accum + curEle, 0)
    // return total ;
// }
// console.log(addition(123456));
// console.log(addition(5897664));
// ----duplicate value are remove--[12]------
// const duplicateValueAreRemove = (arr) =>{
//     let newArr = [...new Set(arr)]
//     return newArr;
// }
// console.log(duplicateValueAreRemove([1,1,5,5,2,2,5,5,5,8,10,11]))

// ----countVowel----[13]------
// const countVowel = (str)=>{
//     str = str.toLowerCase().replace(/\W/g, "").split("")
//     let count = 0;
//     return str.map((str) => {
//         if(str === "a"||str === "e"||str === "i"||str === "o"||str === "u"){
//            count++;
//         }
//     });
// }
// console.log(countVowel("My name is forhad.I love foods"));

// -----powerFunction ------{14}-------
// const isPowerOfTow = (num)=>{
//     return num % 2 == 0 ? true : false;
// }
// console.log(isPowerOfTow(8));
// console.log(isPowerOfTow(7));