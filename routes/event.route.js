const express = require("express");
const router = express.Router();

const eventController = require("../controllers/event.controller");

router.get("/", eventController.getAllEvent);
router.get("/:key", eventController.findEvent);
router.post("/", eventController.addEvent);
router.put("/:id", eventController.updateEvent);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;