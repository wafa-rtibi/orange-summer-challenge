const User = require("../models/User");



const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users)
  } catch (error) {
    res.send(error);
  }
};
const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.send(error);
  }
};

const editUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(  req.params.id , {...req.body});
    res.status(200).send("user updated");
  } catch (error) {
    res.send(error);
  }
};

const removeUser = async (req, res) => {
  const ID=(req.params.id)
  try {
    await User.findByIdAndDelete(ID)
    res.status(200).send("user deleted");
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addUser, editUser, removeUser , getUsers};
