const express = require("express");
const {
  createUser,
  deleteUser,
  getUserByUserName,
  editUser,
} = require("../controller/usersController");

const router = express.Router();

router.post("/create-user", createUser);
router.delete("/delete-user/:id", deleteUser);
router.get("/get-user-by-username", getUserByUserName);
router.put("/edit-user/:id", editUser);

module.exports = router;
