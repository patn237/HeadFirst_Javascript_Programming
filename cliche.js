String.prototype.cliche = function() {
    var cliche = ["lock and load", "touch base", "open the kimono"];

    for (var i = 0; i < cliche.length; i++) {
        var index = this.indexOf(cliche[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

String.prototype.palindrome = function() {
    var palindrome = ["wow", "noon", "refer"];

    for (var i = 0; i < palindrome.length; i++) {
        var index = this.indexOf(palindrome[i]);
        if (index >= 0) {
            return true;
        }
    }
    return false;
};

var sentences = [
    "I'll send my car around to pick you up.",
    "Let's touch base in the morning and see where we are.",
    "We don't want to open the kimono, we just want to inform them.",
    "Oh wow."
];

for (var i = 0; i < sentences.length; i++) {
    var phrase = sentences[i];
    if (phrase.cliche()) {
        console.log("CLICHE ALERT: " + phrase);
    } else if (phrase.palindrome()) {
        console.log("PALINDROME ALERT: " + phrase);
    }
}