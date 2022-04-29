var passengers = [
    { 
        name: "Jane Doloop", 
        paid: true,
        ticket: "coach"
    },
    {
        name: "Dr. Evel",
        paid: true,
        ticket: "firstclass"
    },
    {
        name: "Sue Property",
        paid: false,
        ticket: "firstclass"
    },
    {
        name: "John Funcall",
        paid: true,
        ticket: "premium"
    }
];

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

function printPassenger(passenger) {
    var message = passenger.name;
    if (passenger.paid) {
        message = message + " has paid";
    } else {
        message = message + " has not paid";
    }
    console.log(message);
    return false;
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Hi " + passenger.name + ". Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function() {
            alert("Hi " + passenger.name + ". Your choice is cola or water.");
        };
    } else {
        orderFunction = function() {
            alert("Hello " + passenger.name + ". Wine, cola, or water?");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Hi " + passenger.name + ". Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function() {
            alert("Hi " + passenger.name + ". Peanuts or pretzels?");
        };
    } else {
        orderFunction = function() {
            alert("Hello " + passenger.name + ". Would you like a snack box or cheese plate?");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);

