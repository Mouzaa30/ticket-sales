/** load library express */
const express = require("express");

/** initiate router */
const router = express.Router();

/** allow request json */
router.use(express.json());

/** load controller & middleware */
const ticketController = require("../controllers/ticket.controller");
const { authorize } = require("../controllers/auth.controller");

/** POST: Tambah/Beli Tiket */
router.post("/", ticketController.addTicket);

/** POST: Cek Diskon/Voucher */
router.post("/check-discount", ticketController.checkDiscount);

/** GET: Top 5 Event Populer */
router.get("/top5", ticketController.topFiveEvents);

/** GET: Ambil Pembeli Tiket berdasarkan Nama Event */
router.get("/event/:eventName", ticketController.getTicketByEvent);
router.get("/by-event/:eventName", ticketController.getTicketByEvent);

/** GET ALL: Ambil Semua Tiket (atau Tiket User Terlogin) */
router.get("/", authorize, ticketController.getAllTicket);

/** GET BY ID: Ambil Tiket berdasarkan ID Tiket atau Nama User */
router.get("/:id", ticketController.ticketByID);

// router.get("/find/:key", authorize, ticketController.findTicket);


/** DELETE: Hapus Tiket berdasarkan ID */
router.delete("/:id", authorize, ticketController.deleteTicket);

/** export router */
module.exports = router;