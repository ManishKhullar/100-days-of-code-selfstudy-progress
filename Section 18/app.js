const express = require('express');

const app = express();
// console.log(app);
// JSON.stringify(app);

app.get('/currenttime',function(req, res, next){
    res.send('<h1>' + new Date().toISOString() +  '<h1>');

});//route OR routeHandler

app.get('/', function(req, res){
 res.send('<h1> Hello World</h1>')
})
//how to override status code in express?
app.listen(443);