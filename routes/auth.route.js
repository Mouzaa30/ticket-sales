/** load library express */
const express = require(`express`)

/** initiate object that instance of express Router */
const router = express.Router() // Ubah dari express() menjadi express.Router()

/** load function authentication from auth's controller */
const {authenticate} = require(`../controllers/auth.controller`)

/** create route for authentication */
router.post(`/`, authenticate) // Ubah dari app.post menjadi router.post

// Hapus baris app.use(express.json()) di sini karena sudah dipasang di server utama (app.js)

module.exports = router;