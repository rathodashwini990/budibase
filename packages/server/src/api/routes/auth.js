const Router = require("@koa/router")
const controller = require("../controllers/auth")

const router = Router()

// TODO: needs removed
router.get("/api/self", controller.fetchSelf)

module.exports = router
