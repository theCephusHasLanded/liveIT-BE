const checkTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title || title.length > 10) {
    next()
  } else {
    res.status(400).json({ error: "Title is required and must be less than 10 characters" });
  }
};

module.exports = { checkTitle };
