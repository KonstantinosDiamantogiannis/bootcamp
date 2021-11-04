
function fibonacciWithArray(number) {
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < number; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    if(number < 0) {
        console.log("den ginete")
    } else {
        console.log(fib)
    }
}
var userNumber = +prompt("Dwse poso megalh akolouthia arithmwn fibonacci", "60")
fibonacciWithUserInput(userNumber)


function fibonacciWithRecursion(number) {
    if (number < 0) {
        return "Den ginete" 
    } 
    if (number === 0) {
        return 0
    }    
    if (number === 1) {
        return 1
    }
    return fibonacciWithRecursion(number - 2) + fibonacciWithRecursion(number - 1);
}

console.log(fibonacciWithRecursion(10))