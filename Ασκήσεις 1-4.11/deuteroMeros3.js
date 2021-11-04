var x = +prompt("Dwse 1o arithmo", "1")
var y = +prompt("Dwse 2o arithmo", "-5")

if(x >= 0 && y >= 0) {
    console.log("το πρόσημο θα είναι το ‘+’ και για τους δυο.")
} else if(x >= 0 && y < 0) {
    console.log("το πρόσημο θα είναι ‘+’ για τον πρώτο και ‘-’ για τον δεύτερο.")
} else if(x < 0 && y >= 0) {
    console.log("το πρόσημο θα είναι ‘-‘ για τον πρώτο και ‘+’ για τον δεύτερο.")
} else {
    console.log("το πρόσημο θα είναι το ‘-‘ και για τους δυο.")
}