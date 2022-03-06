const express = require("express");
const users = require("../models/userSchema");
const router = express.Router();
const user = require("../models/userSchema");



// router.get("/", (req, res) => {
//     console.log("connect");
// });

router.post("/register", (req, res) => {
    // console.log(req.body);
    const {name, email, age, mobile, work, add, desc} = req.body;

    if(!name || !email ||  !age || !mobile|| !work || !add || !desc){
        res.status(404).send("please fill in the data required");
    }

    try {

        const preuser = await users.findOne({email: email});
        console.log(preuser);

    } catch (error) {
        res.status(404).send(error)
    }
})


module.export = router;