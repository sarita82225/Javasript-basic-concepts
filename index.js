// Template literal
const age = 11;
const fullName = "Ansh Bhardwaj";

// output: Hello Mr Ansh your age is: 11

console.log("Hello Mr" + "fullName"+ "your age is : " +age);

//Destructuring in array and object

const arr = [1,2,3,4,5];
console.log(arr[1]);  //output 2

const [a,b,c,d] = arr;
console.log(c); //output 3

//accessing object value

const person = {
    name: "Ansh",
    gender: "male",
    location: "Italy",
};


//dot notation
console.log(person.name);   //output Ansh

//bracket notation
console.log(person["gender"]);  //male

//Destructuring

const {name,gender,location} = person;
console.log(name);
console.log(location);

// Spread Operator (...)
//Usecase
//Duplicating array
const arr1 = [1,2,3];
const duplicateArr1 = [...arr1];
console.log(duplicateArr1);

//Merging of arrays
const num1=[0,1,2,3,4,5];
const num2=[6,7,8,9,10];
const result= [...num1, ...num2];
console.log(result);

//Merging Object
const obj1= {
    a:1,
    b:2
};
 obj2={
    c:"hello",
    d:"Ansh"
 };

 const res= {...obj1, ...obj2};
 console.log(res);

 //Function
 function add (...numbers){
    console.log(numbers);
    let add = 0;
    for (let i=0; i<numbers.length; i++){
        add += numbers[i];
    }
    return add;
 }

 console.log(add(1,2,4,5,6)); //output 18

 //Function declaration
 function sum(num1, num2){
    return num1+num2;

 }

 sum(40,50); //function call

 //function expression

 const addTwoNumber = function(num1, num2){
    console.log(num1+num2);
 };

 addTwoNumber(3,4);

 //Function without name is called annonymus function


 //Callback function

 const func = function(callback){
    setTimeout(function(){
        callback();}, 2000)
    }

    const callback= function(){
        console.log("do something");
    
    }

    func(callback);


    //Higher order function

    const side = [2,6,8,9];

    const area = function(sideArray){
        const result = [];
        for(let i=0; i<sideArray.length; i++){
            const a = 4*sideArray[i];
            result.push(a);
        }
        return result;
    }

    const ans = area(side);
    console.log(ans);


    //

    const formulaOfArea= function(side){
        return 4*side;
    }

    const formulaOfPerimeter = function(side){
       return side+side+side+side;
    }

    const calculate = function(sideArray,formula){
        const result = [];
        for(let i=0; i<sideArray.length; i++){
            const a = formula(sideArray[i]);
            result.push(a);
        }
        return result;
        }

        const ans1=(calculate(side,formulaOfArea));
        console.log(ans1);
       const ans2=(calculate(side,formulaOfPerimeter));
       console.log(ans2);
    



 




