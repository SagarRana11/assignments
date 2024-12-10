var http = require('http');
var fs= require('fs');
// append creates new file 
// is itdoesn't exists  else updates the existing file
    fs.appendFile('mynewfile1.txt', 'hello content 2', function(err){
        if(err) throw err;
        console.log("Saved");
    });


// open also creates new file if it already doesn't exists
// else opens existing file. 

fs.open('mynewfile2.txt', 'w', function(err,file){
    if(err) throw err;
    console.log('Saved!')
});

// writefile can also create a new file

fs.writeFile('mynewfile3.txt', "hello content!", 
    function(err){
        if(err) throw err;
        console.log('Saved!')
    }
);
