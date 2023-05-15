const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getASnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");
const { checkName} = require("../validations/checkSnacks");

//GET ROUTE
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  res.status(200).json(allSnacks);
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
snacks.post("/", checkName, async (req, res) => {
  const newSnack = req.body;

  if (!newSnack.calorie) {
    res.status(400).json({ error: "Calorie is missing" });
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
      throw new Error("A snack with that Id does not exist");
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

//UPDATE ROUTE
snacks.put("/:id", checkName, async (req, res) => {
  const { id } = req.params;
  const snackToUpdate = req.body;
  console.log(id, req.body)
  try {
    const existingSnack = await getASnack(id);

    if (!existingSnack) {
      res.status(404).json({ error: "Snack not found" });
      return;
    }

    // Check if any changes were made to the snack object
    const isModified = Object.keys(snackToUpdate).some(
      (key) => snackToUpdate[key] !== existingSnack[key]
    );

    if (!isModified) {
      res.status(400).json({ error: "No changes detected in the snack object" });
      return;
    }

    const updatedSnack = await updateSnack(id, snackToUpdate);
    res.status(200).json(updatedSnack);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = snacks;
