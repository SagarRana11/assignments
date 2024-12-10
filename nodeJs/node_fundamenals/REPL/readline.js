const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
});

readLine.question("What is your name ?", name =>{
    console.log(`hi ${name}!`);
    readLine.close();
})