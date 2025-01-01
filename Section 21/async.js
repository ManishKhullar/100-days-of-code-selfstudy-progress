const fs = require('fs');
const fss = require('fs/promises');

function readFile(){
    let fileData;
        // const fileData = fs.readFileSync('data.json');//Permitted
        // fileData = fs.readFileSync('data.txt');
        fileData = fs.readFile('data.txt', function(error, fileData){
            if(error){
            //Do Something
            }
            console.log(fileData.toString());
            console.log('File Parsing done!');
        });
        console.log(fileData);
        console.log('Hi There');
        }
readFile();

/*       
function cleanData(d){return d;}
function storeDetailsInDatabase(d, callback){return d, callback;}
function confirmDataChanged(err, d){}
//CALLBACK HELL
function storeData(){
    fs.readFile('data.txt', function(error, data){
        const cleanedData = cleanData(data);
        storeDetailsInDatabase(cleanedData, function(error, result){
            if(result.changedData){
                confirmDataChanged(function(error, done){
                    if(!error && done){
                        result.render('success');
                    }
                });
            }
        });
    });
}
storeData();

//PROMISE CHAINING
fss.readFile('data.txt')
    .then(function (data){
        const cleanedData = cleanData(data);
        return storeDetailsInDatabase(cleanedData);
    })
    .then(function (result){
        if(result.changedData){//FIXME this does not work in promise but in callback hell it does not throw an error
            return confirmDataChanged();
        }
    })
    .then(function(done){
        if(done){
            res.render('success');
        }
    });
readFile();
*/
/*
//PROMISE
function readFile(){
   let longInt = 1234567890123456789012345678901234567890123456789012345678901234567890; 
   console.log(typeof longInt);
 fss.readFile('data.txt').
    then(function(fileData){
    console.log('File Parsing done!');
    console.log(fileData.toString());
    console.log('Hi There');
    }).catch(function(error){
        console.log(error);
    })
}
readFile();
//Promise is a built in object that wraps asynchronous operations and allows you to write more structured code
*/
//ASYNC AWAIT
//FIXME Why is error not stored in the file Data if its attached to fss.readFile and could be returned implicitly?
// fss.readFile('data.txt') is an asynchronous operation, so it doesn't return the file contents immediately. Instead, it returns a promise. If the promise resolves (i.e., the file is read successfully), the await expression will resolve with the file data, and fileData will be assigned that data.
// If the promise is rejected (i.e., an error occurs), the catch block catches the error. However, this error is not directly stored in fileData. You would need to explicitly assign the error to fileData (or another variable) if you wanted to capture it.
// If the file can't be read for some reason (like if it doesn't exist), the await expression will throw an error. This is where the catch block comes in, which allows you to handle the error.
// The error object will be captured in the catch block, but it doesn't automatically replace or return the value to fileData unless you explicitly assign it there. i.e. fileData = error;
/*
async function readFile(){
    let fileData;
    try{//try catch is not available/ functional in synchronous codes but it is available/functional in asynchronous codes
        fileData = await fss.readFile('data.txt');//internally readFileSync is returning the promise when we use await. JS adds then to the readFile and returns the parameter to the value as data returned
    }
    catch(error){
        console.log(error);
    }
    console.log('File Parsing Done!!!');
    console.log(fileData.toString());
    console.log('Hi There!');

}
readFile();
*/
//in summary async await block allows you to write promise based code in a more readable way
//asynchronous operation is an operation that is executed "in the background" without blocking other tasks.