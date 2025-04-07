// -------onclick event-------
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// -----------onmouseover event----------
// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside div");
// };

// -------addEventListener----------
// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click",() =>{
//     console.group("button2 was clicked");
// });

// btn2.addEventListener("click",() =>{
//     console.group("button2 was clicked -handler2");
// });

//----background change -----//

// -----------1st method--------
// let modeBtn = document.querySelector("#mode");
// let currentMode = "light";
// modeBtn.addEventListener("click",() =>{
//     if(currentMode === "light"){
//         currentMode="dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }else{
//         currentMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currentMode);[m-]
// });

//-------- second method--------
// let currentMode = "light";
// document.getElementById('mode').addEventListener('click',function(){
//     if(currentMode==="light"){
//         currentMode = "dark";
//         document.body.style.backgroundColor = "black";
//     }else{
//         currentMode="light";
//         document.body.style.backgroundColor = "white";
//     }
// });

// -------event bubble-------
// document.getElementById('first').addEventListener('click',function(){
    // console.log('first item clicked');
    // event.stopPropagation();
// })
// document.getElementById('myList').addEventListener('click',function(){
//     console.log('ul container clicked');
// })
// document.getElementById('container').addEventListener('click',function(){
//     console.log('container was clicked');
// })

// -----------just add item and new add item not remove------
// var items = document.getElementsByClassName('item');
// for(let i = 0; i<items.length;i++){
    // var item = items[i];
    // item.addEventListener('click',function(event){
//         // console.log(this);

//         // console.log(event.target.innerText);

//         // console.log(event.target.parentNode);

        // event.target.parentNode.removeChild(event.target)
    // })
// }
// 
// document.getElementById('addNew').addEventListener('click', function(event){
    // var itemParent = document.getElementById('myList');
    // var newItem = document.createElement('li');
    // newItem.innerText = 'Brand new Item';
    // itemParent.appendChild(newItem);
// })


// -------add new item , new and old item is remove------- 
// document.getElementById('addNew').addEventListener('click', function(event){
//     var itemParent = document.getElementById('myList');
//     var newItem = document.createElement('li');
//     newItem.innerText = 'Brand new Item';
//     itemParent.appendChild(newItem);
// })

// document.getElementById('myList').addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target);
// })