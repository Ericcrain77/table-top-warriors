const router = require("express").Router();
const {User} = require("../../models");
//login authentication will go here

//route to get all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: {exclude: ["password"]}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;