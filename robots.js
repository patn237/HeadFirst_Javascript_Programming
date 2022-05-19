function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.speak = function() {
    console.log("Hi, my name is " + this.name);
};

Robot.prototype.makeCoffee = function() {
    console.log(this.name + " is making coffee for you.");
};

Robot.prototype.blinkLights = function() {
    console.log(this.name + " is blinking their lights for you.");
};

var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

robby.onOffSwitch = true;
robby.makeCoffee = function() {
    console.log(this.name + " is running to Starbucks for you to pick up your coffee.");
};

rosie.cleanHouse = function() {
    console.log(this.name + " is cleaning the house for you.");
};

console.log(robby.name + " was made by " + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);

robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + " was made by " + rosie.maker + " in " + rosie.year + " and is owned by " + rosie.owner);

rosie.cleanHouse();
