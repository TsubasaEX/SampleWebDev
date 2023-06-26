var studentNames = ["Timmy", "Janessa", "Arun"];

//bad practice
// var person = ["John", 12, "USA", true]

var naughtyList = [];
naughtyList.push(studentNames[0]);

var index = naughtyList.indexOf("Timmy");

console.log(naughtyList);
if (index > -1) {
    delItem = naughtyList.splice(index, 1)
    console.log("delItem: " + delItem);
    console.log(naughtyList);
}