const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");

// POST
router.post("/add", cartController.addProductToCart); // CreateProduct function ada di controller

// GET
router.get("/show/:user_id", cartController.getCart);

// PUT
router.put("/update/:user_id/:product_id", cartController.UpdateProductQuantityInCart);

// DELETE
router.delete("/remove/:user_id/:product_id", cartController.RemoveProductInCart);

// supaya router bisa dikonsumsi dari mana saja
module.exports = router;
