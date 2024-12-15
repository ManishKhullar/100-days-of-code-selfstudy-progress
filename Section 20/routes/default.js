const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  console.log(req.path);
  res.render('index');
});

router.get("/about", function (req, res) {
  console.log(req.path);
  res.render('about');
});

module.exports = router;