const fs = require('fs');
let fileData;
// const fileData = 4; //Not permitted
function readFile(){
    try{
        // const fileData = fs.readFileSync('data.json');//Permitted
        fileData = fs.readFileSync('data.json');
    }
    catch{
        console.log('An error occured');
    }
    console.log('Hi There');
}
console.log(fileData);
readFile.message = 'Something went wrong!';
console.log(readFile.message);

function doSomething(){
    throw {message: 'This does not work'};
}

doSomething();
/*
When errors occur, you also always get some data (typically an object) with more information about that error (e.g. a message and a sequence of steps that lead to the error).

You can get hold of that object / data like this:

    try {
        somethingThatMightFail();
    } catch (error) { // accept an "error parameter" after catch
        console.log(error.message);
    }

You can accept the error data like a parameter (even though it technically isn't a function) after catch.

What exactly that data is (e.g. an object with a message property) will depend on the function / method that caused the error.

You can also throw your own errors:

    function doSomething() {
        // do something ...
        throw { message: 'Something went wrong! };
    }

That's a bit more advanced but that is in the end what all these built-in functions and methods do, if they cause an error.

*/