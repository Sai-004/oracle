var message = "Welcome to your life";
console.log(message);
function adder(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2) {
        console.log("The sum is: " + (num1 + num2));
    }
    else {
        console.log(num1 + num1);
    }
}
console.log(adder(5, 6));
