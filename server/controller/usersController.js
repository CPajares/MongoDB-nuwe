const bcrypt = require("bcrypt");
const User = require("../../database/models/user");

const createUser = async (req, res, next) => {
  const { name, username, password, age } = req.body;
  try {
    const user = await User.create({
      name,
      username,
      password: bcrypt.hashSync(password, 10),
      age,
    });
    res.json(user);
  } catch (error) {
    error.code = 400;
    error.message = "Not valid inputs";
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    error.message = "User not found";
    error.code = 400;
    next(error);
  }
};

const getUserByUserName = async (req, res, next) => {
  const usernameToFind = req.body;
  try {
    const user = await User.findOne(usernameToFind);
    res.json(user);
  } catch (error) {
    error.message = "User not found";
    error.code = 400;
    next(error);
  }
};

const editUser = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    error.message = "User not found";
    error.code = 400;
    next(error);
  }
};

module.exports = { createUser, deleteUser, getUserByUserName, editUser };
