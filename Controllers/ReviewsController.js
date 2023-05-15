const { getASnack } = require("../queries/snacks.js");
const review = require("express").Router({ mergeParams: true });
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews.js");
// const { checkTitle } = require('../validations/checkReviews.js');

review.get("/snack/:snackId", async (req, res) => {
  const { snackId } = req.params;
  try{
    const allReviews = await getAllReviews(snackId);
    res.json(allReviews)
  } catch (err) {
    res.json(err)
  }
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
    res.status(404).json({ error: "At least one field is required to update a Review" });
  }
});
//TODO: add checkTitle

//CREATE
review.post("/add/snack/:snackId", async (req, res) => {
  const review = await createReview(req.body);
  res.status(200).json(review);
});
//TODO: add checkTitle back

// DELETE
review.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

module.exports = review;
