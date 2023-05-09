const db = require("../db/dbConfig");

//GET ALL
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

//GET ONE
const getASnack = async (id) => {
  try {
    const snack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
    return snack;
  } catch (error) {
    return error
  }
};


//CREATE ONE
const createSnack = async (snackToAdd) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, calorie, sugar, fat, is_healthy) VALUES ($1, $2, $3, $4, $5)  RETURNING *",
      [
        snackToAdd.name,
        snackToAdd.calorie,
        snackToAdd.sugar,
        snackToAdd.fat,
        snackToAdd.is_healthy,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

//UPDATE ONE
const updateSnack = async (id, snackToUpdate) => {
  try {
    const updatedSnack = await db.one(
        "UPDATE snacks SET name=$1, calorie=$2, sugar=$3, fat=$4, is_healthy=$5 WHERE id=$6 RETURNING *",
        [
        snackToAdd.name,
        snackToAdd.calorie,
        snackToAdd.sugar,
        snackToAdd.fat,
        snackToAdd.is_healthy,
        id
      ]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

//DELETE ONE
const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getASnack,
  createSnack,
  updateSnack,
  deleteSnack,
};
