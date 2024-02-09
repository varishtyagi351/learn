console.log("Hello World");

//Functions: There are two types of functions
// 1 factory function
// function createRectangle() {
//     return rectangle = {
//         length:1,
//         breadth:6,

//         draw() {
            
//             console.log("My Name is Khan");
//         }
//     };
// }
// let rectangleObject = createRectangle();

// construction function in this function we use the first word is capilatter 
// we use "this" keyword it define the current object:
// construction function basically used to creation and initilation of data;
// function Rectangle() {
//         this.length = 1;
//         this.breadth = 3;
//         this.draw = function(){
//             console.log("My function");
//         }
// }
//object creation using construction function:
//let rectangleObject=new Rectangle();
//Basically the work of new keyword to give the empty object

//Dynamic Nature of objects
// rectangleObject.color='yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

//Construction Property:
// all the function in JS is objects

// rectangleObject.constructer() answer=Rectangle:But the constructor of Rectangle have 
//default function:


// Types in JS
// 1 primitive and value type
// primitive=number,string,boolean,undefined,NUll
// Reference function: function,object,array:

// inbuilt object "Math"
// math object is the mathematical model which is used to calculate the mathematical
// solutions.


//There are two types of string in JS
// primitive and second is objet type string
// let firstName="Babbar";
// //this is the primitive string
// let secondName=new String("Love");
// //this is the object in string


//Template literal
// let lastName="Tyagi";
// let msg = `My ${lastName} is
// Varish 
// Tyagi`;
// console.log(msg);


//New concept "date";
// let date=new Date();

// let date2=new Date('june 20 2002 07:15');

// let date3=new Date(2002,11,20,7);

// console.log(date3);

// date3.setFullYear(1947);

// console.log(date3);

//when we set any value it is called setter:
//and when we receive and fatch the value then it is called getter:



//searching,insert,and adding in primitive data type
//Fully information about array:
//  when you push the element at the positions
//  At last=use .push(9)
// at end = .unshift(8)
//at middle = .splice(2,0,'a,b,c,d');
//0 means nothing delete
//when we find in the array to is exist or not
// let num = [1,2,3,4,5,6,7];
// console.log(num.includes(7));


// search,adding,finding index  in reference data type



//Performance in JS
// const t1=performance.now();
// for(let i=1;i<=10;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent='This is the Para' + i;
//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("This is the optimal time "+(t2-t1)+"ms");


//optimization code
// const t3=performance.now();
// let myDiv = document.createElement("div");
// for(let i=1;i<=10;i++){
//     let newElement=document.createElement("p");
//     newElement.textContent="This is the para"+i;

//     myDiv.appendChild(newElement);

// }
// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log((t4-t3));


// Promise
// let wadda1 = new Promise(function(resolve,reject){
//     setTimeout (() =>{
//         console.log('settimeout1 started')
//     },2000);
//     resolve(true);
// })


// let output =wadda1.value(()=>{
//     let wadda2= new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('settimeout2 started')
//         },3000);
           //resolve("Wadda2 resolver");
//     })
//     return wadda2;
// })

// output.then((value) => console.log(value));
    
