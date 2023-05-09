const express = require("express");
const reviews = express.Router({ mergeParams: true });

//const { getASnack } = require("../queries/snacks.js");

const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");
//const { get } = require("../app.js");

//All reviews for one snack
snacks.use("/:snackId/reviews", reviewsController)

//INDEX - get all reviews
reviews.get("/", async (req, res) => {
  const { snackId } = req.params;
  //(snackId);
  try {
    const allReviews = await getAllReviews(snackId);
    res.json(allReviews)
  } catch (err) {
    res.json(err)
  }
});

//SHOW - single review
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.status.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE - New Review
reviews.post("/", async (req, res) => {
  try {
  const review = await createReview(req.body);
  res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error })
  }
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// UPDATE - previously done review
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

module.exports = reviews;
