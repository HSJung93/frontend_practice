function printName(firstname) {
    var myname = "Hoesung";
    return myname + " " + firstname;
}

// 13, 7, 9, 8, (1, 2, 3, 4), 9(result), 10, 11
function run(firstname) {
    var firstname = firstname || "Youn";
    var result = printName(firstname);
    console.log(result);
}

run();