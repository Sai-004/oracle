let message:string ;

message = "Welcome to your life";

console.log(message);

let power:number = 7;
let agree:boolean = true;
let hero:object = {
    title : "Ironman",
    power : 7
};

// let avengers:string[] = ["ironman",'hulk','thor']
let avengers:Array<string> = ["ironman",'hulk','thor']

/* 
string
number
boolean
object
array
*/

function adder(num1:number = 0, num2?:number):void{
    if(num2){
       console.log(num1 + num2);
    }else{
       console.log(num1 + num1); 
    }
};
console.log(adder(5,6));

