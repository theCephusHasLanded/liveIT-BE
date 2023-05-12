const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getASnack, createSnack, deleteSnack, updateSnack } = require("../queries/snacks");
// const { checkRequest } = require("../validations/checksnacks");
// const { checkRequest, checkId } = require('../validations/checksnacks')

//GET ROUTE
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();

  // if (allSnacks[0]) {
    res.status(200).json(allSnacks);
  // } else {
  //   res.status(500).json({ error: "Server Error" });
  // }
});

//GET ONE ROUTE
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getASnack(id);

  if (snack) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "Snack not found" });
  }
});



//CREATE ROUTE
snacks.post("/", async (req, res) => {
  const newSnack = req.body;

  if (!newSnack.name) {
    res.status(400).json({ error: "Name is missing" });
  } else if (!newSnack.calorie) {
    res.status(400).json({ error: "Calorie is missing" });
  } else if (newSnack.is_healthy !== undefined && typeof newSnack.is_healthy !== "boolean") {
    res.status(400).json({ error: "is_healthy must be a boolean" });
  } else {
    try {
      const addedSnack = await createSnack(newSnack);
      res.status(200).json(addedSnack);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
});

//DELETE ROUTE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack.id) {
      res.status(200).json(deletedSnack);
    } else {
      throw new Error("A snack with that Id does not exist")
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//UPDATE ROUTE
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const snackToUpdate = req.body;

  if (!snackToUpdate.name && !snackToUpdate.calorie && snackToUpdate.is_healthy === undefined) {
    res.status(400).json({ error: "At least one field is required to update a snack" });
    return;
  }

  try {
    const updatedSnack = await updateSnack(id, snackToUpdate);
    res.status(200).json(updatedSnack);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = snacks;
