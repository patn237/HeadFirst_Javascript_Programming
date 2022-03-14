var balance = 10500;


function steal(x, amount) {
    if (amount < x) {
        balance = x - amount;
    }
    return balance;
}

var balance = steal(balance, 1250);
alert("You're new balance is " + balance + "!");