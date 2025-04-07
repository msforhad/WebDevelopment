//[01]-------------------You can use an alert box to display data:----------
// window.alert('my name is forhad');


//[02]--------------------Invoke (call) a function to convert from Fahrenheit to Celsius-----------
// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
  
//   let value = toCelsius(87);
//   document.write(value);


// let text = "The temperature is " + toCelsius(77) + " Celsius.";
// document.write(text);
// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }


//[03]-----------------Create an object:---------------------------
 
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//       return this.firstName + " " + this.lastName +" " + this.id;
//     }
//   };
//   document.write(person.fullName(),"<br>");
//   document.write(person.fullName);


//[04]-----------------JavaScript String Methods-----------------------

// -------------------The length property returns the length of a string:-------
    // let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // document.write(text.length);

//-------------------Slice out a portion of a string from position 7 to position 13:------------
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13);
// let part1 = text.slice(7);
// //Extract a part of a string counting from the end:
// let part2 = text.slice(-12);
// let part3 = text.slice(-12,-6);

// document.write(part,"<br>"); 
// document.write(part1,"<br>");
// document.write(part2,"<br>");
// document.write(part3);


//------------[05]----------------The substring() method extract a part of a string and returns the extracted parts in a new string
// let str = "Apple, Banana, Kiwi";
// document.write(str.substring(7,13),"<br>");

// let strt = "Apple, Banana, Kiwi";
// document.write(strt.substring(-4));


//-----[06]-------The trim() Method--------------------

//  let text = "          forhad         ";
// let text1 =text.trim();
// let text2 = text.trimEnd();
// let text3 =text.trimStart();

// document.write(text,":",text.length,"<br>");
// document.write(text1,":",text1.length,"<br>");
// document.write(text2,":",text2.length,"<br>");
// document.write(text3,":",text3.length);


//-------[07]------The charAt() method returns the character at a given position in a string:---------

// var text = "MY NAME IS FORHAD";
// document.write(text.charAt(3),"<br>");
// document.write(text[0]);


//-------[08]-----Display the first array element, after a string split:-----------------------------

// let text = "a,b,c,d,e,f,g,h";
// let txt = "I love Bangladesh";
// const txtArry = Array.from(txt);
// document.write(txtArry,"<br>");
// const textArry = text.split(",");
// document.write(textArry,"<br>");
// document.write(textArry[2])


//-------[09]------The includes() method is not supported in Internet Explorer.-------------
// let text = "Hello world, welcome to the universe.";

// document.write(text.includes("world"),"<br>");
// document.write(text.startsWith("Hello"),"<br>");
// document.write(text.endsWith("universe."));
// document.write(text.startsWith("world",6));
// document.write(text.endsWith("the",27))
// document.getElementById("demo").innerHTML = text.startsWith("world", 6);


//------[10]-----The indexOf() method returns the position of the first occurrence of a string in a string--------
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");

// document.getElementById("demo").innerHTML = index;
// document.write(text.lastIndexOf("locate"),"<br>");
// document.write(text.indexOf("where"),"<br>"); 

//---------Both indexOf() and lastIndexOf() return -1 if the text is not found:----------------------
// document.write(text.indexOf("love"));

//---------The search() method returns the position of the first occurrence of a string in a string.-----------
// document.write(text.search("where"),"<br>");
// document.write(text.search(/where/));


//-------[11]------The match() Method---------------------------------
// let txt = "The rain in SPAIN stays mainly in the plain";
// const myArr = txt.match("rain");
// document.getElementById("demo").innerHTML = myArr.length + " " + myArr;

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const iterator = text.matchAll("Cats");
// const myiterator = text.matchAll(/Cats/g);
// const myIterator = text.matchAll(/Cats/gi);

// document.write(Array.from(iterator),"<br>");
// document.write(Array.from(myiterator),"<br>");
// document.write(Array.from(myIterator));


//-----[12]---------Template literals allows variables in strings:------------------
// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;
// document.write(text,"<br>");

// let price = 10;
// let VAT = 0.25;
// let total = `toFixed2Total: ${(price * (1 + VAT)).toFixed(2)}`;
// let Total = `toFixed5Total: ${(price * (1 + VAT)).toFixed(5)}`;
// document.write(total,"<br>");
// document.write(Total);


//----[13]------Extra large or extra small numbers can be written with scientific (exponent) notation:-----------
// let x = 123e5;
// let y = 123e-5;
// document.getElementById("demo").innerHTML = x + "<br>" + y;

//---------Infinity is returned if you calculate a number outside the largest possible number:----------
// let myNumber = 2; 
// let txt = "";
// while (myNumber != Infinity) {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber + "<br>";
// }
// document.write(txt);


//-----Division by zero generates Infinity;-------
// let x = 2/0;
// let y = -2/0;
// document.write(x + "<br>" + y);


//------------[14]-------------The toString() method can output numbers from base 2 to 36:-----------------
// let myNumber = 32;
// document.getElementById("demo").innerHTML =
// "Decimal 32 = " + "<br><br>" + 

