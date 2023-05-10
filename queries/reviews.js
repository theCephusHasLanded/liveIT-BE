const db = require("../db/dbConfig.js");

//INDEX - get all reviews
const getAllReviews = async (snackId) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE snack_id=$1", snackId);
    return allReviews;
  } catch (error) {
    return error;
  }
};

// //get all reviews for one snack
// const getAllReviewsForOneSnack = async (id) => {
//   try {
//     const allReviews = await db.any("SELECT * FROM reviews WHERE snack_id=$1", id);
//     return allReviews;
//   } catch (error) {
//     return error;
//   }
// };


//SHOW - single review
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// CREATE - New Review
const createReview = async (review) => {
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

const updateReview = async (id, review) => {
  // const { reviewer, title, content, rating, snack_id } = review;
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4, snack_id=$5 WHERE id=$6 RETURNING *",
      [review.reviewer, review.title, review.content, review.rating, review.snack_id, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};


// //Update - previously done review needs changes
// const updateReview = async (id, review) => {
//   // const { reviewer, title, content, rating, snack_id } = review;
//   try {
//     const updatedReview = await db.one(
//       "UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4 snack_id=$5 WHERE id=$6 RETURNING *",
//       [review.reviewer, review.title, review.content, review.rating, review.snack_id, id]
//     );
//     return updatedReview;
//   } catch (error) {
//     return error;
//   }
// };


//DELETE - delete review
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      [id]
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
  
};
