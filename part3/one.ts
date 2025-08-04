let message = "Welcome to your life";

console.log(message);

function adder (num1:number=0,num2?:number):void {
    if (num2) {
        console.log("The sum is: " + (num1 + num2));
    }else {
        console.log(num1+num1);
    }
}
console.log(adder(5,6));