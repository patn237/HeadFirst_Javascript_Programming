var firstName = ["George", "Sally", "Doug", "Fredrick", "Kayla", "Tom", "Erin", "Patrick", "Jordan", "Vincent", "Natalie", "Sarah", "Rick"];
var lastName = ["Smith", "Roberts", "Carter", "Washington", "Adams", "Shields", "Naegele", "Nichol", "Jones", "Ricketts", "Burns", "Wilson", "Rivers"];

function nameGenerator(firstName, lastName) {
    var rand1 = Math.floor(Math.random() * firstName.length);
    var rand2 = Math.floor(Math.random() * lastName.length);

    var fullName = (firstName[rand1] + " " + lastName[rand2]);
    return fullName
}

document.write("There are " + (firstName.length) + " first names.");
document.write("<br>");
document.write("There are " + (lastName.length) + " last names.");
document.write("<br>");
document.write("<br>");
document.write("Here are some first names that you can use:");
document.write("<br>");

for (var i = 0; i < firstName.length; i++) {
    document.write(firstName[i] + ", ");
}

document.write("<br>");
document.write("<br>");
document.write("Here are some last names that you can use:");
document.write("<br>");

for (var i = 0; i < lastName.length; i++) {
    document.write(lastName[i] + ", ");
}

document.write("<br>");
document.write("<br>");
document.write("Click the submit button to generate a random name.");
document.write("<br>")
document.write('<input type="submit" onclick="alert(nameGenerator(firstName, lastName))">');



