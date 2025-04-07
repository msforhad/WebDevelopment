//[01]----------typeof---------------------------------------------
// const age = [19, 21, 22, 17, 23,16,15,17];
// document.write(typeof(age),"<br>");

//[02]------------------array.isarray------------------------------
// document.write(Array.isArray(age));

//[03]---------------slice--------------------
// const partial = age.slice(2, 6);
// document.write(partial);
// const partia = age.splice(2, 4);
// document.write(partia);

//[04]-----------------------toLowerCase or toUpperCase--------------------------------
// const address = ' DhanmoNdi'
// document.write(address.toLowerCase());
// document.write(address.toUpperCase());

//[05]-----------------------includes-------------------------
// const lyrics = 'tumi bhundho Kala Pakhi,ami jeno ki,sada sada kala kala, mon mejese sada kala';
// const searchItem = 'pakhi';
// const lyricsLowerCase = lyrics.toLowerCase();
// const searchItemLowerCase = searchItem.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchItem);
// document.write(doesExist);
// document.write(lyrics.toLowerCase().includes(searchItem.toLowerCase()));

//[06]-------------------indexof------------------------
// document.write(lyrics.indexOf('Pakhi'),"<br>");

//[07]---------------------startsWith or endswith--------------------------
// document.write(lyrics.toLowerCase().startsWith('tumi'),"<br>");
// document.write(lyrics.toLowerCase().endsWith('kala'));

//[08]-------------split--------------------
// document.write(lyrics.split(""));
// document.write(lyrics.slice(5, 15),"<br>");

//[09]--------------substring-----------------
// document.write(lyrics.substring(5, 13));

//[10]--------------Math.pow----------------------
// const result = Math.pow (3, 4);
// document.write(result);

//[11]-------------math.round-----------------
// const number = 5.333347084;
// document.write(Math.round(number),"<br>");
// const number1 = 13.533347084;
// document.write(Math.round(number1),"<br>");

//[12]---------------math.ceil or math.floor-----------------
// document.write(Math.ceil(3.1),"<br>");
// document.write(Math.floor(3.1));

//[13]------------------wrong approach for swap num2 in num1-------------------
// let num1 = 5;
// let num2 = 7;
// num1 = num2;
// num2 = num1;
// document.write(num1, num2);

// write approach - 1 //
// let temp = num1;
// num1 = num2;
// num2 = temp;
// document.write(num1, num2);

// write approach - 2 by destructing //
// [num1, num2] = [num2, num1];
// document.write(num1, num2);

//[14]--------------max and min number check--------------------
// const jim = 84;
// const dela = 75;
// const chinku = 97;
// const maxNum = Math.max(jim, dela, chinku);
// document.write(maxNum);
// const minNum = Math.min(jim, dela, chinku);
// document.write(minNum);

//[15]---------------------parseFloat or parseInt----------------
// var num1 = 12;
// var num2 = 12.9;
// document.write(parseFloat(num2),"<br>", parseInt(num2))

//[16]----------------object data type-----------------

//ex-01------

// var student ={
//     Name: 'Md.Alim',
//     Home: 'Dhaka',
//     College: 'SEC',
//     Department: 'CE',
//     Mobile_No: '01957224119',
// }
// var propertyName = 'Home';
// var propertyValues = student[propertyName];
// document.write(propertyName," ",propertyValues);

// var property = Object.keys(student);
// var propertyValue = Object.values(student);
// document.write(property,propertyValue);

//ex-02--------

// var shopingCart ={
//     Computer: 1,
//     Mobile:1,
//     Mouse:1,
//     Pen:5,
//     Book:15,
// }
// var keys = Object.keys(shopingCart);
// var values = Object.values(shopingCart);
// document.write(keys,"<br>");
// document.write(values,"<br>");

// for(var i = 0; i < keys.length; i++){
//     var propertyName = keys[i];
//     var propertyValues = shopingCart[propertyName];

//     document.write(propertyName," : ", propertyValues,"<br>");
// }

// [18].................index.......................//

// var numbers = [1, 2, 3, 4, 5, 7];
// document.write(numbers[4],"<br>");

// var num = numbers[5];
// document.write(num,"<br>");

// var length = numbers.length;
// document.write(length,"<br>");

// numbers[3]=40;
// document.write(numbers,"<br>");

// document.write(numbers.indexOf(7));
// var position7 = numbers.indexOf(7);
// document.write(position7);


// [19]............push and pop or shift and unshift...........//

// var numbers = [1, 2, 3, 4, 5, 7];
// numbers.push(8,9);
// numbers.pop()
// numbers.unshift(-1,0)
// numbers.shift()
// document.write(numbers);

// var fruits = ['Apple', 'Banana', 'Orange'];
// document.write(fruits);

// var indexOfBanana = fruits.indexOf('Banana');
// document.write(indexOfBanana);

// fruits[1]= 'Mango';
// document.write(fruits);

// fruits.pop();
// document.write(fruits);

// fruits.push('Water Melon');
// document.write(fruits);

//[20]------------------variable + -----------------
// var price1 = 30;
// price1 = 50;
// price1 += 20;
// price1 -= 10;
// document.write(price1);

//[21]----------------------- array sort-----------------------

// const alpabate = ['C', 'H', 'F', 'A', 'B','D'];
// const Name = ['Baboure','Forhad','Akash','Nayem','Mehedi','Hasan']
// document.write(alpabate.sort(),'<br>');
// document.write(Name.sort());

//[22]---------------choto theke boro ----------------









   

