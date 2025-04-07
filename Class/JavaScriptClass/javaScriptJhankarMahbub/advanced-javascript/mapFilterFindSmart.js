// square number---------
const array = [2,3,4,5];

// for loop er maddome-----
// const output = [];
// for(let i=0;i<array.length; i++){
//     const element = array[i];
//     const result = element*element;
//     output.push(result);
// }
// console.log(output);

//------map er maddome------
// array.map(function(element,index,array){
//     console.log(element,index,array);
// })

const student = [
    {id:2021,name:'forhad'},
    {id:2022,name:'hasan'},
    {id:2023,name:'mehedi'}
];
const names = student.map(s => s.name);
const ids = student.map(x => x.id);
console.log(names);
console.log(ids);

// -----filter-------
// const bigger = array.filter( x => x <3 );
// console.log(bigger);
//----------find-------
// const isThere = array.find(x => x>4);
// console.log(isThere);