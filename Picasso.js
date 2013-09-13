//Picaso by MauroEldritch allows you to write colored output to your console
//from any node.js app you're coding.

//Import into your project like
//var picasso = require("./Picasso.js");
// And then, whenever you want to write in colors, just do as follows:
//example usage:
//console.log(red + "I want a red font" + white);
//Why white? I'm just assuming that's your default, if not, just set another color! 
//Want to give it a try? Invoke this file doing "node Picasso.js test" from terminal/CMD

GLOBAL.red   = '\033[31m';
GLOBAL.green   = '\033[32m';
GLOBAL.yellow  = '\033[33m';
GLOBAL.blue   = '\033[34m';
GLOBAL.magenta  = '\033[35m';
GLOBAL.cyan  = '\033[36m';
GLOBAL.white = '\033[0m';
GLOBAL.black   = '\033[30m';

var comando = process.argv[2];
if (comando == "test") {
console.log(red + "Sample text." + white);
console.log(green + "Sample text." + white);
console.log(yellow + "Sample text." + white);
console.log(blue + "Sample text." + white);
console.log(magenta + "Sample text." + white);
console.log(cyan + "Sample text." + white);
console.log(white + "Sample text." + white);
console.log(black + "Sample text." + white);

}