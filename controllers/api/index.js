const router = require("express").Router();

const userRoutes = require("./user-routes");
//other api routes will go here


router.use("/users", userRoutes);
//other router.use will go here


module.exports = router;