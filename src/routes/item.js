const express = require("express");
const router = express.Router();

const { addItem, editItem, removeItem , getItems} = require("../controllers/item");
router.route("/items").get(getItems)
router.route("/addItem").post(addItem);
router.route("/editOrDelete/:id").delete(removeItem).put(editItem)

module.exports = router;
