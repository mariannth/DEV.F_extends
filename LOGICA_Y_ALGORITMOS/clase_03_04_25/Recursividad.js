function factorial(n){
    if(n < 1){
        return 1;
    }
    return n * factorial(n - 1);
}

let totalFactorial = factorial(125);
console.log(totalFactorial);