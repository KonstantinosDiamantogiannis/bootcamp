var N = +prompt("dwse N arithmous gia to athroisma tous", "12")

function athroismaArithmwnUser(n) {
    var sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

console.log(athroismaArithmwnUser(N))