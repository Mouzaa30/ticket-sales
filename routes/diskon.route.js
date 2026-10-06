const express = require("express");
const router = express.Router();

const diskonController = require("../controllers/diskon.controller");

// GET semua diskon
router.get("/", diskonController.getAllDiskon);

// GET pencarian diskon
router.get("/find/:key", diskonController.findDiskon);

// POST tambah diskon
router.post("/", diskonController.addDiskon);

// PUT update diskon
router.put("/:id", diskonController.updateDiskon);

// DELETE diskon
router.delete("/:id", diskonController.deleteDiskon);

// PUT reset diskon
router.put("/reset/:id", diskonController.reset);

module.exports = router;