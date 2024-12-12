const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

app.get("/", function (req, res) {
  console.log(req.path);
  res.render('index');
});

app.get("/restaurants", function (req, res) {
  console.log(req.path);
  const filePath = path.join(__dirname, 'data', 'restaurants.json');
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  // console.log(storedRestaurants[1]);
  res.render('restaurants',{numberOfRestaurants: storedRestaurants.length, restaurants: storedRestaurants},);
});

app.get("/about", function (req, res) {
  console.log(req.path);
  res.render('about');
});

app.get("/confirm", function (req, res) {
  console.log(req.path);
  res.render('confirm');
});

app.get("/recommended", function (req, res) {
  console.log(req.path);
  res.render('recommend');
});

app.post("/recommended", function (req, res) {
  console.log(req.path);
  /*const restaurantName = req.body.name;
    const restaurantAddress = req.body.address;
    const restaurantCuisine = req.body.cuisine;
    const restaurantWebsite = req.body.website;
    const restaurantDescription = req.body.description;*/
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurants.json");
  const readData = fs.readFileSync(filePath);
  console.log(typeof readData);
  console.log(JSON.parse(readData));
  const storedRestaurants = JSON.parse(readData);
  console.log(typeof storedRestaurants);
  storedRestaurants.push(restaurant);
  console.log(JSON.stringify(storedRestaurants));
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
  res.redirect("/confirm");
});

app.listen(443);
