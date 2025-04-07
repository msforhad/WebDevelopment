// class Student{
//     constructor(sId,sName){
//         this.id = sId;
//         this.name = sName;
//         this.school = "purnamoti M.A hight school";
//     }
// // 
// }
// const student1 = new Student(12,"forhad");
// const student2 = new Student(501,"hasan");
// const student3 = new Student(532,"mehedi");
// console.log(student1,student2,student3);
// console.log(student1.id, student2.name);


// class parent{
    // constructor(){
        // this.fatherName = "baccho miya";
    // }
// }
// class child extends parent{
    // constructor(name){
        // super();
        // this.name = name;
    // }
    // getFullName(){
        // return this.fatherName+" "+this.name;
    // }
// }
// const baby1 = new child("forhad");
// const baby2 = new child("hasan");
// console.log(baby1,baby2);
// console.log(baby1.getFullName(), baby2.getFullName());


const object ={
    name:'forhad',
    userId:2021,
    getFullName:function(){
        return 'Mr. ' + this.name;
    }
}
const anotherObject ={
    name:'Mehedi'
}

console.log(object.name)
console.log(object.getFullName())

anotherObject.getFullName=object.getFullName;
console.log(anotherObject.getFullName())