// "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
// "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
// "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
// "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
// "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
// "Octal (base 8): " + myNumber.toString(8) + "<br>" +
// "Binary (base 2): " + myNumber.toString(2);


//----------[15]------JavaScript Number Methods---------------------------

//---------------The toString() method converts a number to a string---------
// let x = 123;
// let y = x.toString();

// document.write(typeof(y));
// document.getElementById("demo").innerHTML = x.toString() + "<br>" + (123).toString() + "<br>" +(100 + 23).toString();

//---------------------------An optional parameter defines the number of digits behind the decimal point.-------------------
// let x = 9.65645544;
// document.getElementById("demo").innerHTML = x.toExponential() + "<br>" + x.toExponential(2) + "<br>" + x.toExponential(4) + "<br>" + x.toExponential(6);

//--------------The toFixed() method rounds a number to a given number of digits.----------------------------
// let x = 9.656;
// document.getElementById("demo").innerHTML =
//   x.toFixed(0) + "<br>" +
//   x.toFixed(2) + "<br>" +
//   x.toFixed(4) + "<br>" +
//   x.toFixed(6);

//----------The toPrecision() method returns a string, with a number written with a specified length:-----------------------
// let x = 9.656;
// document.getElementById("demo").innerHTML = 
//   x.toPrecision() + "<br>" +
//   x.toPrecision(2) + "<br>" +
//   x.toPrecision(4) + "<br>" +
//   x.toPrecision(6);

//--------------The valueOf() method returns a number as a number:----------------------------
// let x = 123;

// document.getElementById("demo").innerHTML = 
// x.valueOf() + "<br>" 
// +(123).valueOf() + "<br>"
// + (100 + 23).valueOf();

//---------------The global JavaScript function parseInt() converts strings to numbers:--------------------
// document.getElementById("demo").innerHTML = 
//   parseInt("-10") + "<br>" +
//   parseInt("-10.33") + "<br>" +
//   parseInt("10") + "<br>" +
//   parseInt("10.33") + "<br>" +
//   parseInt("10 6") + "<br>" +  
//   parseInt("10 years") + "<br>" +  
//   parseInt("years 10"); 


//------------------The parseFloat() method converts strings to numbers:-----------------

// document.getElementById("demo").innerHTML = 
//   parseFloat("10") + "<br>" +
//   parseFloat("10.33") + "<br>" +
//   parseFloat("10 6") + "<br>" +  
//   parseFloat("10 years") + "<br>" +
//   parseFloat("years 10"); 

//----------[16]------JavaScript Arrays---------------

// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// document.getElementById("demo").innerHTML = cars;

// const cars = new Array("Saab", "Volvo", "BMW");
// cars[0]="forhad";
// document.write(cars,"<br>");
// document.write(cars[cars.length-2]);


//-----------------------Looping an Array-----------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
//   text += "</ul>";
// document.write(text);


//------------------The forEach() Method--------Call a function for each array element:--------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";
// document.write(text);
// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// } 


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" * ");

//-------------The pop() method removes the last element from an array.---------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits,"<br>");
// fruits.pop();
// document.write(fruits);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits.pop());
// document.write(fruits);


//------------The shift() method removes the first element of an array (and "shifts" the other elements to the left):--------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits);
// fruits.shift();
// document.write(fruits);

//------------The unshift() method adds new elements to the beginning of an array:--------------------

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.write(fruits,"<br>");
// fruits.unshift("Lemon");
// document.write(fruits);

//------------The concat() method merges (concatenates) arrays:------------

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// document.getElementById("demo").innerHTML = myChildren;


// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];
// const myChildren = array1.concat(array2, array3); 
// document.getElementById("demo").innerHTML = myChildren;

// const myArray = ["Emil", "Tobias", "Linus"];
// const myChildren = myArray.concat("Peter"); 
// document.getElementById("demo").innerHTML = myChildren;


//--------[17]-----The sort() method sorts an array alphabetically:-----------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits.sort();
// document.getElementById("demo2").innerHTML = fruits;


//--------------The reverse() method reverses the elements in an array------
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;
// // First sort the array
// fruits.sort();
// // Then reverse it:
// fruits.reverse();
// document.getElementById("demo2").innerHTML = fruits;



//---------[18]---------The splice() method adds new elements to an array:--------------

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Painapal"];
// document.write(fruits,"<br>");

// fruits.splice(2, 0, "Lemon", "Kiwi");// not remove the array
// document.write(fruits,"<br>");

// fruits.splice(2, 2, "Lemon", "Kiwi", "Tomato");// 2 array remove and add the 3 array
// document.write(fruits);

// fruits.splice(1, 2);
// document.write(fruits);


//------The slice() method slices out a piece of an array into a new array.----------------------
// const newFruits = fruits.slice(3, 5);
// document.write(newFruits);
// console.log(newFruits)

