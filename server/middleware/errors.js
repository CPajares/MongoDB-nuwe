const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "Not found" });
};

// eslint-disable-next-line no-unused-vars
const generalErrorHandler = (error, req, res, next) => {
  console.log("Eeeeerror: ", error.message);
  const message = error.code ? error.message : "General pete";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  notFoundErrorHandler,
  generalErrorHandler,
};
