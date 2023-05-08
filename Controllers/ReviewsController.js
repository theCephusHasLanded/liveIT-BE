const express = require("express");

const { getSnacks } = require("../queries/snacks.js");
const review = express.Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");
const { get } = require("../app.js");


review.get("/", async (req, res) => {
  const { bookmarkId } = req.params;
  (bookmarkId);
  try{
    const allReviews = await getAllReviews(bookmarkId);
    res.json(allReviews)
  } catch (err) {
    res.json(err)
  }
  // if (allReviews[0]) {
  //   res.status(200).json(allReviews);
  // } else {
  //   res.status(500).json({ error: "server error" });
  // }
});


review.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
review.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateReview(id, req.body);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});

review.post("/", async (req, res) => {
  const review = await newReview(req.body);
  res.status(200).json(review);
});

// DELETE
review.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TEST JSON NEW
// {
//     "reviewer":"Lou",
//      "title": "Fryin Better",
//      "content": "With the great tips and tricks I found here",
//      "bookmark_id": "2",
//      "rating": "4"
// }
module.exports = review;