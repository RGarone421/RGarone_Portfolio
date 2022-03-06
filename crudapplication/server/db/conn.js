const mongoose = require("mongoose");

// const DB = ""


mongoose.connect(DB, {
    useNerUrlParser: true,
    useUnifiedTopology: true
}).then (() => console.log("connected!")).catch((error) => console.log(error.message));