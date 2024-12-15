const path = require("path");

const express = require("express");

const defaultRoutes = require('./routes/default');
const restaurantRoutes = require('./routes/restaurants');

const app = express();
exports.app = app;

app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use('/', defaultRoutes);
app.use('/', restaurantRoutes);

app.use(function(req, res){
  res.status(404).render('404');
});

app.use(function(error, req, res, next){
  // error contains the message which we ideally see during execution of the code error shown by express
  // next();
  console.error(error);
  res.status(500).render('500');
});

app.listen(443);