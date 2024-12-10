var fs = require('fs');


// fs.appendFile('mynewfile1.txt', 'This is my text', function(err){
//     if(err) throw err;
//     console.log('Updated!');
// });

fs.writeFile('mynewfile3.txt', "This is file 3 being edited", function(err){
    if (err) throw err;
    console.log('File updated');
})