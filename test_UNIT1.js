
// // IIFE - Immediately Invoked Function 
// (function tAbhi(){
//     console.log("test IITS");
// })
// //Anonymous Function
// let show1 = function(){
//     console.log("Anonymous function")
// }

// let show2 = ()=>console.log("Arrow function")

// let add = (a,b)=> a+b

// //Multiline Anonymous function
// let sum = (a,b=50) =>{
//     let result =10
//     result = a+b
//     return result
// }

// show1()
// show2()
// console.log(add(10,20))
// console.log(sum(10))
// console.log(sum(30,40))

// //Object Function
// let abhi = ()=>({Name:"Test"})
// console.log(abhi())



// class Student{
//     constructor(name,marks){
//         this.name = name;
//         this.marks = marks;
//     }
// }

// const s1 = new Student("Ayaan",85)
// const s2 = new Student("Riya",92)
// const s3 = new Student("Kabir",78)
// const s4 = new Student("Aditya",99)
// const s5 = new Student("Alok",90)

// let studArr = [s1,s2,s3,s4,s4]
//stuArr.sort(a.)


//WRITE A PROGRAM TO FIND ODD/EVEN

// let oe1 = function(a){
//     if(a%2==0){
//         console.log("Even Number")
//     }else{
//         console.log("Odd Number")
//     }
// }

// let oe = (a)=>{
//     if(a%2==0){
//         console.log("Even Number")
//     }else{
//         console.log("Odd Number")
//     }
// }

// oe(10)
// oe(11)

//WAP GREATER BTW TWO NUMBER PROGRAM

// let largerbtw2 = (a,b) =>{
//     return (a>b) ? a : b;
// }

// let largerbtw3 = (a,b,c) =>{
//     return (a>b && a>c) ? a : (b>a && b>c) ? b : c
// }

// console.log(largerbtw2(10,20))
// console.log(largerbtw3(30,10,20))


//WAP to create simple calculator

// let calculator = (ch,a,b)=>{
//     switch(ch){
//         case '+':
//             return a+b
//             break
//         case '-':
//             return a-b
//             break
//         case '*':
//             return a*b
//             break
//         case '/':
//             return a/b
//             break
//         default:
//             return "Invalid"
//     }
// }

// console.log(calculator('+',10,20))
// console.log(calculator('-',10,20))
// console.log(calculator('*',10,20))
// console.log(calculator('/',10,20))
// console.log(calculator(']',10,20))



// const user = {
//     name:"Abhishek",
//     age:40,
//     welcome:function()
//     {
//         console.log(`${this.name},welcome to es6`)
//         console.log(this)
//     }
// }
// user.welcome()
// user.name="Test"
// user.welcome()

// const employee = {
//     name:"Aditya",
//     doj:"12-2-2027",
//     welcome:function(){
//         console.log(`${this.name} joined on ${this.doj}`)
//         console.log(this)
//     }
// }
// employee.welcome()

// function outer(){
//     let x = 10
//     function inner(){
//         console.log("inner",x);
//     }
//     inner()
//     console.log("Outer")
// }
// outer()

// let x=10;
// function outer(){
//     let y = 12
//     function inner(){
//         let z =20
//         console.log(x,y,z);
//     }
//     inner()
// }
// outer()


// LEXICAL(this) kewal arrow function ke saath chalta hai

// let abc = {
//     name : "Aditya",
//     outer : function(){
//         console.log("Here in log",this.name),
//         inner = () => {
//             console.log("in inner",this.name)
//         }
//         inner() // here it will work as "inner" is arrow function
//     }
// }
// abc.outer() 

// const arr = [10,20,30]
// const[x1,...y1] = arr
// console.log(x1,y1)



// let myObj = {
//     name : "Aditya",
//     age : 20,
//     key : "XYZ"
// }

// let duplicate = {...myObj,age:22};
// console.log(duplicate)


// let employee = {
//     name:"Adit",
//     id:"2428cs1345",
//     pos : "Student",
//     age:14
// }

// let dup = {...employee,pos:"Assistent"}
// let {name:myName , age:currAge} = employee;
// console.log(myName,currAge)
// console.log(dup)