(function() {
    var names = ["Yuvraj", "Jenny", "Yon", "Jassi", "Raj", "Shashank", "Ram", "Priti", "Nikhil", "Jiya"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            bye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();