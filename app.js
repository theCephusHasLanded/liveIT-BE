const express = require("express");
const app = express();
const cors = require("cors");
const snacksController = require("./controllers/SnacksController.js");
const reviewsController = require("./controllers/ReviewsController.js");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/snacks/:snackId/reviews", reviewsController); // updated route for reviews
app.use("/snacks", snacksController);
app.use("/reviews", reviewsController);

app.get("/", (_, res) => {
  res.send("Welcome to liveIt");
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "oopsie! Try Again" });
});

module.exports = app;
