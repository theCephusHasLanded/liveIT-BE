const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log(`Yay! A snack name!`)
    next()
  } else {
    res.status(400).json({ error: "A snack name is required" });
  }
};

module.exports = { checkName };
