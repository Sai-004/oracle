let message;
message = "Welcome to your life";
console.log(message);
let power = 7;
let agree = true;
let hero = {
    title: "Ironman",
    power: 7
};
// let avengers:string[] = ["ironman",'hulk','thor']
let avengers = ["ironman", 'hulk', 'thor'];
/*
string
number
boolean
object
array
*/
function adder(num1 = 0, num2) {
    if (num2) {
        console.log(num1 + num2);
    }
    else {
        console.log(num1 + num1);
    }
}
;
console.log(adder(5, 6));
export {};
