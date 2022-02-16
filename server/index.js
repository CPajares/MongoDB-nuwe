require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const {
  notFoundErrorHandler,
  generalErrorHandler,
} = require("./middleware/errors");

const corsOptions = {
  origin: process.env.MONGO_DB,
};

const app = express();
const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(`Server on, lisen at ${port}`);
      resolve(server);
    });
    server.on("error", () => {
      console.log("Error tring to conect the server");
      reject();
    });
  });

app.use(cors(corsOptions));
app.use(express.json());

app.use("/user", userRoutes);

app.use(notFoundErrorHandler);
app.use(generalErrorHandler);

module.exports = initializeServer;
