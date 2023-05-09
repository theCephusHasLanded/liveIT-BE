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



module.exports = { 
  getAllReviews, 
  newReview, 
  getReview, 
  deleteReview, 
  updateReview 
};