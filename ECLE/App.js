var a = "Hi Sarita";

function b(){

}

b();   

console.log(a);   //output: "Hi Sarita" ----> Global object


//********** / Hoisting ***************

 b();  // output

console.log(a);

var a = "Hi Sarita";

function b(){

   console.log("called b");
}
 
// Javascript is Single threaded (one command executed at a time) Synchronus (one line of code executed at a time in the order it appears)

function b(){
    var myVar;
    console.log(myVar);  // undefined
}

function a(){
    var myVar=2;
    console.log(myVar);  // 2
     b();
}

var myVar=1;
console.log(myVar);   // 1
a();

// *********** Scope ( where a variable is available in  your code)  **********

function a(){
    function b(){
    var myVar;
    console.log(myVar);  // undefined
}
   // var myVar=2;
   
     b();
}

var myVar=1;
console.log(myVar);   // 1
a();


function a(){
    function b(){
    console.log(myVar);  // 2
}
    var myVar=2;
   
     b();
}

var myVar=1;
console.log(myVar);   // 1
a();


function a(){
    function b(){
    console.log(myVar);  // 1
}

     b();
}

var myVar=1;
console.log(myVar);   // 1
a();

//**************** Asynchronus (More than one at a time) *****************/

for(var i=0;i<=5;i++){
    i=i+1;
    console.log(i); // 1,3,5,6
}
console.log(i); //undefined


for(let i=0;i<=5;i++){
    console.log(i);  //0,2,4,6
    i=i+1;
}
console.log(i);  // undefined
