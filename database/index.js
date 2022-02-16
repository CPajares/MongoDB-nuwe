const mongoose = require("mongoose");

const initiateDB = (conectingString) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-underscore-dangle
        delete ret.__v;
      },
    });

    mongoose.connect(conectingString, (error) => {
      if (error) {
        console.log("Not possible to conect DB.");
        console.log(error.message);
        reject(error);
      }

      console.log("conected with DB");
      resolve();
    });
  });

module.exports = initiateDB;
