const router = require("express").Router();

//homeroutes will go here
const apiRoutes = require("./api");
//dashboard routes will go here

//router.use for homeRoutes will go here
router.use("/api", apiRoutes)
//router.use for dashboard routes will go here

module.exports = router;