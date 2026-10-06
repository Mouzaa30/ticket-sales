const express = require("express");
const router = express.Router();

const seatController = require("../controllers/seat.controller");

// GET semua data seat
router.get("/", seatController.getAllSeat);

// GET pencarian seat berdasarkan keyword
router.get("/find/:key", seatController.findSeat);

// POST tambah seat
router.post("/", seatController.addSeat);

// PUT update seat berdasarkan ID
router.put("/:id", seatController.updateSeat);

// DELETE seat berdasarkan ID
router.delete("/:id", seatController.deleteSeat);

module.exports = router;