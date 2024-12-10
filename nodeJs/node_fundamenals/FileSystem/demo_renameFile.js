var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile1.txt', function(err){
    if(err) throw error;
    console.log('File Renamed');
});

