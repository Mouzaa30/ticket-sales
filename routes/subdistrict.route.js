const express = require("express");
const router = express.Router();

const subdistrictController = require("../controllers/subdistrict.controller");

// GET semua data kecamatan / pencarian via query ?search=
router.get("/", subdistrictController.getAllSubdistricts);

// GET pencarian data kecamatan via route param /find/:key
router.get("/find/:key", subdistrictController.findSubdistrict);

// GET detail kecamatan berdasarkan id
router.get("/:id", subdistrictController.getSubdistrictById);

// POST tambah data kecamatan
router.post("/", subdistrictController.addSubdistrict);

// PUT update data kecamatan berdasarkan id
router.put("/:id", subdistrictController.updateSubdistrict);

// DELETE hapus data kecamatan berdasarkan id
router.delete("/:id", subdistrictController.deleteSubdistrict);

module.exports = router;
