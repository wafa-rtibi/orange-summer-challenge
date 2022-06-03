const express = require("express");
const router = express.Router();

const { addUser, editUser, removeUser , getUsers} = require("../controllers/user");

router.route("/users").get(getUsers);
router.route("/addUser").post(addUser);
router.route("/editOrDelete/:id").delete(removeUser).put(editUser);

module.exports = router;
