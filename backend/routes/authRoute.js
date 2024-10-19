const router = require("express").Router()
const {
    register,
    login,
    profile
} = require("../controllers/authController")
const authMiddleware = require("../middlewares/authMiddleware")

// @DESC   Register a user
// @ROUTE  POST /api/auth/register
// @ACCESS public
router.post("/register", register)


// @DESC   Login user
// @ROUTE  POST /api/auth/login
// @ACCESS public
router.post("/login", login)


// @DESC   user profile
// @ROUTE  GET /api/auth/profile
// @ACCESS private
router.get("/profile", authMiddleware, profile)


module.exports = router