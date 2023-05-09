const db = require("../db/dbConfig.js");

//INDEX - get all reviews
const getAllReviews = async (id) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews");
    return allReviews;
  } catch (error) {
    return error;
  }
};

//SHOW - single review
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// CREATE - New Review
const newReview = async (review) => {
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, title, content, rating, snack_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [review.reviewer, review.title, review.content, review.rating, review.snack_id]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};



module.exports = { 
  getAllReviews, 
  newReview, 
  getReview, 
  deleteReview, 
  updateReview 
};