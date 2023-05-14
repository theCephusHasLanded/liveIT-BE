const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log(`Yay! A snack name!`)
    next()
  } else {
    res.status(400).json({ error: "A snack name is required" });
  }
};

// const checkBoolean = (req, res, next) => {
//   const { is_healthy } = req.body;
//   if (
//     is_healthy == "true" ||
//     is_healthy == "false" ||
//     is_healthy == undefined
//   ) {
//     next();
//   } else {
//     res.status(400).json({ error: "is_healthy must be a boolean value" });
//   }
// };

module.exports = { checkName };
