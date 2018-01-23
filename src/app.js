var fs = require('fs');

fs.readFile('markdown.md', 'utf8', function (err, contents) {
    var file = contents;
    // console.log(file);

    var newRegex = /\(.*?\)/g;
    var myArray;
    while ((myArray = newRegex.exec(file)) !== null) { 
        var msg = myArray[0];
        var subString = msg.substring(1, msg.length - 1);
        console.log(subString);
        // var newArray = [];
        // newArray.push(subString);
        //console.log(newArray);
    }
});
module.exports.fs = fs;


//funcion de test 
// module.exports = {
//   extractLinksFromMd(paragraph) {
//     return  [
//       { href: 'https://en.wiktionary.org/wiki/labore', text: 'labore' },
//       { href: 'https://en.wiktionary.org/wiki/dolore', text: 'dolore' },
//       { href: 'http://foo.com', text: 'foo' },
//     ]
//   }
// };

