var fs = require('fs');
var array = fs.readFileSync('three-letter-words.txt').toString().split("\n");
for(i in array) {
    console.log("words.push('" + array[i] + "');");
}
