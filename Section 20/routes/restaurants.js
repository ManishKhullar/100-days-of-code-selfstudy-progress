const express = require("express");

const uuid = require("uuid");
const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
  console.log(req.path);
  let order = req.query.order;
  let nextOrder = 'desc';
  console.log(order);
  const storedRestaurants = resData.getStoredRestaurants();
  if (order !== 'asc' && order !== 'desc') {
    order = "asc";
  }
  if (order === 'desc') {
    nextOrder = 'asc';
  }
  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === 'asc' && resA.name > resB.name) ||
      (order === 'desc' && resB.name > resA.name)
    ){
      return 1;
    }
    return -1;
  });
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder
  });
});

router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  const storedRestaurants = resData.getStoredRestaurants();
  for (const restaurant of storedRestaurants) {
    if (restaurantId === restaurant.id) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  res.status(404).render("404");
});

router.get("/confirm", function (req, res) {
  console.log(req.path);
  res.render("confirm");
});

router.get("/recommended", function (req, res) {
  console.log(req.path);
  res.render("recommend");
});

router.post("/recommended", function (req, res) {
  console.log(req.path, req.body);
  const restaurant = req.body;
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurnats();
  restaurants.push(restaurant);
  resData.storedRestaurants(restaurants);
  res.redirect("/confirm");
});

module.exports = router;
