/** load library express */
const express = require(`express`);
const router = express.Router();

/** allow reading request json */
router.use(express.json());

/** load controller user and auth */
const userController = require(`../controllers/user.controller`);
const { authorize } = require('../controllers/auth.controller');

/** load middleware functions */
const { validateUser, validateUserUpdate } = require("../middleware/user-validation");
const { IsUser, IsAdmin } = require('../middleware/role-validation');

// Public route: Register user
router.post("/register", ...validateUser, userController.register);

// Admin route: Add new user
router.post("/", authorize, IsAdmin, ...validateUser, userController.addUser);

// Update user by ID
router.put("/:id", authorize, IsUser, ...validateUserUpdate, userController.updateUser);

// Reset user password by ID
router.put("/reset/:id", authorize, IsUser, userController.resetUser);

// Delete user by ID (Admin only)
router.delete("/:id", authorize, IsAdmin, userController.deleteUser);

// Get user by search keyword
router.get("/find/:key", authorize, userController.findUser);

// Get all users
router.get("/", authorize, userController.getAllUser);

/** export router */
module.exports = router;