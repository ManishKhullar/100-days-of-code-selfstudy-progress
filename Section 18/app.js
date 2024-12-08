const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
// console.log(app);
// JSON.stringify(app);

app.use(express.urlencoded({extended:false}));

//The combination of path and req + res is called as 'route' OR 'routeHandler'
app.get('/currenttime',function(req, res, next){
    res.send('<h1>' + new Date().toISOString() + '<h1>');
});

app.get('/', function(req, res){
 res.send('<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</button></form>');
});

const data = {"Name":"Manish",
        "Age":"32"};
const filePath = path.join(__dirname, 'data', 'users.json');
const fileData = fs.readFileSync(filePath);
const aa = JSON.parse(fileData);

app.get('/view-user', function(req, res){
    const filePath = path.join(__dirname, 'data', 'users.json');
    let fileData = fs.readFileSync(filePath);
    fileData = JSON.parse(fileData);
    // console.log(fileData);
    let tableData = `<H1>Contents:</H1><TABLE>`;
    fileData.forEach(element => {
     tableData += `<TR><TD>${element}</TD></TR>`
    });
    tableData += `</TABLE>`;
    res.send(tableData);
});

app.post('/store-user', function(req, res){
    const userName = req.body.username;
    // console.log(userName);
    const filePath = path.join(__dirname, 'data', 'users.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);
    console.log(existingUsers);
    existingUsers.push(userName);
    // existingUsers = [userName]; 
    // INVALID AS const existinnUsers.push() IS ONLY UPDATING IN MEMORY data and not the variable data.
    fs.writeFileSync(filePath, JSON.stringify(existingUsers));
    console.log(filePath);
    res.send('<h1>Username Stored!</h1>');
});

//how to override status code in express?
app.listen(443);
// console.log(express);