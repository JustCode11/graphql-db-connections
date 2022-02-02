const mongoose = require("mongoose");

const connectToMongoDB = DB_HOST => {
    mongoose.connect(DB_HOST, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
        .then(() => {
            console.log('Connected to MongoDB ...');
        })
        .catch((err) => {
            console.log(err)
        })
};

module.exports = { connectToMongoDB };