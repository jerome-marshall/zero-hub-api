const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    const user = new User({
        username: "Jerome",
        email: "jerome@gmail.com",
        password: "12344=5===",
    });

    await user.save().then(() => {
        console.log("user saved");
    });
});

module.exports = router;
