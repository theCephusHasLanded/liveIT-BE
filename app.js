const express = require("express");
const app = express();
const cors = require("cors")
const snacksController = require('./controllers/SnacksController.js')
const reviewsController = require('./controllers/ReviewsController.js')
// const { validateURL } = require('./validations/checkSnacks.js')


// MIDDLEWARE
app.use(express.json());
app.use(cors());

// /snacks is the base url endpoint for the routes
// middleware
//const snacksController = require("./controllers/SnacksController.js");
app.use("/snacks", snacksController);
app.use("/reviews", reviewsController);


app.get("/", (_, res) => {
  res.send("Welcome to liveIt");
})


// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "oopsie! Try Again" });
})

module.exports = app;
